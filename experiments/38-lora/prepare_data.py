"""Build a LoRA dataset from your own git history: diff in, commit message out.

Run:  uv run prepare_data.py ~/code/repo-a ~/code/repo-b --max-diff-chars 2000

Writes data/train.jsonl, data/valid.jsonl, data/test.jsonl in mlx-lm's "chat" format
(one JSON object per line: {"messages": [system, user, assistant]}).
mlx-lm detects the format by itself, and it applies the model's chat template when it trains.

The data directory is gitignored: it contains your private diffs.
"""

import argparse
import json
import random
import subprocess
from pathlib import Path

# The same system prompt goes into every example AND into your evaluation prompts.
# If training and test prompts differ, you are measuring the wrong thing.
SYSTEM = "Write the commit message for this diff."


def git(repo: Path, *args: str) -> str:
    """Run a git command in `repo` and return stdout as text."""
    return subprocess.run(
        ["git", "-C", str(repo), *args],
        capture_output=True, text=True, errors="replace", check=True,
    ).stdout


def commits(repo: Path, author: str | None) -> list[str]:
    """All non-merge commit hashes, newest first. Filter by author if given."""
    args = ["log", "--no-merges", "--format=%H"]
    if author:
        args.append(f"--author={author}")
    return git(repo, *args).split()


def example(repo: Path, sha: str, max_diff_chars: int) -> dict | None:
    """One training example, or None if the commit is a bad one."""
    message = git(repo, "show", "-s", "--format=%B", sha).strip()
    diff = git(repo, "show", "--format=", "--no-color", "--stat", "--patch", sha)

    # ---- Data quality decisions. These matter more than any hyperparameter. ----
    # TODO(you): decide what to drop, then check by reading 20 random examples. Ideas:
    #   - empty diffs, or diffs that are mostly lockfiles / generated files
    #   - messages like "wip", "fix", "update" (do you WANT the model to learn those?)
    #   - messages that are very long (changelog dumps) or contain "Co-Authored-By" trailers
    if not diff.strip() or len(message) < 10:
        return None

    # Cut long diffs: long examples cost memory and time. This is not only about speed. mlx-lm
    # truncates a too-long example at the END, and with mask_prompt the end is the only part that
    # counts: if the diff alone fills --max-seq-length, the commit message is cut off, no target
    # token is left, and the loss is `nan`. Rough rule: 1 token ~ 3 characters of diff, so 2000
    # characters ~ 700 tokens, which fits in max_seq_length 1024 with room for the message.
    if len(diff) > max_diff_chars:
        diff = diff[:max_diff_chars] + "\n[diff truncated]"

    return {
        "messages": [
            {"role": "system", "content": SYSTEM},
            {"role": "user", "content": diff},
            {"role": "assistant", "content": message},
        ]
    }


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("repos", nargs="+", type=Path, help="git repositories to read")
    ap.add_argument("--author", help="only commits by this author (substring of name or email)")
    ap.add_argument("--max-diff-chars", type=int, default=2000)
    ap.add_argument("--seed", type=int, default=0)
    ap.add_argument("--out", type=Path, default=Path("data"))
    args = ap.parse_args()

    rows = []
    for repo in args.repos:
        for sha in commits(repo, args.author):
            if (ex := example(repo, sha, args.max_diff_chars)):
                rows.append(ex)
    print(f"{len(rows)} usable commits")

    # Fixed seed -> the same split every run. The test set is touched ONLY at the end.
    random.Random(args.seed).shuffle(rows)
    # TODO(you): is 80/10/10 right for your row count? With 300 rows the test set is only 30 examples.
    n = len(rows)
    n_valid = n_test = max(1, n // 10)
    splits = {
        "test": rows[:n_test],
        "valid": rows[n_test:n_test + n_valid],
        "train": rows[n_test + n_valid:],
    }

    args.out.mkdir(exist_ok=True)
    for name, items in splits.items():
        with open(args.out / f"{name}.jsonl", "w") as f:
            for item in items:
                # One example per line, no pretty-printing: that is what mlx-lm expects.
                f.write(json.dumps(item, ensure_ascii=False) + "\n")
        print(f"{name}: {len(items)}")


if __name__ == "__main__":
    main()

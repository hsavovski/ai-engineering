"""Base model vs. fine-tuned model on the held-out test set. YOU write the TODOs.

Run:  uv run compare.py --adapter-path adapters

Plan: for every test example, generate a message with the base model and with the base + adapter,
save both next to the real message, then score and read them.
"""

import argparse
import json
from pathlib import Path

from mlx_lm import generate, load
from mlx_lm.sample_utils import make_sampler

BASE = "Qwen/Qwen3-1.7B"  # must be the same model you trained on


def load_test(path: Path) -> list[dict]:
    return [json.loads(line) for line in path.read_text().splitlines() if line.strip()]


def complete(model, tokenizer, messages: list[dict], max_tokens: int = 100) -> str:
    """Generate one assistant reply for `messages` (system + user only)."""
    # Qwen3 can "think" before answering. Switch that off: our data has no thinking.
    prompt = tokenizer.apply_chat_template(
        messages, add_generation_prompt=True, enable_thinking=False
    )
    # temp=0 -> greedy decoding, so the base/tuned difference is not sampling noise.
    return generate(model, tokenizer, prompt=prompt, max_tokens=max_tokens,
                    sampler=make_sampler(temp=0.0))


def score(prediction: str, reference: str) -> dict:
    """Return numbers for ONE prediction. Cheap, automatic, imperfect; that is fine.

    TODO(you): pick 2-3 measurable properties of YOUR commit-message style, for example:
      - does the first line match the shape you use (a `type(scope):` prefix? lower-case? no final period?)
      - first-line length <= 72 characters
      - word overlap with the real message
    Return them as {"name": value}. Decide the metrics BEFORE you look at the outputs.
    """
    raise NotImplementedError


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--adapter-path", default="adapters")
    ap.add_argument("--data", type=Path, default=Path("data/test.jsonl"))
    args = ap.parse_args()

    test = load_test(args.data)
    base_model, tokenizer = load(BASE)
    # Passing adapter_path wraps the layers with LoRA and loads the trained A and B matrices.
    tuned_model, _ = load(BASE, adapter_path=args.adapter_path)

    results = []
    for row in test:
        prompt_messages = row["messages"][:-1]      # system + user (the diff)
        reference = row["messages"][-1]["content"]  # the real commit message
        results.append({
            "reference": reference,
            "base": complete(base_model, tokenizer, prompt_messages),
            "tuned": complete(tuned_model, tokenizer, prompt_messages),
        })

    # TODO(you): average score() for "base" and for "tuned", print a small table, and dump
    # `results` to results.json so you can read 10 of them side by side. Numbers first,
    # then your own eyes: which one would you actually commit?
    raise NotImplementedError


if __name__ == "__main__":
    main()

# 06 – Parallel tasks in Claude Code: terminals vs. a workflow

## What I tried

Can chapter tasks run in parallel without breaking each other, and what does each way of doing it cost in Pro usage, wall time and my attention?

Two batches of chapter issues, both on Opus 5.5 (the model chosen in [experiment 02](../02-model-comparison-issue-07/README.md)):

| Batch | Issues | How |
|---|---|---|
| 1 | 08 (0.2), 11 (1.1) | **Separate terminals.** One git worktree per issue (`.worktrees/issue-NN` on branch `issue-NN`), one `claude` session in each, prompt `run issue N`. Merged by hand afterwards. |
| 2 | 09 (0.3), 10 (0.4), 12 (1.2), 18 (1.8) | **A workflow.** Claude wrote a workflow script ([`write-chapters-batch.workflow.js`](write-chapters-batch.workflow.js)) that runs a writer agent per issue, then a separate fact-checker agent per chapter, in the same worktrees. Started from one session with "let's do the workflow with these 4 issues". |

### The ways to run tasks in parallel

| Option | How it works | Good for | Downside |
|---|---|---|---|
| Separate terminals + worktrees | One `claude` per worktree, started by you | Watching and steering each run; per-run usage | You start and track each session |
| Subagents from one session | Background agents, each in its own worktree (`isolation: "worktree"`) | Least effort | Can't steer mid-run; usage lumped into one session |
| A workflow | A script that orchestrates agents deterministically (fan-out, pipelines, verify stages) | Bigger batches, built-in review stage | Most Pro usage; you opt in explicitly |
| Cloud sessions | Runs on Anthropic's machines against the GitHub repo | Running while the Mac is off | Needs repo access; no local Ollama |
| Same checkout, no worktrees | Two sessions in one folder | Nothing | Edits and commits collide |

### What makes these tasks parallelizable

- **Dependencies.** A chapter can only be written once the chapters in its `needs` are written, because the writer reads them for terms and links back. So batches come in waves: 0.1 → {0.2, 1.1} → {0.3, 0.4, 1.2, 1.8} → …
- **Isolation.** A worktree per issue gives each agent its own files and branch. `node_modules` is a symlink to the main checkout's, and it's listed in `.git/info/exclude` so no agent commits it (`.gitignore`'s `node_modules/` only matches directories, not symlinks).
- **Shared files.** Every chapter task appends to `GLOSSARY.md`, `book/resources.md` and `PROGRESS.md`. The spec now says "only append rows, never reorder", which keeps conflicts to adjacent-line clashes that are trivial to resolve.

## What happened

### Batch 1: separate terminals (2026-11-08)

| | |
|---|---|
| Wall time | ~10–12 min for both (worktrees created 21:45, commits at 21:54 and 21:56) |
| Pro usage | ~6% of the 5-hour window for both runs together, so roughly 3% per chapter |
| My attention | Start two sessions, then wait |
| Merge | 1 conflict, in `PROGRESS.md` (both appended a log line); `GLOSSARY.md`, `resources.md` auto-merged |
| Build after merge | Passed |

### Batch 2: workflow (2026-11-08)

Worktrees created by hand first (so the writer and the fact-checker for an issue share one folder and a predictable branch), then one workflow run: `pipeline(issues, write, verify)`. Each issue moves to its fact-checker as soon as its writer is done, without waiting for the other writers.

| | |
|---|---|
| Wall time | 10.4 min for all four, writing and fact-checking (one workflow run, 8 agents, 0 errors) |
| Pro usage | `/usage` showed **44%** of the 5-hour window after the run. Batch 1 used ~6% for two chapters (~3% each); this is ~11% per chapter if all 44% was this run, so the workflow (writer + fact-checker, longer chapters) cost roughly 3–4× as much per chapter |
| Tokens | ~867k across the 8 agents (writers 109k–179k each, fact-checkers 70k–88k each), 249 tool calls |
| My attention | One sentence to start it; nothing until it finished |
| Merge | Done by Claude afterwards, one branch at a time: 3 of 4 merges conflicted, all "both sides appended a row" in `PROGRESS.md`, `book/resources.md` and the generated `book/experiments/index.md`; resolved by keeping both sides in issue order |
| Build after merge | Passed |

Per issue:

| Issue | Chapter | Words | Ext. links | Resources | Glossary | Writer | Fact-check | Claims checked | Fixed | Cut |
|---|---|---|---|---|---|---|---|---|---|---|
| 09 | 0.3 Standards and orgs | 3,676 | 21 | 7 | 5 | 5.3 min | 1.6 min | 48 | 2 | 0 |
| 10 | 0.4 Your lab | 3,996 | 16 | 6 | 3 | 5.1 min | 1.9 min | 34 | 3 | 0 |
| 12 | 1.2 Tokens and tokenization | 4,791 | 22 | 9 | 5 | 6.7 min | 3.0 min | 34 | 2 | 0 |
| 18 | 1.8 Sampling and temperature | 5,153 | 17 | 7 | 5 | 8.0 min | 2.3 min | 48 | 2 | 0 |

What the fact-checkers fixed (9 of 164 claims checked; no broken links):

- 0.3: "skills launched with Claude Code" → "developed while working on Claude Code, launched October 2025" (twice: text and timeline).
- 0.4: Anthropic spend limits reworded to match the source (custom vs. standard rate limits); "Pro doesn't include API credit" got a source; "output costs several times input" replaced by a link to Landscape.
- 1.2: a diagram showed `1234` as one token, but GPT-4's tokenizer splits it `123` + `4` (re-run with js-tiktoken); "the paper's figure" → "Algorithm 1".
- 1.8: OpenAI's `seed` is "deprecated", not just "beta"; `ollama show` sample output reordered to match the real command.

Small, real errors, the kind a learner would absorb as fact. None would have been caught by the writer re-reading its own work.

**Things that went wrong or need follow-up**

- **Experiment numbers raced.** Chapters 1.2 and 1.8 each scaffolded a practice experiment and picked the next free number in their own worktree (`04-tokenizer`, `05-temperature`). This write-up was started as `04` on `main` meanwhile, and had to be renumbered to `06`. Anything "next free number" (experiments, issues) needs to be assigned before the fan-out, not by the agents.
- **One shared-row edit.** Issue 09 edited the existing AAIF glossary row in place (to add Agent Skills) instead of only appending. It merged cleanly this time, but it's exactly what the spec rule is there to prevent.
- **Landscape is stale** (found by issue 09): Agent Skills was donated to the AAIF on 2026-10-22 and the AAIF now has 10 projects; `book/landscape.md` still lists only the founding projects.
- **`smoke.ts` sends `anthropic-version: 2023-06-01`** (found by issue 10); the current docs show `2026-10-21`.
- **Chapters are getting long.** 3.7k–5.2k words vs. ~3.2k for 0.1. Still inside "20–60 min", but the trend is worth watching.

## Why (what I learned)

<!-- Your conclusions: which way to use for which kind of batch, whether the fact-check stage earned its cost, how big a batch your Pro window allows. -->

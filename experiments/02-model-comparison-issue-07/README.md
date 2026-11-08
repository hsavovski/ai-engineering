# 02 – Model comparison: issue 07 with Opus 5.5 vs. Sonnet 5.5

## What I tried

Same task, same repo state, same prompt ("run issue 7"), two models in Claude Code:

| Run | Model | Where the output lives |
|---|---|---|
| A | Claude Opus 5.5 (`claude-opus-5-5`) | commit `c3f0a9e` on `main`, tag `issue-07-opus`, copy in `opus-5.5/` |
| B | Claude Sonnet 5.5 (`claude-sonnet-5-5`) | branch `exp/issue-07-sonnet`, copy in `sonnet-5.5/` |

The question: for a writing-and-research task like a chapter, is the bigger model worth its extra cost and Pro usage, or is Sonnet good enough?

### How run B is set up

Branch `exp/issue-07-sonnet` reverts commit `c3f0a9e`, so chapter 0.1 is a stub again, issue 07 is `ready-for-agent`, and the glossary, resources and `PROGRESS.md` are as they were before run A. This folder stays, so run B can see it. Tell the agent not to read it (see step 2), or the comparison is contaminated.

### Steps for run B

1. In a fresh session, check you're on the branch: `git branch` shows `* exp/issue-07-sonnet`.
2. `/model sonnet`, then confirm with `/status` that it's Sonnet 5.5. Prompt exactly: `run issue 7`. If it starts reading `experiments/02-*`, stop it and add "don't read experiments/02".
3. Note while it runs: rough wall time, how many subagents it spawns, any fetch failures and how it handled them, and your Pro usage before and after (`/usage`).
4. When it's committed, copy its outputs:
   ```bash
   mkdir -p experiments/02-model-comparison-issue-07/sonnet-5.5
   cp book/part-00-catch-up/0.1-what-changed.md experiments/02-model-comparison-issue-07/sonnet-5.5/
   git diff HEAD~1 HEAD -- GLOSSARY.md book/resources.md > experiments/02-model-comparison-issue-07/sonnet-5.5/glossary-and-resources.diff
   ```
5. Compare side by side: `diff opus-5.5/0.1-what-changed.md sonnet-5.5/0.1-what-changed.md`, or read both in the book (`git checkout issue-07-opus` vs. the branch, `npm run dev`).
6. Fill in the tables below, then decide which version stays on `main`.

## What happened

### Process

| | Opus 5.5 (A) | Sonnet 5.5 (B) |
|---|---|---|
| Date | 2026-11-08 | |
| Wall time | not recorded | |
| Pro usage used | not recorded | |
| Subagents spawned | 2 web-fetch (link checks) | |
| Fetch failures and handling | OpenAI "Learning to reason with LLMs" returned 403; dropped, o1 claim sourced through Willison + DeepSeek-R1 | |
| Asked you anything? | No | |
| `npm run build` passed | Yes | |

### Output

| | Opus 5.5 (A) | Sonnet 5.5 (B) |
|---|---|---|
| Chapter words | 3,242 | |
| External links in chapter | 14 | |
| Resources added | 6 | |
| Glossary terms added | 4 | |
| All six sections, "My understanding" empty | Yes | |
| Acceptance criteria met (issue 07 checklist) | | |

### Quality (your judgment, 1–5)

Spot-check 3–4 claims and links in each version against their sources before scoring accuracy.

| Criterion | Opus 5.5 (A) | Sonnet 5.5 (B) | Notes |
|---|---|---|---|
| Accuracy: claims match the linked source | | | |
| Coverage of the six required topics | | | |
| Fits me (experienced engineer, mid-2025 gap) | | | |
| Resources set up and built on, not just listed | | | |
| Practice brief: clear, doesn't solve it for me | | | |
| Check questions test understanding, not recall | | | |
| Writing: concise, readable | | | |

## Why (what I learned)

<!-- Your conclusions: where the models differed, whether the difference matters for chapter tasks, and which model to use for which kind of task from now on. -->

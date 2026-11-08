<!-- Generated from experiments/*/README.md by `npm run experiments` (also runs before dev and build). Edit the README, not this file. -->

# 02 – Model comparison: issue 07 with Opus 5.5 vs. Sonnet 5.5

## What I tried

For a writing-and-research task like a chapter, is the bigger model worth its extra cost and Pro usage, or is Sonnet good enough?

Same task, same repo state, same prompt ("run issue 7"), two models in Claude Code:

| Run | Model | Where the output lives |
|---|---|---|
| A | Claude Opus 5.5 (`claude-opus-5-5`) | commit `c3f0a9e` on `main`, tag `issue-07-opus`, copy in `opus-5.5/` |
| B | Claude Sonnet 5.5 (`claude-sonnet-5-5`) | commit `f3022c8` on branch `exp/issue-07-sonnet`, copy in `sonnet-5.5/` |

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
| Date | 2026-11-08 | 2026-11-08 |
| Wall time | not recorded | at most ~9 min (branch reset committed 21:08, chapter committed 21:17) |
| Pro usage used | not recorded | |
| Subagents spawned | 2 web-fetch (link checks) | |
| Fetch failures and handling | OpenAI "Learning to reason with LLMs" returned 403; dropped, o1 claim sourced through Willison + DeepSeek-R1 | |
| Asked you anything? | No | |
| `npm run build` passed | Yes | Yes (re-run on the branch afterwards) |

### Output

| | Opus 5.5 (A) | Sonnet 5.5 (B) |
|---|---|---|
| Chapter words | 3,242 | 3,074 |
| External links in chapter (unique URLs) | 16 | 11 |
| Internal book links (unique) | 29 | 15 |
| Sections in the explanation | 6 shifts + durable-vs-names table + Anthropic timeline | 7 shifts (coding agents split out) + dated timeline table + durable-vs-names table |
| Resources added | 6 | 7 |
| Glossary terms added | 4 | 3 |
| All six sections, "My understanding" empty | Yes | Yes |
| Acceptance criteria met (issue 07 checklist) | All | All, but left issue 07 at `ready-for-agent` (spec says set `claimed`, then `resolved`) |

### Observed differences (Claude's first read, to check before scoring)

Not scores, just what stands out reading both side by side.

**Where Opus is stronger**

- **Sources at the point of use.** It opens with both Willison year-in-review posts (2024 *and* 2025, as the issue asked); Sonnet uses only the 2025 one and puts it near the end, after the sections that quote it.
- **Structure per shift.** Every section has the same *What changed / Why it happened / Why it matters / Where in the book* shape, and the "where" lists are fuller (29 internal links vs. 15).
- **Ties to this repo.** It points out that `.scratch/` issues and `PROGRESS.md` are the long-running-agent pattern, and includes Willison's "(only?) year of MCP" counterpoint.
- **Process.** It set issue 07 to `resolved`; Sonnet didn't touch the issue status.

**Where Sonnet is stronger**

- **Fewer unsourced claims.** It keeps prices and rankings on Landscape, and its dated timeline table cites a source per row. Opus states several things without a link (see below).
- **Practice brief.** Adds "add an eighth row for a shift this chapter missed" and "at least two cells you were wrong about", which push harder on your own understanding.
- **METR time horizon** as evidence for "agents started working" is a nice, measurable anchor that Opus doesn't have.

**Claims to spot-check first**

| Version | Claim | Why check it |
|---|---|---|
| Opus | "cheapest and most expensive frontier-lab models differ by about 100× per token" | No source, and the spec says prices live on Landscape |
| Opus | A2A joined the AAIF in August 2026 | No link in the chapter |
| Opus | Timeline of Anthropic posts, incl. "agent memory (November 2026)" | Dates listed from the index without links |
| Opus | Context windows "around 1M tokens", "context rot" | No source given |
| Sonnet | Willison's Artificial Analysis snapshot: top 5 open-weight models all Chinese, gpt-oss-120B sixth | Very specific, easy to verify in the post |
| Sonnet | METR: under 30 min (2024) to multiple hours (late 2025) | Cited second-hand through Willison |
| Sonnet | Agent Skills "later published as an open standard" | No date or link |

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

**Decision (2026-11-08):** the Opus version stays on `main` as chapter 0.1. Sonnet's version is kept in `sonnet-5.5/` and on branch `exp/issue-07-sonnet` for reference.

<!-- Your conclusions: where the models differed, whether the difference matters for chapter tasks, and which model to use for which kind of task from now on. -->

## Files

On GitHub, in [`experiments/02-model-comparison-issue-07/`](https://github.com/hsavovski/ai-engineering/tree/main/experiments/02-model-comparison-issue-07):

- [`opus-5.5/0.1-what-changed.md`](https://github.com/hsavovski/ai-engineering/blob/main/experiments/02-model-comparison-issue-07/opus-5.5/0.1-what-changed.md)
- [`opus-5.5/glossary-and-resources.diff`](https://github.com/hsavovski/ai-engineering/blob/main/experiments/02-model-comparison-issue-07/opus-5.5/glossary-and-resources.diff)
- [`sonnet-5.5/0.1-what-changed.md`](https://github.com/hsavovski/ai-engineering/blob/main/experiments/02-model-comparison-issue-07/sonnet-5.5/0.1-what-changed.md)
- [`sonnet-5.5/glossary-and-resources.diff`](https://github.com/hsavovski/ai-engineering/blob/main/experiments/02-model-comparison-issue-07/sonnet-5.5/glossary-and-resources.diff)

# 132 — Fact-check chapter 5.6

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-05-harnesses/5.6-long-running-agents.md`

## Goal

Fact-check chapter 5.6 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 5.6".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 5.6 "Long-running agents" written: why one context is not enough (three problems, compaction vs context reset, context anxiety), initializer vs worker as one loop with two entry prompts (Mermaid), feature list / progress log / init script / start-of-session routine, verification in the loop (user-level testing, harness-set pass flag, blind spots), drift sources, generator-evaluator harness (planner/generator/evaluator, sprint contract, evaluator tuning, remove-components-as-models-improve), a choosing-a-setup table; practice is project step 20 (--init/--work/--run modes, harness-owned verdicts, kill-mid-feature test, comparison with a single window; brief and acceptance only, no code, no experiment folder); 3 resource rows and 7 glossary terms added (issue 64). Opened and read in full (fetched 2026-11-12): both Anthropic articles (research/ URLs; the engineering/ URLs redirect there), the autonomous-coding quickstart README (only the README, not the code or prompts). Not verified: the "table near the middle" and "sample transcript" pointers in the Read-now callout rest on my reading of the extracted text; "prompts/ directory" and "max iteration count" for the quickstart come from the README only; the harness-side advice (harness runs verification and sets passes) and the drift list are my own synthesis, labelled as such; the ~15/~25 min reading times are estimates; the 20x cost and $9/$200 figures are quoted from the article, not reproduced. Not opened: the Claude 4 best-practices multi-context page and the C-compiler article (not cited). Nothing was run besides check and build.

## Comments

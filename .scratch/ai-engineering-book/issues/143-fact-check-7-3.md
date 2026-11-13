# 143 — Fact-check chapter 7.3

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-07-ai-native-development/7.3-automated-review.md`

## Goal

Fact-check chapter 7.3 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 7.3".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 7.3 "Automated code review" written (core): three review moments (local, PR, human) with Mermaid, `/code-review` (targets, flags, effort and its remembered level, background subagent, `--fix` and `/rewind` gap, reads CLAUDE.md not REVIEW.md), PR review (managed Code Review service: find/verify/rank/post, severities, never approves or blocks, per-repo run setting and billing; Claude in own CI via the GitHub Action; other vendors' bots only as a question list; ultrareview), review against standards and specs (CLAUDE.md vs REVIEW.md with a problem-to-instruction table, base-branch/protected-branch rule, spec and tests as intent), false positives vs false negatives (reads-not-runs, scope, unwritten intent, shared author blind spots, probabilistic coverage) with a decision flowchart; practice is a project/ step (own review first, `/code-review` on the same range, classify with evidence, compare, add CLAUDE.md rules, re-run; notes in project/REVIEW-NOTES.md); 4 resource rows (new Part 7 section in resources.md) and 5 glossary terms added (issue 75). Opened and read (fetched with curl as .md 2026-11-12): Claude Code docs code-review, code-review-local, code-review-customize, code-review-pull-requests (severity, respond, check run, comment commands; middle part truncated in my view), ultrareview (intro and CLI start only), code-review-costs (intro, pricing, how often), github-actions (review workflow and "Run a skill" sections), commands (`/verify` row). Only HTTP 200, not read: claude.com blog "How Anthropic secures its AI-native SDLC" (not cited in the chapter). Not verified: the claim that a same-model author and reviewer repeat misconceptions is labelled in the chapter as my reasoning with no source; "a second run can report different things" is also my inference, not in the docs; `REVIEW.md` include/skill-file rules summarized only at a high level; the managed service's Team/Enterprise requirement, `/code-review` flags and version-specific features come from the docs, not tried; reading times are my estimates; assumed roadmap step 22 (7.2) is the "last project change" and fell back to any recent commit if 7.2 isn't done. Not run: no `/code-review`, ultrareview, workflow or hook was executed; only check and build.

## Comments

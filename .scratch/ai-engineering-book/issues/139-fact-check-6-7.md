# 139 — Fact-check chapter 6.7

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-06-claude-code/6.7-issue-workflows.md`

## Goal

Fact-check chapter 6.7 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 6.7".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 6.7 "Issue workflows: plan, grill, spec" written (core): workflow Mermaid (idea → grill → spec → tickets → label → fresh session), plan mode (what it does, when to use or skip), grilling (Pocock's design tree/frontier/recommended answers, built-in "interview me" prompt, when to grill instead of plan), specs as single source (to-spec template, no-paths rule, seams), why fresh sessions work, self-contained issues (AGENT-BRIEF principles table), tracer-bullet tickets, the five triage labels, kanban with agents (claim, worktree per card, WIP limit, mechanical done; Mermaid state flow), this repo as case study, a which-tool table; practice is notes/issue-workflow.md (grill → spec → 2–3 issues → run one in a fresh worktree → reflect; notes only, no code, no experiment folder); 4 resource rows and 7 glossary terms added (issue 71). Opened and read (fetched with curl 2026-11-12): Pocock README, grilling, to-spec, to-tickets, triage SKILL.md (first ~90 lines) and AGENT-BRIEF.md (principles and template), Claude Code permission-modes (plan mode section), best-practices ("Brainstorm with Claude first", `/clear` bullet, worktrees paragraph), common-workflows (plan section); HTTP 200 only for the worktrees docs page, the spec.md/issue-tracker.md/triage-labels.md GitHub URLs (the latter two cited but only the local copies were read). Not verified: the repo's GitHub URLs show `main` as pushed, which may lag this branch; what `implement-spec` does rests on the README one-liner (SKILL.md not opened); `grill-with-docs` described from the README only; the "roughly hundred issue files" is a count of the issues folder (103 files); the kanban framing (claim, WIP limit, mechanical done), the "skip plan mode for one-sentence diffs" cut-off and the tool-choice table are my own synthesis, labelled as such where stated; the claim that the book-batch workflow and book-auto behave as described comes from their header comments, not a run. Not run: no worktree, skill or Claude Code command from the chapter was executed; only check and build.

## Comments

# 147 — Fact-check chapter 7.7

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-07-ai-native-development/7.7-large-codebases-agent-teams.md`

## Goal

Fact-check chapter 7.7 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 7.7".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 7.7 "Large codebases and agent teams" written (deeper): navigating large codebases (agentic search vs index, four levers: layered CLAUDE.md, blocked reads, symbol lookup, scoped skills), monorepo setup (unit of work, sparse worktrees, one owner per area, who maintains it), parallel agent teams (planned team vs self-organising loop table, three recurring problems), test suites as coordination (to-do list, definition of done, guard rail; harness design rules), C compiler case study with Mermaid, the kernel failure and GCC-oracle fix, limitations, 7-point checklist; practice is notes-only `notes/parallel-agent-plan.md` (8 steps); 5 check questions; 3 new resource rows (the C-compiler and agent-teams rows already existed under 7.5 and 6.5, not duplicated) and 5 glossary terms added (issue 79). Opened and read via curl 2026-11-13 (HTTP 200): anthropic.com/research/building-c-compiler (whole), code.claude.com large-codebases (whole except the skills-discoverability middle part), agent-teams (grep of key sections: team size, task size, file conflicts, claiming; first ~100 lines read), claude.com blog on large codebases (first ~9000 chars only), GitHub page of anthropics/claudes-c-compiler (title only, repo not browsed). Unverified: the blog's later sections (MCP, org rollout) were not read; the "highest-value investments" and C/C++ LSP anecdote are from the part I read; the "Token costs scale roughly with teammates" claim is from the agent-teams bullet list; the table cell "teammates share the working tree unless you arrange otherwise" is my inference from "avoid file conflicts" and 6.5's glossary entry, not a quoted doc line; "about two weeks" and "just under $20,000" are from the post; reading times are estimates; the repo's commit history/lock files were not inspected (the Look-for says the post claims they can be read); the cross-references 2.9, 6.2, 6.3, 6.6, 8.3 were checked by filename only, not re-read. Not run: the practice (learner's work); no experiment folder for this issue.

## Comments

# 120 — Fact-check chapter 3.10

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-03-agents/3.10-multi-agent.md`

## Goal

Fact-check chapter 3.10 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 3.10".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- Statements about Cognition's post and the Claude Code `sub-agents` page rest on fetched summaries. Confirm the "Choose between subagents and main conversation" quote on `code.claude.com/docs/en/sub-agents`.
- Cognition's URL redirects to `cognition.com/blog/dont-build-multi-agents`; the post is dated 2025-06-12 with no update note.
- The 1,050k → 330k token example is labelled made-up arithmetic. Anthropic's 4× / 15× figures should be re-confirmed.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 3.10 "Multi-agent patterns" written: sub-agent as a second loop run (only the brief goes down, only the final message comes back), three patterns (context isolation, orchestrator-workers with the brief elements and effort scaling, parallel exploration), a failure-mode table, Cognition's "Don't Build Multi-Agents" against Anthropic's research system (read in parallel, write in series), cost with Anthropic's 4x/15x figures and a made-up quadratic re-reading example, a six-step when-to-use checklist; practice is a `delegate` tool step in `project/` (brief and acceptance check only, no code, no new experiment folder); 4 resource rows and 4 glossary terms added (issue 46). Both quoted sources were read; the planned anthropic.com/research URL serves the same article as the engineering URL, so the engineering one is used. No code was run.

## Comments

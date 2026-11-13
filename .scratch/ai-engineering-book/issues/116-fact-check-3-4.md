# 116 — Fact-check chapter 3.4

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-03-agents/3.4-context-engineering.md`

## Goal

Fact-check chapter 3.4 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 3.4".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- One quote ("Without proper guidance, an agent can waste context…") was rewritten after the last fetch and not re-checked. Nine other quotes from the Anthropic article were corrected by the writer.
- Context editing (`clear_tool_uses_20250919`, header `context-management-2025-06-27`) and the compaction APIs are betas; confirm names and status.
- The 62k-token growth table is made up (labelled). The compaction failure modes and the "50–70% trigger range" are the chapter's own judgement (labelled). Nothing was run locally.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 3.4 "Context engineering" written: context as a finite resource (context rot, attention budget, worked token-growth example, how to measure per turn), system prompts at the right altitude, just-in-time retrieval, tool-result clearing (own harness and the context-editing beta), compaction (trigger, split point, summary prompt, cache trick, failure modes, how Claude Code and the API do it), structured note-taking, sub-agents for isolation with cost caveats, a technique comparison table; practice is a step in `project/` (tokens per turn, clearing, `--compact-at`, with/without comparison; brief and acceptance check only, no code, no new experiment folder); 4 resource rows and 5 glossary terms added (issue 40). Nothing was run: the token table is made up and labelled so; the compaction failure modes are the chapter's own judgement, labelled as such; context editing and compaction APIs are betas as of verification.

## Comments

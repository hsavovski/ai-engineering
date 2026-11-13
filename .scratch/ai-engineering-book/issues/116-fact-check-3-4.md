# 116 — Fact-check chapter 3.4

Status: resolved
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

- 2026-11-13 (fact-checker): ~60 claims, 8 external links and 4 resource rows checked (all HTTP 200). Confirmed verbatim against the full pages: all 26 quotes from the Anthropic article (including the flagged "Without proper guidance…" quote) and its Sep 29, 2025 date; context windows (1M, caching, what counts, usage fields, context-awareness model lists, thinking blocks kept by default); context editing (beta header `context-management-2025-06-27`, `clear_tool_uses_20250919`, defaults trigger 100,000 / keep 3 / clear_tool_inputs false, `clear_at_least` skips the pass, memory-tool warning, cache invalidation, server-side compaction as "the primary strategy"); the three compaction routes; Claude Code context-window and subagents quotes; multi-agent post (Jun 13, 2025, 4×/15×, 200,000-token truncation). Token-growth table arithmetic re-computed (≈290,040 billed input tokens). Fixed 6 wordings: "draw on" attention-budget quote; "every relevant piece of information"; only two of the three compaction routes are beta (own summarizer isn't); "more fine-grained control"; the research post's "saving its plan to Memory" quote; "sends its own requests". Cut 0. The 50–70% trigger and the compaction failure modes stay labelled as the book's judgement.

## Needs human

- Nothing was run: the practice and the made-up 62k-token table are unexecuted (the table is labelled). Beta API names (context editing, compaction headers) can change; re-check on the next refresh.

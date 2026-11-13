# 104 — Fact-check chapter 3.2

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-03-agents/3.2-agent-loop.md`

## Goal

Fact-check chapter 3.2 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 3.2".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- The loop, `stop_reason` and Agent SDK `maxTurns` claims come from WebFetch summaries of three Anthropic pages. Re-read the pages themselves.
- The "refusal / `pause_turn` handled explicitly" row of the stop-condition table rests on the how-tool-use-works page alone.
- "Some providers require reasoning blocks to be sent back" has no source. Add one or cut it.
- The Agent SDK article: the issue's planned URL (`anthropic.com/research/building-agents-with-the-claude-agent-sdk`) is a 404. The chapter cites the redirected `claude.com/resources/articles/...` page, which does not call itself an engineering post. Check the citation wording.
- The local observation (qwen3:8b vs 14b on a "find the value of beta" task) is one run each. The chapter says so; keep it labelled as an anecdote.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 3.2 "Build the agent loop from scratch" written: the loop as six numbered steps with a Mermaid flowchart and a TS skeleton with named gaps, message list as state, a stop-condition table (natural stop, turn/budget limit, cut-off, refusal, fatal), tools failures as inputs, step-log fields (JSONL), a local observation (throwaway loop, qwen3:8b vs 14b, one run each: 8b stopped early with a wrong answer), failure-mode checklist for local vs paid; practice is a step in `project/` (brief and acceptance check only, no code, no new experiment folder); 4 resource rows and 4 glossary terms added (issue 38). Paid model not run; the Agent SDK article was read at claude.com (the anthropic.com/engineering URL redirects there).

## Comments

- 2026-11-13 (fact-check): re-read all four cited pages as raw markdown/HTML. The quotes from how-tool-use-works, agent-loop (`maxTurns`, `maxBudgetUsd`, subtypes, turn counting, context, rejection message) and build-a-tool-using-agent (Ring 2, Ring 4 `is_error`) match. The claude.com article is dated 2025-09-29, filed under "Best practices", and anthropic.com/engineering/building-agents-with-the-claude-agent-sdk redirects to it; the chapter calls it an article, which is accurate. Fixed: the "gather context, take action, verify work" quote now matches the source wording; the `refusal`/`pause_turn` row now cites the handling-stop-reasons page and notes that `pause_turn` appears only with server tools; the reasoning-blocks claim now cites the Thinking page; "providers reject" now cites Handle tool calls. Kept: the qwen3 local observation, labelled as one run each (not reproducible from the repo, but marked as an anecdote). Nothing needs a human.

# 108 — Fact-check chapter 2.6

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-02-programming-with-llms/2.6-tool-calling.md`

## Goal

Fact-check chapter 2.6 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 2.6".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- Claude code snippets follow the docs and were **not run** (no paid calls).
- Ollama observations come from one local `qwen3:8b` run on Ollama 0.40.14: an `id` per tool call that the docs don't show, `done_reason: "stop"` even with tool calls, `tool_choice: "none"` ignored on `/v1`. Re-run on a newer Ollama before keeping them.
- Forced `tool_choice` (`any` / `tool`) is said to be rejected on Opus 5.5 and Sonnet 5.5. Check the current docs.
- The stub's link to `3.8-ts-agent-sdks` did not exist; it now points at `3.11-agent-sdks`.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 2.6 "Tool calling" written: the two-request round trip (Mermaid sequence), tool definitions and why the description is the interface, the wire format on Anthropic / OpenAI-compatible / Ollama native side by side with observed local output (Ollama native returned an `id` the docs don't show and `done_reason: stop` with tool calls; `arguments` object vs. JSON string), tool results and errors (`is_error`, instructive messages, four failure modes, untrusted results), parallel calls and the single-user-message rule, `tool_choice` forcing and its model restrictions (and `tool_choice` ignored on Ollama `/v1`, observed), client vs. server tools; practice is experiment 19 (`read_file` round trip, local vs. paid; README skeleton only, no solution code); 7 resource rows and 7 glossary terms added (issue 31). Claude snippets follow the docs and were not run (no paid calls).

## Comments

- 2026-11-13 (fact-checker): ~50 claims checked against the 6 Claude docs pages, OpenAI, OpenRouter, Ollama (tool calling, OpenAI compat) and Anthropic's engineering article, all HTTP 200, all 7 resource rows OK. Local Ollama observations re-run on qwen3:8b / 0.40.14 and all reproduced (`id` on native calls, `done_reason: "stop"`, `tool_choice: "none"` ignored on `/v1`, error-result behaviour). Forced `tool_choice` 400 on Opus 5.5 / Sonnet 5.5 confirmed in the docs table; Haiku 5.5 accepts it. Fixed wording of 7 claims (see BUILD-LOG); nothing cut.

## Needs human

- Ollama observations are unverified on the current release, 0.40.16 (2026-11-09); the machine still runs 0.40.14 and I didn't upgrade it. After `brew upgrade ollama`, re-run the native `/api/chat` and `/v1` tool calls with qwen3:8b and update the chapter's version note at "The wire format, step by step".
- The Claude code snippets (TypeScript `runAll` skeleton, JSON examples) were not run against the paid API; they match the docs.

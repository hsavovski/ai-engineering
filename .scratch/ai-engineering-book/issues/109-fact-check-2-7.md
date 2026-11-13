# 109 — Fact-check chapter 2.7

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-02-programming-with-llms/2.7-prompt-caching.md`

## Goal

Fact-check chapter 2.7 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 2.7".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- The Anthropic docs page was fetched only up to character ~100,000 of 165,158. The pre-warming (`max_tokens: 0`) and "cache diagnostics" notes come from the first fetch's summary. Anchor slugs were derived from headings, not confirmed on the live page.
- The OpenAI page describes "GPT-5.6 and later" behaviour while Landscape lists GPT-6.x. The chapter quotes the docs as written; reconcile.
- The "Prompt caching is everything" blog link is cited as `claude.com/blog/...` and 308-redirects to `claude.dev`.
- The TypeScript request snippet was not run.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 2.7 "Prompt caching and cost" written: prefix reuse from the KV cache (1.9) across requests, explicit vs automatic caching (Anthropic top-level and per-block `cache_control`, OpenAI, DeepSeek, OpenRouter), TTL/lookback/minimum-length/concurrency rules, usage fields, a write/read cost table for 5 questions (sequential vs parallel, 5 min vs 1 h), prompt layout rules, a debugging checklist, how Claude Code uses caching; practice is experiment 20 (README skeleton only; learner writes the scripts); 6 resource rows and 6 glossary terms added (issue 32). Claude code snippet follows the docs and was not run (no paid calls).

## Comments

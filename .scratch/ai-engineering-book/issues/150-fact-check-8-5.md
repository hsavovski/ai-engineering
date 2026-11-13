# 150 — Fact-check chapter 8.5

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-08-production/8.5-durable-agents.md`

## Goal

Fact-check chapter 8.5 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 8.5".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 8.5 "Durable agents: queues, retries, rate limits" written (core): failure table, Anthropic rate limits and errors (token bucket, retry-after, the three kinds of 429: ordinary, spend cap, ramp limit; SDK default retries), exponential backoff with full jitter and a `withRetry` sketch, idempotent tools (three kinds, idempotency keys from run id + tool-call id, crash window), checkpointing (state list, Mermaid of write order, repairing the tail on resume, storage and limits), queues and workers (BullMQ concurrency, attempts/backoff, stalled jobs; queue plus checkpoint), durable-execution frameworks (Temporal replay/determinism/Activities/retry defaults, Inngest step memoization, Restate/DBOS/Vercel Workflow SDK named from front pages) and a choosing table plus flowchart; practice is project step 29 (run store, checkpoint order, resume with tail repair, idempotent tool, `withRetry`, fake-429 test, kill -9 tests; notes in project/DURABLE.md); 6 check questions; 8 resource rows and 12 glossary terms added (issue 84). Opened and read (curl 2026-11-12, HTTP 200): Anthropic rate-limits and errors pages (relevant sections), Temporal workflows, why-temporal, retry-policies, activity-definition (idempotency passage) and ai-cookbook (intro), Inngest how-functions-are-executed and steps (limits paragraph), AWS Builders' Library and Architecture Blog jitter articles, Stripe idempotent requests, BullMQ retry and stalled-jobs pages, front pages only of Restate, DBOS and workflow-sdk.dev. Not verified: the Restate/DBOS/Workflow SDK descriptions rest on front pages, not tried, and may be stale; that Claude's `tool_use` id is unchanged across a resumed process is my reasoning (we persist it), not a doc claim; the choosing table, "queues do not give resumability" and the "layers multiply retries" example are my own synthesis (labelled where stated); the claim that input tokens per minute is usually the first limit agents hit is my inference, not sourced; the AWS Builders' Library article was read from the AWS Builder Center copy; whether the Inngest "Compared to Temporal" section covers what the Look-for says was only grepped, not read; BullMQ concurrency/rate-limit settings are named from the docs navigation and not opened; Stripe's different-parameters behaviour read, but I did not check the v2 API wording; reading times are estimates. Not run: no code in the chapter (withRetry sketch, checkpoint order, kill -9 steps) or any framework was executed; only check and build.

## Comments

# 15 – Streaming

## What I tried

How do the three routes (Anthropic SSE with typed blocks, OpenAI-style SSE chunks via OpenRouter, Ollama native NDJSON) frame a streamed reply, and what are the real TTFT and tokens/s of each?

Steps and acceptance check: [chapter 2.2](../../book/part-02-programming-with-llms/2.2-streaming.md#practice). I write all the code (`sse.ts`, `stream.ts`).

## What happened

### Predictions (before running)

<!-- Which route has the lowest TTFT? Which the highest tok/s? Does thinking change TTFT? -->

### SSE parser tests

| Case | Expected | Got |
|---|---|---|
| one byte at a time | | |
| multi-byte character split across chunks | | |
| comment line | | |
| two-line `data:` | | |
| stream ends without final blank line | | |

### Measurements (3 runs per route)

| Route | Run | TTFT text (ms) | TTFT thinking (ms) | tok/s | Total (s) | Notes (cold load?) |
|---|---|---|---|---|---|---|

Ollama cross-check (`eval_count / eval_duration × 1e9` vs. my client number):

### Tool-call streaming

| Route | Fragments | Arguments streamed or whole? | Truncated run reported as |
|---|---|---|---|

### Cancellation and failures

| Case | Ollama native | OpenRouter | Anthropic |
|---|---|---|---|
| abort after 10 tokens (billed for full answer?) | | | |
| wrong model name (HTTP error or stream error?) | | | |
| bad key | | | |
| connection cut mid-stream (terminal event missing) | | | |

## Why (what I learned)

<!-- At least three bullets. -->

# 20 – Prompt caching

## What I tried

How much do cache read/write tokens, latency and cost change when I send one long fixed document plus 5 different questions to `claude-haiku-5-5` with and without `cache_control`?

Steps and acceptance check: [chapter 2.7](../../book/part-02-programming-with-llms/2.7-prompt-caching.md#practice). I write all the code.

## What happened

### Predictions (before running)

<!-- Expected total cost and latency for A and B, and the usage on each of the 5 calls in B. -->

### Results

Document: ___ tokens. Model: `claude-haiku-5-5`.

| Condition | Call | `input_tokens` | `cache_creation_input_tokens` | `cache_read_input_tokens` | Latency | Est. cost |
|---|---|---|---|---|---|---|
| A no cache | 1 | | | | | |
| A no cache | 2 | | | | | |
| A no cache | 3 | | | | | |
| A no cache | 4 | | | | | |
| A no cache | 5 | | | | | |
| A total | | | | | | |
| B cached | 1 | | | | | |
| B cached | 2 | | | | | |
| B cached | 3 | | | | | |
| B cached | 4 | | | | | |
| B cached | 5 | | | | | |
| B total | | | | | | |

Break-even number of requests from my numbers: ___

### Broken on purpose

| Variant | `usage` per call | Explanation (which rule) |
|---|---|---|
| Parallel requests | | |
| Timestamp before the document | | |

How I start each run from a cold cache:

## Why (what I learned)

<!-- At least three bullets. -->

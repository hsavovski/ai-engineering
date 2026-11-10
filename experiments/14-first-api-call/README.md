# 14 – First API call

## What I tried

Do the three API dialects (Anthropic Messages, OpenAI-compatible Chat Completions, Ollama native) differ the way chapter 2.1 says, and what does an official SDK add on top of raw `fetch`?

Steps and acceptance check: [chapter 2.1](../../book/part-02-programming-with-llms/2.1-calling-models.md#practice). I write all the code (`raw.ts`, `sdk.ts`).

## What happened

### Predictions (before running)

<!-- tokensIn per route; will the three answers agree? -->

### Results

<!-- One normalized result per route (text, stopReason, tokensIn, tokensOut). -->

### On-purpose failures

| Failure | Ollama native | Ollama /v1 | OpenRouter | Anthropic |
|---|---|---|---|---|
| wrong model name | | | | |
| missing key | | | | |
| `max_tokens: 5` (stop reason) | | | | |
| `temperature` sent | | | | |

### Diff: the routes

| Route | URL | Auth | System prompt | Text path | Stop field = value | Usage fields | Surprises |
|---|---|---|---|---|---|---|---|

### Diff: raw vs. SDK

<!-- What the SDK hid or added: retries, headers, types, errors, request id. -->

## Why (what I learned)

<!-- At least three bullets. -->

# 03 – Logprobs: watching next-token prediction

## What I tried

What does the model's probability distribution look like at each step of a completion, and how fast are prefill and decode on my Mac?

`logprobs.ts` (to write: see the steps in [chapter 1.1](../../book/part-01-how-llms-work/1.1-next-token-prediction.md#practice)) calls local Ollama with `logprobs: true` and `top_logprobs: 5`, prints the top-5 candidate tokens with probabilities at every step, and reports prefill and decode tok/s from the response's timing fields.

```bash
node experiments/03-logprobs/logprobs.ts "The capital of France is"
```

Ollama 0.40.14 supports `logprobs` / `top_logprobs` (max 20) on both `/api/generate` and `/api/chat` (agent check, 2026-11-08). Free: no paid API calls.

## What happened

<!-- Fill in after running. -->

### Distributions

<!-- Paste a few steps of output. Where was the distribution sharp, where spread out? Raw vs. chat? -->

### Temperature 0 vs. 1

<!-- Did the logprobs change between runs? Did the chosen tokens? Sum of logprobs per run. -->

### Prefill vs. decode

| Date | Model | Prompt tokens | Prefill tok/s | Output tokens | Decode tok/s | Cached prompt tokens |
|---|---|---|---|---|---|---|
| | qwen3:8b | (one line) | | | | |
| | qwen3:8b | (~2,000 words) | | | | |
| | qwen3:8b | (same, repeated) | | | | |

## Why (what I learned)

<!-- Your notes: is decode near the bandwidth ceiling (273 GB/s ÷ model size)? Why is prefill faster per token? Anything surprising about tokens? -->

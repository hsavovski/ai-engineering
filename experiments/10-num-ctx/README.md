# 10 – num_ctx: KV-cache memory and speed

## What I tried

How much memory does `qwen3:14b` use at `num_ctx` 4096, 16384 and 32768, and does my KV-cache estimate match? Does `num_ctx` alone change prefill or output speed?

`numctx.ts` (to write: see the steps in [chapter 1.9](../../book/part-01-how-llms-work/1.9-kv-cache-context-window.md#practice)) loads the model at each setting, reads `/api/ps`, and times a fixed ~3,000-token prompt.

```bash
node experiments/10-num-ctx/numctx.ts
```

Free: local Ollama only, no paid API calls.

## What happened

<!-- Fill in after running. -->

### Server settings

<!-- OLLAMA_KV_CACHE_TYPE and OLLAMA_FLASH_ATTENTION as found in step 1. -->

### Prediction (before measuring)

| num_ctx | Predicted KV cache |
|---|---|
| 4096 | |
| 16384 | |
| 32768 | |

### Measurements

| Date | num_ctx | Memory (`size`) | Prefill tok/s | Output tok/s |
|---|---|---|---|---|
| | 4096 | | | |
| | 16384 | | | |
| | 32768 | | | |

Measured bytes per token: `(size 32k − size 4k) / (32768 − 4096)` = 

### Optional: position test and cache type

<!-- Fact at start / middle / end: correct out of 5. Memory change after switching the cache type. -->

## Why (what I learned)

<!-- Estimate vs. measured, and what explains the gap. Did num_ctx change speed? -->

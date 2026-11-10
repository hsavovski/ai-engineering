# 12 – Quantization: Q4 vs. Q8

## What I tried

Does `qwen3:8b` at Q8_0 earn its extra ~3.7 GB over Q4_K_M? Compare memory, output speed and answers on five prompts, with sampling pinned so that differences come from the weights.

`quant.ts` (to write: see the steps in [chapter 1.12](../../book/part-01-how-llms-work/1.12-quantization.md#practice)) loads each tag at `num_ctx` 8192, reads `/api/ps`, runs the five prompts, and prints memory, tok/s and the answers side by side.

```bash
node experiments/12-quantization/quant.ts
```

Free: local Ollama only, no paid API calls. Findings go in `notes/quantization.md`.

## What happened

<!-- Fill in after running. -->

### Prediction (before measuring)

| Tag | Predicted memory at num_ctx 8192 | Predicted tok/s vs. Q4 |
|---|---|---|
| qwen3:8b-q4_K_M | | (baseline) |
| qwen3:8b-q8_0 | | |

### Measurements

| Date | Tag | Disk (`ollama list`) | Memory (`size`) | `size_vram` | Output tok/s (median) |
|---|---|---|---|---|---|
| | qwen3:8b-q4_K_M | | | | |
| | qwen3:8b-q8_0 | | | | |

### The five prompts

| # | Prompt (kind) | Q4 answer | Q8 answer | Better |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

## Why

<!-- Did memory match the prediction? Did the speed ordering? Which prompts, if any, separated the quants? -->

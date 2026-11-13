# 40 – MLX vs. GGUF on my Mac

## What I tried

Run the same model, `qwen3:8b` (Q4_K_M GGUF through Ollama's llama.cpp) and `mlx-community/Qwen3-8B-4bit` (MLX), and compare prefill speed, decode speed, time to first token and memory at two prompt lengths. Steps and the acceptance check are in [chapter 10.7](../../book/part-10-modifying-serving-models/10.7-inference-engines.md#practice). `bench.ts` is yours to write (`node experiments/40-mlx-vs-gguf/bench.ts`); start from the method in the chapter and the experiment 00 benchmark.

Free: local only, no paid API calls.

## What happened

<!-- Fill in after running. -->

### Setup (pinned before measuring)

| Item | Value |
|---|---|
| Prompt lengths | |
| Output length | |
| Temperature / thinking | |
| Ollama `num_ctx`, `OLLAMA_NUM_PARALLEL` | |
| mlx-lm version, Ollama version | |

### Prediction (before measuring)

| | Ollama `qwen3:8b` | MLX Qwen3-8B-4bit |
|---|---|---|
| File size | | |
| Bits per weight (size × 8 / 8.2e9) | | |
| Bandwidth-bound decode ceiling (tok/s) | | |
| Faster at decode? Why | | |
| Uses more memory? Why | | |

### Measurements (median and min–max of 5)

| Engine | Prompt tokens | Prefill tok/s | Decode tok/s | Time to first token | Memory (and which gauge) |
|---|---|---|---|---|---|
| Ollama, tool-reported | ~100 | | | | |
| MLX `benchmark`, tool-reported | ~100 | | | | |
| Ollama, `bench.ts` | ~100 | | | | |
| MLX server, `bench.ts` | ~100 | | | | |
| Ollama, tool-reported | ~4000 | | | | |
| MLX `benchmark`, tool-reported | ~4000 | | | | |
| Ollama, `bench.ts` | ~4000 | | | | |
| MLX server, `bench.ts` | ~4000 | | | | |

Tool numbers vs. client numbers: where they differ, and why:

### The five prompts

| # | Prompt (kind) | Ollama | MLX | Notes |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

## Why

<!-- Verdict: who wins decode, who wins prefill, who uses less memory, by how much and at which prompt length; how much is the engine and how much the bit budget; what this setup cannot tell me. -->

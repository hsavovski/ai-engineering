# 41 – Speculative decoding: code vs prose

## What I tried

Run a big model with and without a small draft model, on code prompts and on prose prompts, and measure the decode speed-up and the acceptance rate. Steps and the acceptance check are in [chapter 10.8](../../book/part-10-modifying-serving-models/10.8-serving-optimizations.md#practice). Any glue code is yours to write in TypeScript (`node experiments/41-speculative/run.ts`); the engine is `mlx-lm` or llama.cpp.

Free: local only, no paid API calls.

## What happened

<!-- Fill in after running. -->

### Setup (pinned before measuring)

| Item | Value |
|---|---|
| Engine and version | |
| Target model (file, size) | |
| Draft model (file, size) | |
| Temperature / thinking | |
| Output length | |
| Draft tokens (default) | |
| Prompts (3 code, 3 prose) | |

### Prediction (before measuring)

| | Code | Prose |
|---|---|---|
| Expected acceptance rate | | |
| Expected speed-up | | |
| Why | | |

### Measurements (median of 3 runs after a warm-up)

| Prompt | Kind | Decode tok/s, no draft | Decode tok/s, with draft | Speed-up | Acceptance rate | Same output at temperature 0? |
|---|---|---|---|---|---|---|
| 1 | code | | | | | |
| 2 | code | | | | | |
| 3 | code | | | | | |
| 4 | prose | | | | | |
| 5 | prose | | | | | |
| 6 | prose | | | | | |

### Draft length sweep (one code prompt, one prose prompt)

| Draft tokens | Code speed-up | Prose speed-up |
|---|---|---|
| 2 | | |
| 4 | | |
| 8 | | |

### Memory

| | No draft | With draft | Which gauge |
|---|---|---|---|
| | | | |

## Why

<!-- Verdict: speed-up for code vs prose next to the acceptance rates, whether the prediction held, the best draft length, would I leave it on, and what this setup cannot tell me. -->

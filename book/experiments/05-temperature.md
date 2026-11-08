<!-- Generated from experiments/*/README.md by `npm run experiments` (also runs before dev and build). Edit the README, not this file. -->

# 05 – Temperature: measuring output diversity

## What I tried

How much does temperature change what `qwen3:14b` says, and does min-p keep high temperatures coherent?

`diversity.ts` (to write: see the steps in [chapter 1.8](/part-01-how-llms-work/1.8-sampling#practice)) calls local Ollama (`/api/chat`, `think: false`) with the same prompt 10 times at temperatures 0, 0.7 and 1.2, for three prompts (one right answer, constrained choice, open creative). It counts distinct outputs and summarizes output length (`eval_count`). Two extra runs test min-p at temperature 2.0 and a fixed seed at 1.2.

```bash
node experiments/05-temperature/diversity.ts
```

Free: local Ollama only, no paid API calls.

## What happened

<!-- Fill in after running. -->

### Shipped defaults

<!-- Paste `ollama show qwen3:14b --parameters`. Did you keep top_k / top_p as shipped, or override them? -->

### Diversity table

| Date | Prompt | Temperature | Distinct / 10 | Most common (count) | Mean tokens | Min–max tokens |
|---|---|---|---|---|---|---|
| | 17 × 23 | 0 | | | | |
| | 17 × 23 | 0.7 | | | | |
| | 17 × 23 | 1.2 | | | | |
| | library name | 0 | | | | |
| | library name | 0.7 | | | | |
| | library name | 1.2 | | | | |
| | mystery opening | 0 | | | | |
| | mystery opening | 0.7 | | | | |
| | mystery opening | 1.2 | | | | |

### Min-p at temperature 2.0

<!-- A few outputs with min_p 0 vs. min_p 0.1. Coherent or not? -->

### Seed test

<!-- Temperature 1.2, seed 42, three runs: identical? What changed when you edited one character of the prompt? -->

## Why (what I learned)

<!-- One sentence per prompt explaining the pattern (sharpening/flattening, truncation). Anything that contradicted your prediction? -->

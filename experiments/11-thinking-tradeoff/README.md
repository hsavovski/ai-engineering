# 11 – Thinking trade-off: where does thinking start to pay off?

## What I tried

On which kinds of tasks does `qwen3:14b` with thinking on beat thinking off, and what does it cost in tokens and seconds?

`tradeoff.ts` (to write: see the steps in [chapter 1.10](../../book/part-01-how-llms-work/1.10-reasoning-models.md#practice)) runs five tasks of rising difficulty from `tasks.json`, each with `think: false` and `think: true`, 3 runs per cell, against local Ollama (`/api/chat`, `stream: false`). It checks each answer with code and records correctness, `eval_count`, wall-clock seconds, `done_reason` and thinking length in `results.json`.

```bash
node experiments/11-thinking-tradeoff/tradeoff.ts
```

Free: local Ollama only, no paid API calls.

## What happened

<!-- Fill in after running. -->

### Prediction (before running)

| Task | Does thinking change correctness? | Guessed token multiple |
|---|---|---|
| 1 lookup | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

### Results

| Date | Task | Difficulty | Think | Correct / 3 | Median tokens | Median seconds | Truncated runs |
|---|---|---|---|---|---|---|---|
| | 1 | | off | | | | |
| | 1 | | on | | | | |

### Chart

<!-- A Mermaid xychart: accuracy vs. task for thinking off and on; a second one for median tokens. Mark the crossover. -->

## Why

<!-- Where is the crossover? How many times more tokens or seconds did it cost? Was there a task where thinking was worse, or 20× the tokens for no gain? Compare with your prediction and with the overthinking paper. -->

### Optional stretches

<!-- Majority vote of 5 non-thinking runs vs. one thinking run; qwen3:8b and qwen3:30b-a3b; manual num_predict budgets. -->

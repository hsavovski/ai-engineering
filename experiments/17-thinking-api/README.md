# 17 – Thinking through the API

## What I tried

How much do effort levels (paid Claude) and `think` / `num_predict` caps (local `qwen3:14b`) change correctness, tokens, thinking share and cost on the five tasks from experiment 11 (`../11-thinking-tradeoff/`)? And what breaks when a tool turn doesn't echo thinking blocks back, or a local model leaks `<think>`?

Steps and acceptance check: [chapter 2.4](../../book/part-02-programming-with-llms/2.4-reasoning-via-api.md#practice). I write all the code (`run.ts`).

Paid: small amounts on Anthropic. Record every batch in [`costs.md`](../../costs.md).

## What happened

### Prediction (before running)

| Task | Cheapest setting that still answers correctly | Why |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

Guess for thinking share of output tokens on the hardest task: 

Upper bound for the paid grid (tasks x settings x 3 runs, from Landscape prices): 

### Results

| Model | Setting | Task | Correct / 3 | Truncated | Median output tokens | Median thinking tokens | Thinking share | Median seconds | Cost / correct answer |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

### Tool turn

| Variant | Status | Error message |
|---|---|---|
| Echo `content` verbatim | | |
| Drop the thinking block | | |
| Edit the `signature` | | |

### Leak hunt (`qwen3:30b-a3b`, `think: false`)

<!-- Did reasoning reach `content`? Paste the stripping function's result on a closed and an unclosed `<think>`. -->

### Optional: cache and effort

| Request | `cache_creation_input_tokens` | `cache_read_input_tokens` |
|---|---|---|
| 1 (effort A) | | |
| 2 (same) | | |
| 3 (effort B) | | |

## Why (what I learned)

<!-- At least three bullets: which setting won on cost per correct answer, whether low effort skipped thinking, what the bill looked like vs. your bound. -->

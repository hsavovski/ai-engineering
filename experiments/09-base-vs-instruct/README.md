# 09 – Base vs. instruct: what post-training changes

## What I tried

What does post-training add? Compare `qwen2.5:0.5b-base` and `qwen2.5:0.5b-instruct` (same family and size, so the difference is post-training) on five prompts in three modes: raw bare prompt, raw with a hand-written ChatML wrapper, and Ollama's chat template.

`compare.ts` (to write: see the steps in [chapter 1.7](../../book/part-01-how-llms-work/1.7-post-training.md#practice)) calls local Ollama (`/api/generate` with `raw: true`, and the templated call) with `temperature: 0` and `num_predict: 120`, and prints one row per run.

```bash
ollama pull qwen2.5:0.5b-base
ollama pull qwen2.5:0.5b-instruct
node experiments/09-base-vs-instruct/compare.ts
```

Free: local Ollama only, no paid API calls.

## What happened

<!-- Fill in after running. -->

### Results (30 runs)

| Model | Prompt | Mode | Answered? | Stopped itself? | Tokens | First line |
|---|---|---|---|---|---|---|
| | | | | | | |

### Templates

<!-- Paste `ollama show <model> --template` for both. Is the template what differs? -->

### Five differences

<!-- Each one tied to a post-training stage (SFT format, end-of-turn, preference tuning, tool format), or "can't tell". At least one surprise. -->

## Why (what I learned)

<!-- Which behaviours came from SFT, which from preference tuning? What contradicted "base models can't follow instructions"? -->

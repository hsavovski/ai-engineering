# 36 – Modelfile: a terse qwen3:14b

## What I tried

Package `qwen3:14b` as `qwen3-coder-terse` (thinking off, low temperature, terse system prompt) and compare it with the base on five prompts: answer length, thinking length, tokens and seconds.

Files to write (see the steps in [chapter 10.1](../../book/part-10-modifying-serving-models/10.1-ollama-modelfile.md#practice)):

- `base.Modelfile`: the output of `ollama show qwen3:14b --modelfile`
- `Modelfile`: your recipe
- `compare.ts`: runs the prompts against the base, the custom model and the base with `think: false`

```bash
ollama create qwen3-coder-terse -f experiments/36-modelfile/Modelfile
node experiments/36-modelfile/compare.ts
```

Free: local Ollama only, no paid API calls.

## What happened

<!-- Fill in after running. -->

### Reading the base template

- What the template renders for one system and one user message:
- The line that guards the empty `<think>` block:

### Prediction (before measuring)

| Quantity | Predicted (custom vs. base) |
|---|---|
| Answer length | |
| `thinking` empty without a `think` field? | |
| Latency gap vs. length gap | |

### Measurements

| # | Prompt (kind) | Model | Answer chars | Thinking chars | `eval_count` | Seconds |
|---|---|---|---|---|---|---|
| 1 | | base | | | | |
| 1 | | base, `think: false` | | | | |
| 1 | | qwen3-coder-terse | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

### Did terse lose anything?

| # | Verdict (what was missing or wrong, or "same") |
|---|---|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

## Why

<!-- Which of the three changes (system prompt, temperature, thinking) bought most of the speed-up? Cite your numbers. Did the template check (no `thinking` field without `think`) pass? -->

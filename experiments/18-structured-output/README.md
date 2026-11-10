# 18 – Structured output

## What I tried

How often does a local model (`qwen3:8b`) and a paid model return output that passes my Zod schema and matches my answer key, with prompt-only, with native structured output, and with native plus a validate-and-retry loop?

Steps and acceptance check: [chapter 2.5](../../book/part-02-programming-with-llms/2.5-structured-output.md#practice). I write all the code and the 10 texts plus answer key.

## What happened

### Predictions (before running)

<!-- Expected valid and correct rate per condition and model. -->

### Results

| Model | Condition | Valid vs. schema (/10) | Correct vs. key (/10) | Avg. attempts |
|---|---|---|---|---|
| qwen3:8b | A prompt only | | | |
| qwen3:8b | B native | | | |
| qwen3:8b | C native + retry | | | |
| paid model: | A prompt only | | | |
| paid model: | B native | | | |
| paid model: | C native + retry | | | |

### Failures by kind

| Kind (not JSON, fenced, wrong shape, wrong type, valid but wrong, truncated, refused) | A | B | C | Example (quote the raw reply) |
|---|---|---|---|---|

### Probe

<!-- What I broke on purpose (step 8) and what the model did. -->

## Why (what I learned)

<!-- At least three bullets. -->

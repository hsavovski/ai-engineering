# 26 – Harnesses on local Qwen

## What I tried

The three eval tasks from experiment 25, run headless in opencode, Aider and a third harness against local Qwen via Ollama, then against a paid model for reference. Pass rate, time and failure modes.

Steps and acceptance check: [chapter 5.5](../../book/part-05-harnesses/5.5-harnesses-local-qwen.md#practice). I write all the scripts and notes.

## What happened

### Setup

| Item | Value |
|---|---|
| Local model, size, quantization | |
| Loaded context (`ollama ps` CONTEXT) and how I set it | |
| PROCESSOR split | |
| Paid model for reference | |

| Harness | Version | Config used (paste) | First error I hit |
|---|---|---|---|
| opencode | | | |
| Aider | | | |
| | | | |

### Predictions (before running)

<!-- Pass rate local vs paid? Which failure mode will dominate? What happens at num_ctx 4096? -->

### Results

| Task | Harness | Model | Run | Pass? | Time | Cost (USD) | Failure mode |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

### Failure modes (tally, with transcript excerpts)

| Mode | Count | Excerpt |
|---|---|---|
| No tool call | | |
| Call written as content | | |
| Wrong arguments | | |
| Malformed JSON | | |
| Streaming gap | | |
| Edit-format failure | | |
| Repetition loop | | |
| Context truncated | | |
| Thinking too slow | | |

### Small-context run (num_ctx 4096)

<!-- Prediction, result, what the transcript shows. -->

### Verdict

<!-- Which task types the local model owns, which it doesn't, with evidence. -->

## Why

<!-- What surprised me, and what I would change in my own harness. -->

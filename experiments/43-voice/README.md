# 43 – Voice: a push-to-talk pipeline

## What I tried

A push-to-talk CLI: record, transcribe locally, answer with local `qwen3:8b`, speak the reply, with per-stage latency. Brief, steps and acceptance check are in [chapter 11.2](../../book/part-11-multimodal/11.2-stt-tts.md#practice). `voice.ts` is yours to write (`node experiments/43-voice/voice.ts`).

Free: local only. Record any hosted TTS spend in `costs.md`.

## What happened

<!-- Fill in after running. -->

### Setup

| Item | Value |
|---|---|
| ffmpeg, whisper.cpp / mlx-whisper versions | |
| STT model and size | |
| Ollama version, LLM, `think` | |
| TTS engines tried | |
| Question spoken (same for every run) | |

### Prediction (before measuring streaming)

| | Value |
|---|---|
| Predicted time to first audio, streaming | |
| How derived from the sequential numbers | |

### Measurements (median and min–max of 5, first run discarded)

| Configuration | STT | LLM first token | LLM to first sentence | TTS first audio | Time to first audio | Total |
|---|---|---|---|---|---|---|
| Sequential, `say` | | | | | | |
| Streaming, `say` | | | | | | |
| Streaming, neural TTS | | | | | | |

### The failure I tried on purpose

<!-- What I did, what happened, which fix. -->

## Why

<!-- Which stage dominated, and what I would change first. -->

---

# Part 2: a realtime session (chapter 11.3)

Brief, steps and acceptance check are in [chapter 11.3](../../book/part-11-multimodal/11.3-realtime-voice.md#practice). `realtime.ts` is yours to write. This part costs money: record every spend in `costs.md`.

## What happened

### Setup

| Item | Value |
|---|---|
| API chosen (Realtime API or GPT-Live, Gemini Live) and why | |
| Model name | |
| Transport and audio format | |
| Spending ceiling | |
| Expected cost of one minute (before connecting), and where the price came from | |

### Measurements (5 turns, same spoken question)

| Configuration | End of speech to first audio | Time to stop after interruption | Tokens in / out | Cost per minute |
|---|---|---|---|---|
| 11.2 pipeline (best config) | | | n/a | free |
| Realtime session | | | | |
| Realtime session with a tool call | | | | |

### The tool and the interruption

<!-- Which project/ tool, the silence length around the call, and whether the model's next answer matched what you heard after interrupting. -->

### How each one felt

<!-- Two sentences each. -->

## Why

<!-- Where the latency difference came from, and when you would still pick the cascade. -->

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

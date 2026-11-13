# 162 — Fact-check chapter 11.2

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-11-multimodal/11.2-stt-tts.md`

## Goal

Fact-check chapter 11.2 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 11.2".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 11.2 "STT and TTS pipelines" written (deeper): two models/two directions and audio basics, Whisper (30-second windows, sizes, turbo) and the Mac implementations table (whisper.cpp, MLX Whisper, faster-whisper), successors via mlx-audio's table, VAD and hallucination on silence, TTS options table (say, Kokoro, mlx-audio models, Ollama speech endpoint, hosted APIs), cascaded pipeline Mermaid, sequential vs sentence-streaming latency budget with a worked example, where the cascade stops; practice is `experiments/43-voice/` (README skeleton only; learner writes `voice.ts`), 5 check questions, 5 resource rows, 9 glossary terms (issue 101). Opened and read via curl 2026-11-13 (HTTP 200): whisper.cpp README, openai/whisper README, Whisper arXiv abstract page, MLX Whisper README, mlx-community/whisper-large-v3-turbo card, mlx-audio README (supported-models tables), faster-whisper README (intro only), Kokoro-82M card, Ollama Speech/Thinking/Chat docs (text extracted from HTML), ElevenLabs TTS docs (model list), piper repo (moved, not cited). UNVERIFIED / not run: nothing was executed (no ffmpeg/whisper.cpp/sox installed here, no model run, no recording, nothing pulled); the Ollama Speech page's `phonon` model and `/v1/audio/speech` endpoint are from docs only and may not exist in the installed 0.40.x; the paragraph claiming Whisper hallucinates on silence is flagged in the text as widely reported with no source; ffmpeg `-f avfoundation -i ":0"` microphone syntax is from memory; the latency worked example uses invented numbers (labelled); the "960,000 samples/minute" is arithmetic and "~150 words/minute" is from memory; whisper.cpp "whisper-stream" re-running a sliding buffer (check question 1 answer) is my reading of the README's "samples the audio every half a second"; MLX README's parameter range 39M-1.55B, turbo-not-for-translation and the `.en` note are from the READMEs; the OpenAI TTS docs page could not be read (JS-rendered), so it is not cited; the Whisper paper's body was not read (abstract only, though the resource says "model-overview section"); the 30-second window for MLX Whisper is assumed the same as the reference code; Kokoro statements are from the model card. Reading times are estimates; 1.8, 1.9, 2.2 and experiments 11/15 linked by filename only.

## Comments

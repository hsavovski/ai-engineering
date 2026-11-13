# 163 — Fact-check chapter 11.3

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-11-multimodal/11.3-realtime-voice.md`

## Goal

Fact-check chapter 11.3 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 11.3".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 11.3 "Realtime voice agents" written (deeper): cascade vs speech-to-speech table, WebSocket vs WebRTC with ephemeral credentials (OpenAI Realtime, Gemini Live), turn detection (server_vad, semantic_vad, push-to-talk), barge-in with truncation (Mermaid sequence), tools in voice agents (OpenAI function_call_output, Gemini NON_BLOCKING/scheduling), cost (no prices; Landscape has no voice section); practice `experiments/43-voice/` (README part 2 appended, no code), 6 check questions, 4 glossary terms. All cited links opened (HTTP 200). NOT verified: no code run, no API called. Claims read only via a fetch tool's summary, not verbatim: WebRTC server auto-truncation on interruption, tools declared in session and `response.done` function_call item (the function_call_output step was read verbatim), Gemini usageMetadata mention. Unresolved: OpenAI docs now show both Realtime API (/v1/realtime) and GPT-Live (/v1/live/sessions); the chapter tells the learner to choose and did not settle which is current. Model names not stated in chapter. OpenAI pricing page returned 403 so no prices checked (none cited).

## Comments

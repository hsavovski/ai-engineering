# 161 — Fact-check chapter 11.1

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-11-multimodal/11.1-vision.md`

## Goal

Fact-check chapter 11.1 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 11.1".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 11.1 "Vision input" written (deeper): vision encoder and image tokens (Mermaid), token counting compared across Claude, OpenAI and Ollama with a worked 800x1200 example, request shapes per API, PDF input, local vision models in Ollama, choosing a model and failure modes; practice `experiments/42-vision/` (README skeleton, no code), 4 check questions, 4 glossary terms. Read this: all links opened (HTTP 200 / fetched). NOT verified or not run: no code run and no model pulled (no Ollama vision model installed; `qwen3-vl:8b` tag not checked, only `latest` 6.2 GB / `2b` / `4b` listed on its library page); OpenAI Chat Completions image part shape not read (only Responses API); Ollama OpenAI-compat `image_url` string-vs-object shape taken from its page, untested; whether Claude Haiku 5.5 uses the high-resolution tier (docs say "4.7 and later"; Haiku not named); Claude docs contradict themselves on the oversized-image field name (not quoted in chapter); ViT paper cited by title only, not re-read; the 'what to expect from a small local model' paragraph is flagged as hypothesis.

## Comments

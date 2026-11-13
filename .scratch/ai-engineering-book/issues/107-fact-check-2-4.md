# 107 — Fact-check chapter 2.4

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-02-programming-with-llms/2.4-reasoning-via-api.md`

## Goal

Fact-check chapter 2.4 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 2.4".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-10: chapter 2.4 "Using reasoning models through the API" written: four questions every API answers (switch, amount, visibility, continuity) with a Claude/OpenAI/Gemini/Ollama table, Claude adaptive thinking + effort + `display` + per-model off-switch rules, OpenAI and Gemini equivalents, Ollama `think` (checked locally on qwen3:14b: 682 vs 3 tokens; silent fallback for an unknown level), what to echo back in tool loops (thinking/redacted_thinking/signature, append-only history), interleaved thinking, a cost estimator with cap/level/cache/loop levers, leaked `<think>` handling; practice is experiment 17 (README skeleton only; learner writes run.ts); 6 resources and 7 glossary terms added (issue 29). Claude code snippets follow the docs and were not run (no paid calls).

## Comments

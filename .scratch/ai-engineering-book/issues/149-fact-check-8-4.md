# 149 — Fact-check chapter 8.4

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-08-production/8.4-guardrails.md`

## Goal

Fact-check chapter 8.4 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 8.4".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 8.4 "Guardrails" written (core): where guardrails sit (Mermaid; input, tool result, tool call, output), input classification (rules, small classifier, guard LLM, general LLM; content/scope/injection jobs), output validation (deterministic vs judged, redact/retry), PII handling (Presidio), guard models (Llama Guard 3, ShieldGemma, Qwen3Guard, OpenAI moderation) and frameworks (NeMo Guardrails, Guardrails AI), measuring FP/FN with confusion matrix and small-sample caveat, latency and cost, limits; practice is project step 28 (20 benign + 10 adversarial). Opened and read every cited URL via curl (all 200). Unverified: ShieldGemma/Llama Guard/Qwen3Guard facts come from Ollama library pages and the Qwen README, not the model cards; Presidio 'REST API and Docker' taken from nav/modules text; OpenAI moderation page read in part; the 'rule of three' (3/n) is my own statistics note, unsourced; 'no qwen3guard on Ollama' checked by a 404 on 2026-11-12; Guardrails AI README news (6 July 2026) read from GitHub page text; the NeMo stage list and Claude-docs claims quoted from page text. Ran nothing from the practice (learner's work).

## Comments

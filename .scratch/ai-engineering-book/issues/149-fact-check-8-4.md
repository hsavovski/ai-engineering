# 149 — Fact-check chapter 8.4

Status: resolved
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

- 2026-11-15 (fact-checker): Opened all 11 cited URLs plus the qwen3guard Ollama URL (still 404). Confirmed against page text: NeMo five rail stages, YAML/Colang/Python actions; Anthropic screening pattern, `is_harmful`, input validation, repeat offenders, screen tool outputs; Llama Guard 3 1B/8B and 13 MLCommons categories (per the Ollama page; Meta's own card was not opened); ShieldGemma Gemma 2, 2B/9B/27B, four categories, Yes/No; Qwen3Guard 0.6B/4B/8B, Gen/Stream, safe/controversial/unsafe; Presidio recognizers, caveat quote, REST API and Docker; OpenAI moderation text+images and recalibration note; Constitutional Classifiers 0.38%; OWASP LLM02/LLM05. Fixed: Guardrails AI news now dated (6 July 2026, cutoff 25 August 2026, already past); "above 90%" now says "against most of them" with the arXiv source inline; rule of three gets a source and the exact 26% bound; Ollama 404 dated. Nothing cut. No Needs human items.

# 125 — Fact-check chapter 4.8

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-04-evals-observability/4.8-cost-latency.md`

## Goal

Fact-check chapter 4.8 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 4.8".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 4.8 "Cost and latency tracking" written: usage-to-cost (per-provider usage fields table, normalise-at-the-edge Usage record), cache tokens (three-way input identity, cache hit ratio) and thinking tokens as a breakdown of output, GenAI usage attribute names, a hand-worked three-turn cost example with made-up prices (real prices left to Landscape), price table rules (explicit zero for local, no silent zero, per-request tiers, estimate vs provider cost), TTFT / generation / tool time and model-vs-tool share with an ASCII timeline, hotspot routine and cost per successful task, per-run budgets (check before the call, budget_exceeded as a result, shared meter, streaming) plus per-task budgets and alerts; practice is project step 18 (Usage adapters, price table, cost(), --budget, hotspot, costs.md reconcile; brief and acceptance only, no code, no experiment folder); 2 resource rows and 5 glossary terms added (issue 57). Opened and read (fetched 2026-11-12): Agent SDK cost-tracking and TypeScript reference (maxBudgetUsd), Claude pricing, prompt-caching and extended-thinking pages, OTel GenAI client-inference page (metrics, usage attributes), Langfuse token-and-cost-tracking, OpenRouter usage-accounting, Ollama usage docs. Not verified: the prompt-caching page's statements on per-token-type billing multipliers and cache invalidation causes (the chapter describes them without numbers and the reading callout points there); that the spec has no standard dollar-cost attribute (the practice tells the learner to check); the 5-minute vs 1-hour write price ordering comes from Landscape, not re-read. Nothing was run; no code or experiment exists for this chapter.

## Comments

# 155 — Fact-check chapter 9.4

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-09-model-landscape-cost/9.4-routing-rules.md`

## Goal

Fact-check chapter 9.4 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 9.4".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 9.4 "Cost-effective routing rules" written (core): three families (static rules, learned routers, cascades) with Mermaid, RouteLLM/FrugalGPT/unified cascade-routing results, OpenRouter Auto Router and LiteLLM auto routing, static rules on task type/size/privacy with an ordered rule table (privacy first, never escalates), escalation sketch in TS, why gateway `fallbacks` (error-triggered) are not quality escalation, measuring savings (always-paid/always-local/routed, pass rate with sample-size caveat, cost per passed task, prices from Landscape); practice is project roadmap step 30; 5 check questions, 7 resource rows, 4 glossary terms (issue 90). Opened and read via curl 2026-11-13 (HTTP 200): arXiv abstract pages for 2406.18665, 2305.05176 and 2410.10347 (abstracts only, not the full papers), LMSYS RouteLLM blog (first part: setup and headline results; not the later sections), RouteLLM GitHub README (start), OpenRouter Auto Router page (how it works, pricing), LiteLLM auto_routing (start only) and reliability/fallbacks pages (the intro sentence only). UNVERIFIED: the RouteLLM 'transfer' claim in the Look-for comes from the paper abstract, not the body; the 'threshold on the router score' and 'cost-versus-quality curves' in the Look-for were not read in the blog's later sections; the LiteLLM claim that fallbacks do not fire on wrong answers is my inference from 'if a call fails after num_retries' (not tested); the cascade cost formula (1-p)*c and the ordering advice are my own reasoning; the TS sketch was not run; reading times are estimates; the 'hosted router cannot send to local Ollama' statement is my reasoning, not a doc claim; 4.1 link refers to the error-analysis chapter for building eval sets (not re-read). Not run: the practice (learner's work), OpenRouter auto or LiteLLM auto routing.

## Comments

# 153 — Fact-check chapter 9.1

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-09-model-landscape-cost/9.1-paid-apis.md`

## Goal

Fact-check chapter 9.1 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 9.1".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- Landscape is stale: Anthropic's pricing page now lists Claude Fable 5.2 and Mythos 5.2 while `book/landscape.md` still shows Fable 5.1. Update Landscape (with sources) first.
- DeepSeek's privacy policy returned 403; only the Open Platform terms are cited and they say nothing on training, retention or server location. No Kimi data-handling statement was found ("unknown, not safe" in the chapter).
- The DeepSeek and Kimi pricing pages don't say how reasoning tokens are billed; the chapter says to measure.
- Anthropic's extended-thinking page, part of its data-retention page and DeepSeek's R1 announcement were only skimmed.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 9.1 "Paid APIs" written: families/tiers and the thinking dial, what a bill is made of (input/cache/thinking-as-output buckets, Mermaid diagram, modifiers table, tokenizer caveat, worked example with made-up numbers and cost per passed task), per-provider quirks (Anthropic adaptive thinking and effort cache effect, OpenAI reasoning, Gemini thinking_level, DeepSeek reasoning_content and ignored params, Kimi, OpenRouter reasoning and routing), a data/privacy table per route with what could not be confirmed (DeepSeek privacy policy and Kimi data terms), no provider ranking by design; practice is experiment 34 (README skeleton only); 10 resource rows and 7 glossary terms added (issue 87). Landscape still lists Claude Fable 5.1 while Anthropic's pricing page now shows Fable 5.2 and Mythos 5.2; not edited here.

## Comments

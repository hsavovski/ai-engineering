# 06 — Starting glossary and Landscape page

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, especially "Accuracy rules" and the Part 0 and Part 9 rows of the outline
- The vocabulary table in the old `README.md`, if it hasn't been migrated yet

## Goal

A starting `GLOSSARY.md` and a dated `book/landscape.md` that chapters can link to instead of hard-coding facts that go stale.

## Steps

1. `GLOSSARY.md`: about 40–60 core terms to start, grouped (model internals, training, inference, APIs, agents, harnesses, evals, security, tooling). Each gets a one-to-two-sentence definition and a link to the book chapter that covers it (the chapter id is fine before the chapter is written). Include the old README vocabulary (model, inference server, harness, agent, router/gateway). Render it in the book at `book/glossary.md`, either by including it or by having the page generated from it.
2. `book/landscape.md`, with "Last refreshed: <date>" at the top:
   - **Frontier models:** Anthropic, OpenAI, Google, xAI, plus the main open-weight labs (Qwen, DeepSeek, Kimi/Moonshot, Mistral, Meta, etc.). For each: current flagship and small models, context window, and price per 1M input/output tokens, every number linked to its primary pricing or docs page.
   - **Access routes:** direct APIs, OpenRouter, local (Ollama, LM Studio, MLX), with a note on what fits in 24 GB unified memory.
   - **Coding agents and harnesses:** Claude Code, Codex CLI, opencode, Aider, Cline, Cursor, etc. Each with one line and a link.
   - **Key standards and orgs:** MCP, AGENTS.md, A2A, the Agentic AI Foundation. Verify the dates flagged in the spec.
   - **How to refresh this page:** a short checklist.
3. **Verify everything** against primary sources as of today. Leave out anything that can't be verified.

## Acceptance criteria

- Every price and spec in `landscape.md` has a source link and the page is dated.
- The glossary renders in the book.
- `npm run build` passes.
- Commit.

## Comments

- 2026-11-08: Done. `GLOSSARY.md` has 74 terms in 8 groups (a bit over the 40–60 target, all core), each linked to its chapter. It is rendered into `book/glossary.md` by the new `scripts/glossary.mjs` (`npm run glossary`, also run before `dev` and `build`). A plain `@include` broke the links, because GLOSSARY.md uses repo paths so it reads well on GitHub. `book/landscape.md` uses only numbers read from primary pages on 2026-11-08. Kimi's price table renders client-side, so it was read from a headless-Chrome render. Left out as unverifiable: Qwen API prices (console only), Gemini 3.1 Pro and Gemma rows, Meta model sizes and prices, and context windows not stated on the source pages. Spec updated: the A2A/AAIF date (2026-08-27) and OTel GenAI status (Development) are re-verified, and four resource URLs are no longer marked unverified.

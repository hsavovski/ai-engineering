# 105 — Fact-check chapter 9.2

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-09-model-landscape-cost/9.2-openrouter-litellm.md`

## Goal

Fact-check chapter 9.2 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 9.2".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- **The LiteLLM proxy was never started.** The permission classifier denied it (exposes a local service) and it was not retried. Config shapes and behaviour come from docs only. The chapter admits this in one place.
- The PyPI / `uv tool run` install route is flagged in the chapter as not checked against the docs.
- The opencode custom-provider snippet (`providers`, `package`, `settings.baseURL`) matches opencode's Providers page, but that page has no LiteLLM example, so the gateway snippet is an adaptation. Recheck the field names.
- LiteLLM's Ollama page has no thinking/reasoning section and its docs do not define the exact budget-enforcement mechanics. The chapter says both; confirm nothing later in the chapter assumes otherwise.
- Not opened by the writer: OpenRouter's logging page (`openrouter.ai/docs/guides/privacy/logging`, cited only because 9.1 already links it) and the models-list page. The chapter uses placeholders instead of real model IDs.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 9.2 "OpenRouter and LiteLLM" written: what a gateway is and isn't (Mermaid), hosted vs self-hosted table (data path decides), OpenRouter's two routing layers (provider object vs `models` fallback array, defaults, preferences vs constraints), LiteLLM proxy config (four sections, prefixes, `os.environ/`, master key), same-name deployment groups, retries and fallbacks, three levels of spend tracking (response cost, virtual keys + database, budgets that actually stop spend), pointing opencode at the gateway and the problems to expect; practice is experiment 35 (README skeleton only: LiteLLM with local Qwen and two paid models, TS client, fallback prediction, spend reconciliation, harness switch by config); 6 resource rows and 5 glossary terms added (issue 88). LiteLLM was not run (starting the proxy was denied in this session): config and behaviour follow the docs only; the opencode custom-provider shape is adapted from its docs page, which has no LiteLLM example.

## Comments

# 105 — Fact-check chapter 9.2

Status: resolved
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

## Needs human

- The LiteLLM proxy was never started (writer's session denied it; not retried here). The config sketch, the `/chat/completions` vs `/v1/chat/completions` paths, the `x-litellm-response-cost` header, fallbacks and the Ollama thinking passthrough all follow the docs only. The chapter labels the config sketch as unverified. Run `uv tool install 'litellm[proxy]'` and `litellm --config` once with an Ollama entry to confirm.
- The opencode gateway snippet copies the field names from opencode's Providers page (`providers`, `package`, `settings.baseURL`, `env`, all confirmed on 2026-11-13), but it has not been run against a real opencode install.

- 2026-11-13 fact-check: about 45 claims checked against the opened pages. Fixed: quantization example (int8, not fp8); LiteLLM config has a fifth section (`environment_variables`); the `ollama/` → `/api/generate` claim is not on the Ollama page (cut); "every example sets api_base" narrowed to the proxy examples; two quickstart quotes that were not on the page ("refuses to start without it", "is not a spend cap") replaced with the page's actual wording; the start URL corrected to the Config page's `0.0.0.0:4000/chat/completions`, with `/v1` sourced to the router page; the PyPI/uv install route is now verified (CLI quickstart: `uv tool install 'litellm[proxy]'`, Python 3.10+); the routing strategies list includes cost-based; the cost-map fix added. All 10 external links and the 6 resource rows load (HTTP 200).


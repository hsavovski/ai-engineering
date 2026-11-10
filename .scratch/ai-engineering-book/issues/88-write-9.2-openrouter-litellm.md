# 88 — Write chapter 9.2: OpenRouter and LiteLLM

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-09-model-landscape-cost/9.2-openrouter-litellm.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-09-model-landscape-cost/9.1-paid-apis.md` (9.1 Paid APIs: Claude, GPT, Gemini, Kimi, DeepSeek)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-09-model-landscape-cost/9.2-openrouter-litellm.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Use OpenRouter's routing and provider options
- Run LiteLLM as a local gateway for Ollama and paid models
- Point a harness at the gateway

**The explanation must cover**

- Hosted vs self-hosted gateways
- OpenRouter provider routing and fallbacks
- LiteLLM proxy config
- Spend tracking at the gateway

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- OpenRouter docs (TODO: find URL)
- LiteLLM proxy docs (TODO: find URL)

**Practice brief**

Old roadmap item: run LiteLLM with local Qwen and two paid models behind one endpoint. Point opencode or your harness at it and switch models by config.

Where: `experiments/35-gateway/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 9.2` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

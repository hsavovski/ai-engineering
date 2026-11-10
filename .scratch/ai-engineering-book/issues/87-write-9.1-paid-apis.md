# 87 — Write chapter 9.1: Paid APIs: Claude, GPT, Gemini, Kimi, DeepSeek

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-09-model-landscape-cost/9.1-paid-apis.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.1-calling-models.md` (2.1 Calling models: Anthropic, OpenAI-compatible, Ollama)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-09-model-landscape-cost/9.1-paid-apis.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Compare the main paid model families on your own tasks
- Read pricing correctly (input, output, cache, thinking)
- Know each provider's API quirks

**The explanation must cover**

- Model families and tiers
- Pricing dimensions
- Strengths per provider
- Data and privacy policies

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- `book/landscape.md`
- Provider pricing pages (linked from Landscape)

**Practice brief**

Run your eval set across 5 models via OpenRouter (Claude, GPT, Gemini, Kimi, DeepSeek). Record pass rate, latency and cost per task in `costs.md`.

Where: `experiments/34-model-mix/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 9.1` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

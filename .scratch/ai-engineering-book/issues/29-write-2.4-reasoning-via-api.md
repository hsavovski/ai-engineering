# 29 — Write chapter 2.4: Using reasoning models through the API

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.4-reasoning-via-api.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.10-reasoning-models.md` (1.10 Reasoning models and test-time compute)
  - `book/part-02-programming-with-llms/2.1-calling-models.md` (2.1 Calling models: Anthropic, OpenAI-compatible, Ollama)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.4-reasoning-via-api.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Turn thinking on and off and set budgets/effort in each API
- Handle thinking blocks in multi-turn conversations and tool use
- Estimate the cost of thinking

**The explanation must cover**

- Extended thinking / effort parameters (Anthropic, OpenAI, Gemini, Ollama `think`)
- Thinking blocks and what you must send back
- Interleaved thinking with tools
- Cost and latency trade-offs
- Leaked reasoning in local models (from experiment 00)

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude docs, extended thinking (TODO: find URL)
- Ollama thinking docs (TODO: find URL)

**Practice brief**

Rerun the 1.10 task set through the APIs with different budgets/effort levels on one paid and one local model. Record correctness, tokens and cost in `costs.md`.

Where: `experiments/17-thinking-api/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 2.4` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

# 26 — Write chapter 2.1: Calling models: Anthropic, OpenAI-compatible, Ollama

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.1-calling-models.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-00-catch-up/0.4-your-lab.md` (0.4 Your lab: local and paid setup)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.1-calling-models.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Call all three APIs from TypeScript with raw `fetch` and with SDKs
- Explain messages, roles and content blocks
- Read usage and stop reasons

**The explanation must cover**

- Anthropic Messages API
- OpenAI-compatible Chat Completions (OpenRouter, Ollama `/v1`)
- Ollama native API
- System prompts, multi-turn state, stop reasons
- Usage, errors, retries and rate limits

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude platform docs, Messages API, https://platform.claude.com/docs (unverified)
- OpenRouter API docs (TODO: find URL)
- Ollama API docs (TODO: find URL)

**Practice brief**

Old roadmap item: one TS script that sends the same multi-turn conversation to Ollama, OpenRouter and Anthropic with raw `fetch`, then once via the official SDKs. Diff the request and response shapes.

Where: `experiments/14-first-api-call/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 2.1` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

## Answer

Chapter written in `book/part-02-programming-with-llms/2.1-calling-models.md`; experiment folder `experiments/14-first-api-call/` has the README skeleton only.

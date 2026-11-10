# 30 — Write chapter 2.5: Structured output

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.5-structured-output.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.1-calling-models.md` (2.1 Calling models: Anthropic, OpenAI-compatible, Ollama)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.5-structured-output.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Use JSON schema / structured output modes in each API
- Validate with Zod and handle failures
- Explain constrained decoding

**The explanation must cover**

- Prompting for JSON vs native structured output
- JSON Schema and Zod
- Constrained decoding / grammars (Ollama `format`)
- Validation and retry
- Schema design tips

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude docs, structured outputs (TODO: find URL)
- Ollama structured outputs docs (TODO: find URL)
- Zod docs (TODO: find URL)

**Practice brief**

Extract structured data (e.g. from 10 messy job-like or recipe texts) into a Zod schema with a local and a paid model. Measure validity rate with and without native structured output.

Where: `experiments/18-structured-output/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 2.5` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

## Answer

Chapter written in `book/part-02-programming-with-llms/2.5-structured-output.md`; experiment skeleton in `experiments/18-structured-output/`.

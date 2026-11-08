# 30 — Write chapter 2.5: Structured output

Status: ready-for-agent
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

Where: `experiments/NN-structured-output/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- If `needs` changed, `npm run map` re-run
- `npm run build` passes
- A dated `PROGRESS.md` log line
- Committed

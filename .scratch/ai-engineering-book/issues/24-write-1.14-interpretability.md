# 24 — Write chapter 1.14: Interpretability basics

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.14-interpretability.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.5-transformer-block.md` (1.5 The transformer block)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.14-interpretability.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain superposition and features
- Explain what a sparse autoencoder does
- Read an attribution graph from circuit tracing

**The explanation must cover**

- Neurons vs features, superposition
- Sparse autoencoders
- Circuit tracing and attribution graphs
- What has been found (e.g. planning in poems, multi-step reasoning)

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Anthropic, "Toy Models of Superposition" (TODO: find URL)
- Anthropic, "Scaling Monosemanticity" (TODO: find URL)
- Anthropic, "On the Biology of a Large Language Model" / circuit tracing (TODO: find URL)
- Neuronpedia (TODO: find URL)

**Practice brief**

Use a public attribution-graph explorer (e.g. on Neuronpedia) on a prompt of your own and write up one circuit you can follow.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

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

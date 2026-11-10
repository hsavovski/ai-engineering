# 16 — Write chapter 1.6: Pretraining and scaling laws

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.6-pretraining.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.5-transformer-block.md` (1.5 The transformer block)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.6-pretraining.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain the pretraining objective and cross-entropy loss
- Describe data pipelines at a high level
- Explain compute-optimal scaling (Chinchilla) and how practice deviates from it

**The explanation must cover**

- Next-token loss
- Data: sources, filtering, dedup, mixture
- Compute, parameters, tokens: scaling laws
- Overtraining small models for cheap inference
- Knowledge cutoff

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Chip Huyen, *AI Engineering*, ch. 2
- Hoffmann et al., Chinchilla paper (optional)
- Raschka, *Build an LLM From Scratch*, ch. 5 (unverified)

**Practice brief**

For two open models in your lab, find the published training-token counts and compute tokens-per-parameter. Explain why they are far above Chinchilla-optimal.

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

## Comments

- 2026-11-10: written on branch `issue-16` (branched from `issue-15`, which isn't merged to `main` yet). All links opened and checked with curl; quotes grepped from the arXiv HTML, the Meta Llama 3 blog, the FineWeb blog and the Claude models overview. Practice token counts deliberately left out of the explanation (the chapter never states Qwen3's token count), so the learner finds them. Chinchilla-fit worked examples are labelled illustrative. `needs` unchanged, so no `npm run map`. `npm run build` passes.

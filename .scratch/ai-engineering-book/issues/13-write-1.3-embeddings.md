# 13 — Write chapter 1.3: Embeddings

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.3-embeddings.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.2-tokenization.md` (1.2 Tokens and tokenization)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.3-embeddings.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain the embedding table and what training does to it
- Reason about similarity with dot products and cosine
- Tell token embeddings from sentence-embedding models

**The explanation must cover**

- One-hot vs dense vectors
- The embedding matrix as a lookup
- Geometry of meaning: directions, analogies, and their limits
- Positional information (preview of RoPE)
- Embedding models vs the LLM's internal embeddings

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- 3Blue1Brown, transformer series, word embeddings section (TODO: find URL)
- Raschka, *Build an LLM From Scratch*, ch. 2 (unverified)

**Practice brief**

Embed ~50 words with a local embedding model in Ollama, compute nearest neighbours with cosine similarity in TS, and test a few analogies. Write down where the geometry breaks.

Where: `experiments/NN-embedding-space/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

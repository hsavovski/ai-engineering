# 33 — Write chapter 2.8: Embeddings in practice

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.8-embeddings-in-practice.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.3-embeddings.md` (1.3 Embeddings)
  - `book/part-02-programming-with-llms/2.1-calling-models.md` (2.1 Calling models: Anthropic, OpenAI-compatible, Ollama)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.8-embeddings-in-practice.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Choose and call an embedding model (local and paid)
- Store vectors and search them
- Know the limits of semantic similarity

**The explanation must cover**

- Embedding models vs LLMs
- Dimensions, normalization, distance metrics
- Vector storage options (in memory, SQLite, pgvector, dedicated DBs)
- Benchmarks (MTEB)
- When keyword search beats embeddings

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- MTEB leaderboard (TODO: find URL)
- Ollama embeddings docs (TODO: find URL)

**Practice brief**

Embed your own `notes/` and book chapters with a local embedding model, store them in SQLite (or in memory), and build a TS CLI that answers "which note talks about X?".

Where: `experiments/NN-semantic-search/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

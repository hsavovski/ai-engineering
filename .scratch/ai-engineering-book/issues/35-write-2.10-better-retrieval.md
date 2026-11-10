# 35 — Write chapter 2.10: Better retrieval: hybrid search and reranking

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.10-better-retrieval.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.9-rag-fundamentals.md` (2.9 RAG fundamentals)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.10-better-retrieval.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Combine BM25 and vector search (reciprocal rank fusion)
- Add a reranker
- Measure recall@k and MRR on your question set

**The explanation must cover**

- BM25 / keyword search
- Hybrid search and fusion
- Cross-encoder rerankers
- Query rewriting
- Retrieval metrics

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Hamel Husain / Jason Liu, RAG evaluation writing (TODO: find URLs)
- Chip Huyen, *AI Engineering*, ch. 6

**Practice brief**

Add BM25 + fusion and a reranker to the 2.9 pipeline. Report recall@5 before and after on the same 10+ questions.

Where: `experiments/22-rag/`: a standalone experiment (number assigned up front so parallel tasks don't collide). Shared with issues 34, 36: whichever runs first creates the folder, later ones add to it.

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 2.10` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

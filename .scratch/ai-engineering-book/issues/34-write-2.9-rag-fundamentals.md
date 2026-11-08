# 34 — Write chapter 2.9: RAG fundamentals

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.9-rag-fundamentals.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.8-embeddings-in-practice.md` (2.8 Embeddings in practice)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.9-rag-fundamentals.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Build a minimal RAG pipeline
- Choose chunking strategies and explain their trade-offs
- Diagnose whether a bad answer is a retrieval or a generation problem

**The explanation must cover**

- The RAG pipeline
- Chunking: fixed, recursive, semantic, document-aware
- Contextual retrieval
- Prompting with retrieved context and citations
- Failure analysis

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Chip Huyen, *AI Engineering*, ch. 6
- Anthropic, "Contextual Retrieval" (TODO: find URL)

**Practice brief**

Extend the 2.8 search into a RAG Q&A over the book. Write 10 questions with known answers and check which failures are retrieval and which are generation.

Where: `experiments/NN-rag/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

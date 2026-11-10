# 36 — Write chapter 2.11: Agentic search vs. vector DB

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.11-agentic-search.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.9-rag-fundamentals.md` (2.9 RAG fundamentals)
  - `book/part-03-agents/3.2-agent-loop.md` (3.2 Build the agent loop from scratch)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.11-agentic-search.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Compare agentic search with classic RAG on cost, latency and quality
- Explain why coding agents prefer grep/read tools
- Pick an approach for a given corpus

**The explanation must cover**

- Agentic search: tools + loop instead of a retriever
- Why it works for code
- Cost and latency
- Hybrids: retrieval as one tool among many
- Just-in-time context loading

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/effective-context-engineering-for-ai-agents (just-in-time context section)
- https://www.anthropic.com/research/multi-agent-research-system

**Practice brief**

Answer the same question set with your agent from 3.2 given only `grep`/`read_file` tools over the book. Compare accuracy, tokens and time with the 2.10 pipeline.

Where: `experiments/NN-rag/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

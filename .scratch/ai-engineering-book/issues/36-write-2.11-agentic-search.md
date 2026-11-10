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

Where: `experiments/22-rag/`: a standalone experiment (number assigned up front so parallel tasks don't collide). Shared with issues 34, 35: whichever runs first creates the folder, later ones add to it.

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 2.11` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

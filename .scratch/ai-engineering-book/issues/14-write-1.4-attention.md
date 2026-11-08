# 14 — Write chapter 1.4: Attention

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.4-attention.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.3-embeddings.md` (1.3 Embeddings)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.4-attention.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Compute scaled dot-product attention by hand on a tiny example
- Explain Q, K, V and causal masking
- Explain multi-head attention and its cost in sequence length

**The explanation must cover**

- The problem attention solves
- Q, K, V as learned projections
- Softmax and scaling
- Causal masking
- Multi-head attention
- O(n²) cost and why it matters for context

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- 3Blue1Brown, "Attention in transformers, visually explained" (TODO: find URL)
- Raschka, *Build an LLM From Scratch*, ch. 3 (unverified)
- Vaswani et al., "Attention Is All You Need" (paper, optional)

**Practice brief**

Implement single-head causal attention for a 4-token example in plain TypeScript (arrays, no libraries), print the attention weights, and check them against a hand calculation.

Where: `experiments/NN-attention-by-hand/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

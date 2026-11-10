# 98 — Write chapter 10.8: Speculative decoding, batching, prefix caching

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-10-modifying-serving-models/10.8-serving-optimizations.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-10-modifying-serving-models/10.7-inference-engines.md` (10.7 Inference engines: llama.cpp, MLX, vLLM)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-10-modifying-serving-models/10.8-serving-optimizations.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain speculative decoding and when it helps
- Explain continuous batching and paged KV cache
- Explain prefix caching and its link to prompt-caching prices

**The explanation must cover**

- Speculative decoding (draft models, MTP)
- Continuous batching
- PagedAttention
- Prefix caching

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- vLLM docs and blog (TODO: find URLs)
- Speculative decoding paper (optional)

**Practice brief**

Try speculative decoding in llama.cpp or MLX with a small draft model and measure the speed-up on code vs prose.

Where: `experiments/NN-speculative/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

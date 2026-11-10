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

Where: `experiments/41-speculative/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 10.8` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

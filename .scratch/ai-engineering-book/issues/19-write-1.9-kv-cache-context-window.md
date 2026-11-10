# 19 — Write chapter 1.9: The KV cache and the context window

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.9-kv-cache-context-window.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.4-attention.md` (1.4 Attention)
  - `book/part-01-how-llms-work/1.8-sampling.md` (1.8 Sampling and temperature)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.9-kv-cache-context-window.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain the KV cache and compute its memory size
- Explain why Ollama's `num_ctx` changes memory use
- Explain context rot and lost-in-the-middle

**The explanation must cover**

- Prefill vs decode revisited
- KV cache size per token: layers × heads × dims × bytes
- Context window limits and `num_ctx`
- Long-context quality: lost in the middle, context rot
- How prompt caching builds on this

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/effective-context-engineering-for-ai-agents (article, context rot section)
- Chroma, "Context Rot" report (TODO: find URL)

**Practice brief**

Pick up the old roadmap item: run qwen3:14b with `num_ctx` 4k, 16k, 32k. Record memory (`ollama ps`), prefill speed and output speed, then check your KV-cache estimate against the measured memory.

Where: `experiments/NN-num-ctx/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

- 2026-11-10 (agent): done. Planned resources: the Anthropic URL works (it redirects between /engineering/ and /research/; the chapter uses /research/); the Chroma report is at trychroma.com/research/context-rot (published July 14, 2025). Added Ollama's context-length and KV-cache-quantization docs, Liu et al., Anthropic prompt-caching docs and the PagedAttention paper. Key finding while checking the practice: this Mac's Ollama service runs with `OLLAMA_KV_CACHE_TYPE=q8_0` and `OLLAMA_FLASH_ATTENTION=1`, so measured memory per token is about half of a 16-bit estimate. The chapter does not give measured numbers; step 1 of the practice has the learner find the setting, and the server log (`/opt/homebrew/var/log/ollama.log`) shows the exact cache size. Experiment folder is `experiments/10-num-ctx/`. `needs` unchanged, so no `npm run map`.

# 97 — Write chapter 10.7: Inference engines: llama.cpp, MLX, vLLM

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-10-modifying-serving-models/10.7-inference-engines.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.9-kv-cache-context-window.md` (1.9 The KV cache and the context window)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-10-modifying-serving-models/10.7-inference-engines.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Compare llama.cpp, MLX and vLLM
- Benchmark MLX vs GGUF on your Mac
- Explain what a serving engine optimizes

**The explanation must cover**

- llama.cpp and GGUF
- MLX and MLX formats
- vLLM and PagedAttention
- Benchmarking methodology

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- llama.cpp repo (unverified)
- MLX / mlx-lm repo (unverified)
- vLLM docs (TODO: find URL)

**Practice brief**

Old roadmap item: run the same model in MLX and in llama.cpp/Ollama and compare speed and memory with the experiment 00 benchmark.

Where: `experiments/NN-mlx-vs-gguf/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 10.7` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

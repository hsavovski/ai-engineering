# 22 — Write chapter 1.12: Quantization

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.12-quantization.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.5-transformer-block.md` (1.5 The transformer block)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.12-quantization.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain how weights are quantized and dequantized
- Compare Q4/Q5/Q8 and K-quants in memory and quality
- Estimate whether a model fits in 24 GB

**The explanation must cover**

- Floating point formats: FP32, BF16, FP8
- Integer quantization, scales and blocks
- GGUF quant types (Q4_K_M etc.)
- Quality loss and how to measure it (perplexity)
- Memory math: params × bits + KV cache

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Maarten Grootendorst, "A Visual Guide to Quantization" (TODO: find URL)
- llama.cpp quantization docs, https://github.com/ggml-org/llama.cpp (unverified)

**Practice brief**

Pull the same model at two quantizations (e.g. qwen3:8b Q4 and Q8 tags) and compare memory, speed and answers on 5 prompts. Write the findings to `notes/quantization.md` (old roadmap item).

Where: `experiments/NN-quantization/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

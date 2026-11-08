# 92 — Write chapter 10.2: From Hugging Face to GGUF

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-10-modifying-serving-models/10.2-hf-to-gguf.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.12-quantization.md` (1.12 Quantization)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-10-modifying-serving-models/10.2-hf-to-gguf.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Convert a HF model to GGUF with llama.cpp
- Quantize it to Q4 and Q8
- Import it into Ollama and compare

**The explanation must cover**

- Safetensors and model configs
- llama.cpp convert script
- Quantization types and importance matrices
- Importing into Ollama

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- llama.cpp repo, https://github.com/ggml-org/llama.cpp (unverified)
- Ollama import docs (TODO: find URL)

**Practice brief**

Python with `uv`: download a small HF model, convert it to GGUF, quantize to Q4_K_M and Q8_0, import both into Ollama, and compare size, speed and output.

Where: `experiments/NN-gguf/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

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

Where: `experiments/37-gguf/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 10.2` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

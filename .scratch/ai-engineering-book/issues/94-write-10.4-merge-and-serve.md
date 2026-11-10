# 94 — Write chapter 10.4: Merge and serve in Ollama

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-10-modifying-serving-models/10.4-merge-and-serve.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-10-modifying-serving-models/10.2-hf-to-gguf.md` (10.2 From Hugging Face to GGUF)
  - `book/part-10-modifying-serving-models/10.3-lora-mlx.md` (10.3 LoRA fine-tuning with mlx-lm)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-10-modifying-serving-models/10.4-merge-and-serve.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Fuse LoRA adapters into the base model
- Convert and quantize the result
- Serve it in Ollama and use it from your harness

**The explanation must cover**

- Fusing vs serving adapters
- Conversion after fine-tuning
- Quantizing a fine-tune
- Testing in a harness

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- mlx-lm fuse docs (unverified)
- Ollama import docs (TODO: find URL)

**Practice brief**

Fuse the 10.3 adapter, convert to GGUF, quantize, import into Ollama with a Modelfile, and call it from `project/`.

Where: `experiments/NN-lora/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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
- A dated `BUILD-LOG.md` line
- Committed

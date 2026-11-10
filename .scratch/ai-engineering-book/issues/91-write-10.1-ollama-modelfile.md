# 91 — Write chapter 10.1: Ollama Modelfiles

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-10-modifying-serving-models/10.1-ollama-modelfile.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.8-sampling.md` (1.8 Sampling and temperature)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-10-modifying-serving-models/10.1-ollama-modelfile.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Write a Modelfile with parameters and a system prompt
- Read and edit chat templates
- Create and share a custom model

**The explanation must cover**

- Modelfile syntax
- PARAMETER, SYSTEM, TEMPLATE, ADAPTER
- Chat templates
- Import from GGUF

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Ollama Modelfile docs (TODO: find URL)

**Practice brief**

Create a `qwen3-coder-terse` model from qwen3:14b with thinking off, low temperature and a terse system prompt. Compare it with the base on 5 prompts.

Where: `experiments/NN-modelfile/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

# 99 — Write chapter 10.9: Distillation and synthetic data

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-10-modifying-serving-models/10.9-distillation-synthetic-data.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.7-post-training.md` (1.7 Post-training: SFT, RLHF, DPO)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-10-modifying-serving-models/10.9-distillation-synthetic-data.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain distillation (logit vs output)
- Generate and filter synthetic training data
- Know the licensing and quality pitfalls

**The explanation must cover**

- Knowledge distillation
- Synthetic data generation
- Filtering and dedup
- Model collapse
- Terms of service

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Chip Huyen, *AI Engineering*, ch. 8
- Hugging Face smol-course (synthetic data section)

**Practice brief**

Generate a synthetic dataset with a paid model, filter it, and use it to retrain the 10.3 LoRA. Compare with the hand-made dataset. Log the cost.

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

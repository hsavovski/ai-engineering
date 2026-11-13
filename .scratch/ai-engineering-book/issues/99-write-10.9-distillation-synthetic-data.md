# 99 — Write chapter 10.9: Distillation and synthetic data

Status: resolved
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

Where: `experiments/38-lora/`: a standalone experiment (number assigned up front so parallel tasks don't collide). Shared with issues 93, 94: whichever runs first creates the folder, later ones add to it.

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 10.9` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

## Answer

Chapter written in `book/part-10-modifying-serving-models/10.9-distillation-synthetic-data.md`; practice extends `experiments/38-lora/` (README section "10.9").

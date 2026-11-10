# 93 — Write chapter 10.3: LoRA fine-tuning with mlx-lm

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-10-modifying-serving-models/10.3-lora-mlx.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.7-post-training.md` (1.7 Post-training: SFT, RLHF, DPO)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-10-modifying-serving-models/10.3-lora-mlx.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain LoRA and QLoRA
- Prepare a dataset and fine-tune with mlx-lm
- Evaluate the fine-tune against the base model

**The explanation must cover**

- When to fine-tune (and when prompting or RAG is better)
- LoRA math intuition
- Dataset formats
- mlx-lm training
- Evaluating fine-tunes

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- mlx-lm repo, https://github.com/ml-explore/mlx-lm (unverified)
- Hugging Face smol-course, https://huggingface.co/learn/smol-course
- Chip Huyen, *AI Engineering*, ch. 7

**Practice brief**

Python with `uv`: fine-tune a small Qwen with LoRA on a narrow task (e.g. your commit-message style), with heavily commented starter code. Evaluate before and after on a held-out set.

Where: `experiments/38-lora/`: a standalone experiment (number assigned up front so parallel tasks don't collide). Shared with issues 94, 99: whichever runs first creates the folder, later ones add to it.

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 10.3` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

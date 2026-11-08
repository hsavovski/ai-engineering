# 17 — Write chapter 1.7: Post-training: SFT, RLHF, DPO

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.7-post-training.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.6-pretraining.md` (1.6 Pretraining and scaling laws)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.7-post-training.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain SFT, reward models, RLHF and DPO and how they differ
- Explain chat templates as a post-training artifact
- Relate post-training to behaviors you see (verbosity, sycophancy)

**The explanation must cover**

- Base vs instruct models
- Supervised fine-tuning
- RLHF: reward model + PPO
- DPO and other preference methods
- Constitutional AI / RLAIF
- Tool-use and agentic post-training

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Chip Huyen, *AI Engineering*, ch. 2
- Nathan Lambert, *RLHF book* (TODO: find URL)
- Hugging Face smol-course, https://huggingface.co/learn/smol-course

**Practice brief**

If a base (non-instruct) Qwen model fits, pull it and compare it with the instruct model on the same prompts. Otherwise compare raw-completion vs chat-template prompting via Ollama's `raw` mode.

Where: `experiments/NN-base-vs-instruct/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

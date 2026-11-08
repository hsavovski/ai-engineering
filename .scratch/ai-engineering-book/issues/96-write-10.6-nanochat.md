# 96 — Write chapter 10.6: nanochat

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-10-modifying-serving-models/10.6-nanochat.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-10-modifying-serving-models/10.5-training-from-scratch.md` (10.5 Training from scratch)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-10-modifying-serving-models/10.6-nanochat.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Walk through every stage of nanochat
- Run what fits on your hardware (or rent a GPU briefly)
- Map each stage to the Part 1 chapters

**The explanation must cover**

- Pipeline overview
- Each stage and its code
- Hardware requirements
- What it costs to run

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Karpathy, nanochat, https://github.com/karpathy/nanochat

**Practice brief**

Run nanochat's smallest configuration (locally if feasible, otherwise read through it). Log any GPU rental cost in `costs.md`.

Where: `experiments/NN-nanochat/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

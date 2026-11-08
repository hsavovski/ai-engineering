# 20 — Write chapter 1.10: Reasoning models and test-time compute

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.10-reasoning-models.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.7-post-training.md` (1.7 Post-training: SFT, RLHF, DPO)
  - `book/part-01-how-llms-work/1.8-sampling.md` (1.8 Sampling and temperature)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.10-reasoning-models.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain RL with verifiable rewards and how it produces reasoning
- Explain test-time compute as a scaling axis
- Decide when to turn thinking on or off

**The explanation must cover**

- Chain of thought: prompted vs trained
- RLVR: math and code rewards, GRPO
- Test-time compute scaling
- Hybrid thinking models (Qwen3 think on/off)
- Costs and failure modes: overthinking, leaked reasoning

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Raschka, *Build a Reasoning Model (From Scratch)*, https://github.com/rasbt/reasoning-from-scratch
- DeepSeek-R1 paper (optional, TODO: find URL)

**Practice brief**

Make 5 tasks of rising difficulty (lookup → multi-step logic). Run qwen3:14b with thinking on and off, record correctness, tokens and time, and plot where thinking starts paying off.

Where: `experiments/NN-thinking-tradeoff/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

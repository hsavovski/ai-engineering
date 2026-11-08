# 63 — Write chapter 5.5: Harnesses on local Qwen

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-05-harnesses/5.5-harnesses-local-qwen.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-05-harnesses/5.3-harness-comparison.md` (5.3 Harness comparison)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-05-harnesses/5.5-harnesses-local-qwen.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Configure opencode, Aider and your harness for Ollama
- Find the failure modes of local models in agent loops
- Decide which tasks local models can own

**The explanation must cover**

- Pointing harnesses at OpenAI-compatible endpoints
- Context size and `num_ctx` in agent use
- Tool-call format issues
- Choosing a local model for coding

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Ollama integrations docs (TODO: find URL)
- opencode and Aider local-model docs (TODO: find URLs)

**Practice brief**

Old roadmap items: opencode, Aider and Cline/Continue with local Qwen on your eval tasks. Record pass rate, speed and failure modes vs a paid model.

Where: `experiments/NN-local-harnesses/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

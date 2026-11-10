# 61 — Write chapter 5.3: Harness comparison

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-05-harnesses/5.3-harness-comparison.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-05-harnesses/5.1-what-is-a-harness.md` (5.1 What a harness is)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-05-harnesses/5.3-harness-comparison.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Compare harnesses on context handling, tools, permissions and model support
- Run them on the same tasks
- Pick harnesses for different jobs

**The explanation must cover**

- Claude Code
- Codex CLI
- opencode
- Aider
- Cline / Continue
- Comparison criteria

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Each harness's docs (TODO: find URLs)
- `book/landscape.md`

**Practice brief**

Old roadmap item: run 3 tasks from your eval set in 3 harnesses (same paid model where possible). Compare in `notes/harnesses.md`: what each does well and how they manage context.

Where: `experiments/25-harness-comparison/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 5.3` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

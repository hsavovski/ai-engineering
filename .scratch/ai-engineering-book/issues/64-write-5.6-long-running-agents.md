# 64 — Write chapter 5.6: Long-running agents

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-05-harnesses/5.6-long-running-agents.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-05-harnesses/5.1-what-is-a-harness.md` (5.1 What a harness is)
  - `book/part-03-agents/3.4-context-engineering.md` (3.4 Context engineering)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-05-harnesses/5.6-long-running-agents.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain the patterns for multi-context-window work
- Implement progress tracking and handoff
- Know the failure modes (premature completion, drift)

**The explanation must cover**

- Why one context isn't enough
- Initializer and worker agents
- Progress files and feature lists
- Verification and testing in the loop
- Generator–evaluator harnesses for app development

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/effective-harnesses-for-long-running-agents
- https://www.anthropic.com/research/harness-design-long-running-apps

**Practice brief**

Add a long-running mode to `project/`: a feature list file, a progress log, and a fresh context per feature that reads them. Run it on a small multi-feature task.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- `npm run check -- 5.6` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

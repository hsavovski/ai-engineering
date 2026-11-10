# 73 — Write chapter 7.1: Spec-driven development

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-07-ai-native-development/7.1-spec-driven-development.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.7-issue-workflows.md` (6.7 Issue workflows: plan, grill, spec)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-07-ai-native-development/7.1-spec-driven-development.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Write specs agents can execute
- Compare spec-driven tools and approaches
- Keep specs and code in sync

**The explanation must cover**

- Specs as the source of truth
- Requirements, design, tasks
- Tools (e.g. GitHub Spec Kit, Kiro: verify current state)
- Spec drift

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- GitHub Spec Kit (TODO: find URL)
- Other spec-driven tooling docs (TODO)

**Practice brief**

Write a spec for the next `project/` feature, generate tasks, and implement it with Claude Code. Note where the spec helped and where it was ignored.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

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

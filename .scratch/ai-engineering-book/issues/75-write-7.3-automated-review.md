# 75 — Write chapter 7.3: Automated code review

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-07-ai-native-development/7.3-automated-review.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.1-how-claude-code-works.md` (6.1 How Claude Code works)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-07-ai-native-development/7.3-automated-review.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Use local and PR-level AI review
- Customize review for your standards
- Know what AI review misses

**The explanation must cover**

- Local review (/code-review)
- PR review bots
- Review against standards and specs
- False positives and blind spots

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude Code docs: code review (unverified)

**Practice brief**

Review your last `project/` change with an AI reviewer and by yourself. Compare the findings.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

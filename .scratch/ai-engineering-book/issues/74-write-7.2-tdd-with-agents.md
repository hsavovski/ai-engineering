# 74 — Write chapter 7.2: TDD with agents

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-07-ai-native-development/7.2-tdd-with-agents.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.1-how-claude-code-works.md` (6.1 How Claude Code works)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-07-ai-native-development/7.2-tdd-with-agents.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Run red-green-refactor with an agent
- Prevent agents from weakening tests
- Use tests as the verification step in long tasks

**The explanation must cover**

- Why TDD fits agents
- Workflow: test first, confirm failure, implement
- Guarding tests
- Integration vs unit tests for agents

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Matt Pocock's TDD skill (TODO: find URL)
- https://www.anthropic.com/research/claude-code-best-practices

**Practice brief**

Build one `project/` feature strictly test-first with Claude Code. Log every time the agent tried to change a test.

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

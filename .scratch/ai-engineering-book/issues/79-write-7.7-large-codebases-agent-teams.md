# 79 — Write chapter 7.7: Large codebases and agent teams

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-07-ai-native-development/7.7-large-codebases-agent-teams.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-07-ai-native-development/7.5-automating-lifecycle.md` (7.5 Automating the whole lifecycle)
  - `book/part-06-claude-code/6.5-parallel-work.md` (6.5 Subagents, worktrees and parallel work)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-07-ai-native-development/7.7-large-codebases-agent-teams.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Set up agents for a large codebase
- Coordinate many agents on one goal
- Learn from published case studies

**The explanation must cover**

- Navigating large codebases
- Monorepo setup
- Parallel agent teams
- Test suites as coordination
- Case study: C compiler built by parallel Claudes

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/building-c-compiler
- Claude Code docs, large codebases (unverified)

**Practice brief**

Point Claude Code at a large open-source repo you know and plan (don't run) a parallel-agent approach for one feature. Note what the agents would need.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

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

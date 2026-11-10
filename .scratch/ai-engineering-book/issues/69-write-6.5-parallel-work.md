# 69 — Write chapter 6.5: Subagents, worktrees and parallel work

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-06-claude-code/6.5-parallel-work.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.1-how-claude-code-works.md` (6.1 How Claude Code works)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-06-claude-code/6.5-parallel-work.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Create custom subagents
- Run parallel sessions in worktrees
- Know the token cost and when it pays off

**The explanation must cover**

- Subagents and their context
- Custom subagents
- Git worktrees
- Agent teams and workflows
- Background sessions
- Cost under a Pro plan

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude Code docs: subagents, worktrees, agent teams (unverified)

**Practice brief**

Run two chapter tasks from this repo in parallel worktrees, merge both, and note the token usage and any conflicts.

Where: `experiments/NN-parallel/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

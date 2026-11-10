# 71 — Write chapter 6.7: Issue workflows: plan, grill, spec

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-06-claude-code/6.7-issue-workflows.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.2-claude-md-and-memory.md` (6.2 CLAUDE.md and memory)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-06-claude-code/6.7-issue-workflows.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain why fresh-session, self-contained tasks work
- Use plan mode, grilling and specs at the right moments
- Run a kanban-style flow of issues with agents

**The explanation must cover**

- Plan mode
- Grilling to surface decisions
- Specs as the single source of intent
- Self-contained issues and triage labels
- Kanban with agents
- This repo as a case study

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- `.scratch/ai-engineering-book/spec.md` and its issues
- Matt Pocock's skills: grilling, issue tracker (TODO: find URL)
- Claude Code docs, common workflows (unverified)

**Practice brief**

Plan a small side feature for `project/` using the full flow: grill → spec → issues → run one issue in a fresh session. Reflect on what the spec was missing.

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

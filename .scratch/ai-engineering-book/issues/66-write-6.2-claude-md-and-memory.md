# 66 — Write chapter 6.2: CLAUDE.md and memory

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-06-claude-code/6.2-claude-md-and-memory.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.1-how-claude-code-works.md` (6.1 How Claude Code works)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-06-claude-code/6.2-claude-md-and-memory.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Write a lean, effective CLAUDE.md
- Use the memory hierarchy (user, project, local, auto memory)
- Audit what memory costs in context

**The explanation must cover**

- What belongs in CLAUDE.md
- The memory hierarchy and imports
- Auto memory
- Keeping it short and current

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude Code docs, memory (https://code.claude.com/docs/en/memory, unverified)
- Writing-for-agents guidance (Matt Pocock's skill, see 6.3)

**Practice brief**

Audit and rewrite this repo's `CLAUDE.md` and your user memory. Measure their token cost before and after.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- `npm run check -- 6.2` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

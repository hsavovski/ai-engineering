# 65 — Write chapter 6.1: How Claude Code works

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-06-claude-code/6.1-how-claude-code-works.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-05-harnesses/5.1-what-is-a-harness.md` (5.1 What a harness is)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-06-claude-code/6.1-how-claude-code-works.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Describe Claude Code's loop, tools and context window
- Read what's in your context and why
- Know where configuration lives (`.claude/`, settings precedence)

**The explanation must cover**

- The agent loop and built-in tools
- The context window and compaction
- The `.claude` directory
- Settings precedence
- Permission modes

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude Code docs: how Claude Code works, context window, `.claude` directory (https://code.claude.com/docs, unverified)
- https://www.anthropic.com/research/claude-code-best-practices

**Practice brief**

Use `/context` (or the current equivalent) during a real session in this repo and explain each part of your context in `notes/claude-code.md`.

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

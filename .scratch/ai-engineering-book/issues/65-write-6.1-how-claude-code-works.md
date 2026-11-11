# 65 — Write chapter 6.1: How Claude Code works

Status: resolved
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

- `npm run check -- 6.1` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

## Answer

Chapter 6.1 written in `book/part-06-claude-code/6.1-how-claude-code-works.md`; 6 resources, 6 glossary terms, BUILD-LOG line. Practice is notes only (`notes/claude-code.md`), no experiment folder.

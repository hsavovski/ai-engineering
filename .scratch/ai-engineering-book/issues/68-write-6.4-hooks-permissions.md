# 68 — Write chapter 6.4: Hooks, permissions and auto mode

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-06-claude-code/6.4-hooks-permissions.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.1-how-claude-code-works.md` (6.1 How Claude Code works)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-06-claude-code/6.4-hooks-permissions.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Configure permission rules and modes
- Write hooks for formatting, guarding and notifications
- Explain how auto mode decides what is safe

**The explanation must cover**

- Permission rules and modes
- Sandboxed Bash
- Hook events and their uses
- Auto mode and its classifier
- Hooks vs instructions

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude Code docs: permissions, hooks guide, sandboxing (unverified)
- https://www.anthropic.com/research/claude-code-auto-mode
- https://www.anthropic.com/research/claude-code-sandboxing

**Practice brief**

Add two hooks to this repo: one that runs `npm run build` after book edits, and one that blocks reading `.env`. Test both.

Where: `experiments/28-hooks/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 6.4` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

## Resolution

Chapter written in `book/part-06-claude-code/6.4-hooks-permissions.md`; experiment brief and README template in `experiments/28-hooks/`. See the BUILD-LOG line for unverified items.

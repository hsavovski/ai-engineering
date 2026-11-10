# 78 — Write chapter 7.6: Where humans stay in the loop

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-07-ai-native-development/7.6-humans-in-the-loop.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-07-ai-native-development/7.5-automating-lifecycle.md` (7.5 Automating the whole lifecycle)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-07-ai-native-development/7.6-humans-in-the-loop.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Identify the decisions that should stay human
- Design checkpoints that don't become rubber stamps
- Keep your own skills sharp while delegating

**The explanation must cover**

- Intent and taste
- Risk-based review
- Approval fatigue
- Skill atrophy and deliberate practice

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Research on AI-assisted coding and skill formation (TODO: find primary sources)

**Practice brief**

Write your own policy in `notes/human-in-the-loop.md`: which changes you always review closely, which you skim, and why.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

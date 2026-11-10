# 49 — Write chapter 3.13: Agent payments (sidebar)

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.13-agent-payments.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.12-a2a.md` (3.12 A2A: agent-to-agent protocol)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.13-agent-payments.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Name the main agent-payment protocols and who backs them
- Explain the authorization problem they solve

**The explanation must cover**

- Why payments are hard for agents
- Current protocols (e.g. AP2, ACP, x402: verify current names and status)
- Risks

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Primary docs for each protocol (TODO: find URLs)

**Practice brief**

Read one protocol spec and write a half-page summary in `notes/agent-payments.md`: what is authorized, by whom, and how fraud is limited.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- `npm run check -- 3.13` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

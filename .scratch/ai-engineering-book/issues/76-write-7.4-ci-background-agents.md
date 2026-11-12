# 76 — Write chapter 7.4: CI and background agents

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-07-ai-native-development/7.4-ci-background-agents.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-07-ai-native-development/7.3-automated-review.md` (7.3 Automated code review)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-07-ai-native-development/7.4-ci-background-agents.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Run Claude Code headless and in GitHub Actions
- Set up a scheduled or background agent
- Control cost and permissions for unattended runs

**The explanation must cover**

- Headless mode
- GitHub Actions integration
- Cloud sessions and scheduled tasks
- Permissions and secrets for unattended agents

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude Code docs: headless, GitHub Actions, routines (unverified)

**Practice brief**

Set up a workflow that runs an agent on a labeled issue in this repo (or a scheduled weekly `landscape.md` freshness check) and opens a PR.

Where: `experiments/31-background-agent/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 7.4` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

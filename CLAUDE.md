Study spec: `.scratch/ai-engineering-book/spec.md`. Read it before any task.

**Running an issue:** work in its own worktree, `.worktrees/issue-NN` on branch `issue-NN`, created before you claim it. Setup is in the spec's "Working agreements".

**Running a batch** (several issues, or fact-checking chapters): `scripts/workflows/book-batch.workflow.js`; its header says how to launch it.

**Unattended release:** `scripts/book-auto.mjs` (launchd, every 15 min) writes the open issues, then generates and runs fact-check issues, within the weekly usage cap. `node scripts/book-auto.mjs status`; state and logs in `.book-auto/`. While it runs, don't leave uncommitted changes to tracked files on `main` (merges wait for a clean tree).

## Agent skills

### Issue tracker

Issues are tracked as local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Uses the default labels (needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

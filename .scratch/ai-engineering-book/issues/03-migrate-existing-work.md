# 03 — Migrate the existing work

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, especially "Prior work to carry over"
- The current `README.md`, `PROGRESS.md`, `notes/setup.md` and `experiments/00-speed-check/`

## Goal

The old roadmap is replaced by the new structure without losing history or results.

## Steps

1. Rewrite `README.md` for the new study:
   - what it is (link to the spec for the full intent)
   - how to run the book
   - the folder layout
   - the vocabulary table from the old README, which moves into `GLOSSARY.md` (create it if issue 06 hasn't yet)
2. Rewrite `PROGRESS.md`:
   - a short "how to track" note (update the `status` frontmatter, then run `npm run progress`)
   - the generated status table markers
   - a "Setup checklist" (the open items from issues 01–06)
   - the **Log**, keeping all existing dated entries verbatim and adding today's restructure entry
   
   Drop the old 7-section checklist. Its items are absorbed into the outline.
3. Keep `experiments/00-speed-check/`. Make sure its README follows the experiment format (what I tried, what happened, why) and includes the results from the log (tok/s, thinking-mode slowdown, 8b quality, 30b-a3b memory).
4. Keep `notes/setup.md`. Remove the empty `evals/` folder: evals will live in `project/` and `experiments/` per Part 4.

## Acceptance criteria

- No information from the old README, PROGRESS or experiment has been lost. Compare before and after.
- `PROGRESS.md` follows the new format, and `npm run progress` still works.
- Commit.

## Comments

- 2026-11-08: Done. README rewritten (spec link, run commands, layout, endpoints kept). Vocabulary table moved to a new root `GLOSSARY.md` (issue 06 expands it and renders it in the book). PROGRESS.md in the new format; old roadmap dropped, with a pointer to it in git history (`c99fe32`). Speed-check README restructured into What I tried / What happened / Why, all tables and findings kept, log results added. Empty `evals/` removed. `npm run progress` and `npm run build` pass.

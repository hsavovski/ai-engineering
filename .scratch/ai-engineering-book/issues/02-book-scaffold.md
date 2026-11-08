# 02 — Scaffold the VitePress book

Status: ready-for-agent
Type: task
Blocked by: 01

## Read first

- `../spec.md`, especially "The book" and "Chapter format"

## Goal

A working VitePress site in `book/` that renders the chapter format from the spec, with a home page, a dependency map, a paths page, a resources catalog and the components chapters will need.

## Steps

1. Set up VitePress in `book/`, using the current stable version (check npm). Keep `package.json` at the repo root or in `book/`, whichever is simpler, and add `npm run dev` / `npm run build` scripts. Enable Mermaid support (e.g. `vitepress-plugin-mermaid`, after checking it works with the installed version).
2. **Chapter template:** create `book/_template/chapter.md` with the exact frontmatter and the six sections from the spec, including example resource callouts and an example `<details>` check question.
3. **Status badge component:** a Vue component that renders a chapter's `tier`, `needs` (as links) and `status` from frontmatter at the top of every chapter, automatically through the theme layout so chapters don't have to include it by hand.
4. **Sidebar:** generated from the `part-NN-*/` folders and chapter frontmatter (title, chapter id), so new chapters show up without editing the config. Order by chapter id.
5. Pages:
   - `index.md`: what the book is, how to use it non-linearly, the meaning of Core vs Deeper and the status values, and a placeholder for the Mermaid dependency map (filled in by issue 05).
   - `paths.md`: a placeholder (filled in by issue 05).
   - `resources.md`: a catalog format of one table per part, with columns for done checkbox, title/link, type, time, essential/optional, and chapter.
   - `landscape.md` and `glossary.md`: stubs (filled in by issue 06).
6. Create one sample chapter, `book/part-00-catch-up/0.0-how-to-use-this-book.md`, using the template. Use it to check that everything renders: frontmatter badge, Mermaid, callouts, `<details>`.
7. Write `scripts/progress.(ts|mjs)`: reads all chapter frontmatter and regenerates the chapter status table in `PROGRESS.md` between markers (`<!-- status:start -->` / `<!-- status:end -->`). Add `npm run progress`.

## Acceptance criteria

- `npm run dev` serves the book. `npm run build` succeeds.
- The sample chapter shows the status badge, a rendered Mermaid diagram and a collapsible answer.
- `npm run progress` updates the table in `PROGRESS.md`.
- Commit.

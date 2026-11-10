# 0001: Derived book pages are rendered at build time, never committed

Status: accepted (2026-11-10)

## Context

Some book pages are derived from other repo files: the glossary (from `GLOSSARY.md`), the experiment pages (from `experiments/*/README.md`) and the per-part chapter maps on the home page (from chapter frontmatter). They used to be written to disk by three scripts and committed.

Chapter tasks run in parallel on `issue-NN` branches, and most of them change a source of a derived page (a new glossary term, a new experiment). Each branch then committed its own regenerated copy, so merges conflicted on files nobody edits by hand (experiment 06: `book/experiments/index.md`), and the map needed a manual `npm run map` step in every task.

## Decision

`scripts/book-build.mjs` renders derived pages while VitePress builds or serves the book, and their output is never committed.

- A hand-written page that contains derived content holds a `<!-- derived:NAME -->` marker line, and the module fills it before VitePress compiles the page and before local search indexes it (`book/index.md` → `map`, `book/glossary.md` → `glossary`).
- `book/experiments/` is written by the module when the config loads and is gitignored. Pages that need a file of their own go here, because VitePress 1.x local search only indexes files on disk and its dynamic routes don't watch extra files.

## Consequences

- Only sources are committed, so parallel branches can't conflict on derived output, and no task has a "regenerate" step.
- On GitHub, `book/index.md` shows a placeholder where the chapter maps go, and `book/glossary.md` points to `GLOSSARY.md`. The book (`npm run dev`) is where they render.
- A new kind of derived page gets a renderer and a marker in `scripts/book-build.mjs`. Don't add a script that writes a committed file.

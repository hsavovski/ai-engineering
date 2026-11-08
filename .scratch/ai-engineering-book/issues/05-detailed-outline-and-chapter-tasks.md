# 05 — Detailed outline and per-chapter tasks

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, all of it, especially "Outline", "Chapter format", "Growing project" and "Starting resources"
- `book/_template/chapter.md`

## Goal

Every part is broken into chapters (one sub-topic per file, 20–60 min reading plus practice). Each chapter exists as a stub in the book, and each has its own self-contained task file, so the learner can write chapters in any order whenever they choose.

## Steps

1. **Research before outlining.** The outline in the spec is "agreed, not set in stone". For each part, skim the primary resources listed in the spec, plus current authoritative sources (Anthropic, OpenAI and Google docs and engineering blogs; Hugging Face courses; Karpathy; Raschka; Chip Huyen; Hamel Husain), to check what sub-topics belong. Propose additions and removals. **Present the proposed chapter list to the learner and get approval before creating files.**
2. For each approved chapter, create a stub `book/part-NN-<slug>/<id>-<slug>.md` from the template:
   - full frontmatter: `tier`, `needs`, `status: not-started`, `last_verified` left empty
   - "Why this matters", written in full
   - learning goals as bullets
   - planned resources (unverified, marked TODO)
   - a planned practice brief, noting whether it's a standalone experiment or a step in `project/`
   - a placeholder for check questions
   - an empty "My understanding"
3. Plan the **growing project** across chapters: which chapter adds which capability to `project/`. Record this in `book/part-03-*/` or in a `project/ROADMAP.md`.
4. Fill in `book/index.md` with the **Mermaid dependency map** (parts as subgraphs, chapters as nodes, `needs` as edges, Core and Deeper styled differently; split the map per part if one diagram is unreadable). Fill in `book/paths.md` with 3–5 suggested paths, for example:
   - "Productive with Claude Code fast"
   - "Understand the transformer"
   - "Build an agent from zero"
   - "Cost-effective model mix"
5. For each chapter, create a task file `.scratch/ai-engineering-book/issues/NN-write-<chapter-id>-<slug>.md` (numbering continues from 07). Each file must be **self-contained** for a fresh session:
   - `Status: ready-for-agent`, `Type: task`, and `Blocked by:` (normally `02`, plus nothing else, because the learner reads non-linearly. Don't block on prerequisite chapters.)
   - **Read first:** `spec.md` (sections "The learner", "Chapter format", "Accuracy rules", "Languages"), the stub chapter file, and the stubs of its `needs` chapters, so it uses consistent terms and links back.
   - **Goal:** write the full chapter, following the six-section format.
   - **Specifics:** the learning goals, the sub-topics the explanation must cover, the planned resources to check, the practice brief, and how it connects to the growing project.
   - **Acceptance criteria:**
     - all six sections present
     - every link opened and checked, and `last_verified` set
     - resources added to `book/resources.md`
     - new terms added to `GLOSSARY.md`
     - "My understanding" left empty
     - `npm run build` passes
     - a dated `PROGRESS.md` log line
     - committed
6. Run `npm run progress` and commit.

## Acceptance criteria

- The learner approved the chapter list.
- Every chapter has a stub in the book and a task file in `issues/`.
- The dependency map and paths render in the book.
- Commit.

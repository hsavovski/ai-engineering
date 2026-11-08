# 01 — Restructure the repo

Status: resolved
Type: task
Blocked by: none

## Read first

- `../spec.md`, especially the "Repo layout" section
- `learning/CLAUDE.md`, `learning/docs/agents/*.md`

## Goal

Turn `learning/ai-agents/` into `learning/ai-engineering/`: its own git repo with a private GitHub remote, the agent conventions copied in, and an index of studies at `learning/`.

## Steps

1. Rename `learning/ai-agents/` to `learning/ai-engineering/`. This moves `.scratch/ai-engineering-book/` along with it. Afterwards, update any paths in `spec.md` that still say `ai-agents` where they mean the new location. Leave the "Prior work" history references alone.
2. Copy `learning/docs/agents/` into `ai-engineering/docs/agents/`. Create `ai-engineering/CLAUDE.md` with:
   - the same "Agent skills" sections, with paths relative to the study
   - a short pointer: "Study spec: `.scratch/ai-engineering-book/spec.md`. Read it before any task."
   
   Leave `learning/CLAUDE.md` in place, since it serves future studies.
3. Write `learning/README.md`: a short index of studies with one line per study and its path. Only `ai-engineering` exists for now. Add a note on how to start a new study: create a folder, copy `docs/agents`, add a CLAUDE.md.
4. In `ai-engineering/`:
   - Run `git init`.
   - Add a `.gitignore` covering `.env`, `node_modules/`, `.DS_Store`, `.venv/`, `__pycache__/`, VitePress `cache`/`dist`, and model weights (`*.gguf`, `*.safetensors`).
   - Remove the stray `.DS_Store`.
5. Check that `gh auth status` is logged in. If so, **ask the learner to confirm**, then run `gh repo create ai-engineering --private --source . --remote origin`. If not logged in, tell the learner to run `! gh auth login`, and leave the remote step as a checklist item in `PROGRESS.md`.
6. Make the initial commit. Push only after the learner confirms.

## Acceptance criteria

- `learning/ai-engineering/` exists, and `learning/ai-agents/` doesn't.
- `git status` in the study is clean after the commit, and `.env` is ignored.
- `ai-engineering/CLAUDE.md` points at the spec.
- `learning/README.md` lists the study.
- A private remote exists, or a pending checklist item explains why not.

## Comments

- 2026-11-08: Done except the GitHub remote: `gh` was not logged in. Left as a Setup checklist item in `PROGRESS.md`. Recorded Node 26 in the spec.
- 2026-11-08: Remote created (private) and pushed: https://github.com/hsavovski/ai-engineering

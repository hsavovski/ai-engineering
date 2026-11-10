# AI Engineering

A self-study of AI engineering in 2026: how LLMs work, programming with them, agents, evals, harnesses, Claude Code, production, and running and modifying models locally. Understanding comes first, tooling second.

The study is written as a non-linear, interactive book (VitePress). Chapters are written just in time, practice happens in `experiments/` and in one growing TypeScript agent in `project/`. The full intent, the outline and the working agreements live in the spec: [`.scratch/ai-engineering-book/spec.md`](.scratch/ai-engineering-book/spec.md).

Hardware: Mac mini M4 Pro, 24 GB unified memory. Local models through Ollama (Qwen3 family), paid models through OpenRouter and the Anthropic API.

## Run the book

```bash
npm install
npm run dev        # serve the book locally
npm run build      # check that everything builds
npm run progress   # regenerate the chapter status table in PROGRESS.md
```

## Layout

- `PROGRESS.md`: what to read next, your chapter status and your study log. Start here.
- `BUILD-LOG.md`: what agents built, one dated line per finished task, plus the setup checklist.
- `book/`: the VitePress book. One folder per part (`part-NN-<slug>/`), one file per chapter. `book/_template/chapter.md` is the chapter template.
- `notes/`: free-form notes, one file per topic (e.g. `notes/setup.md`).
- `experiments/`: one folder per experiment (`experiments/NN-name/`), code plus a README: what I tried, what happened, why. Each README is rendered into the book's Experiments section at build time (`book/experiments/` is generated and gitignored).
- `project/`: the growing TypeScript agent/harness (from Part 3 on). Evals live here and in `experiments/` (Part 4).
- `GLOSSARY.md`: vocabulary.
- `costs.md`: spend ledger against the €30 paid-API budget (created by issue 04).
- `scripts/`: book tooling (sidebar generation, `npm run progress`).
- `.scratch/ai-engineering-book/`: the spec and the task files (issues).
- `docs/agents/`: issue tracker, triage label and domain-doc conventions for agents.

## Useful endpoints

- Ollama (OpenAI-compatible): `http://localhost:11434/v1`
- Ollama (native): `http://localhost:11434`

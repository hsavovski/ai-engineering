# Spec: AI Engineering study book

Agreed with the learner on 2026-11-08 in a grilling session. This file is the single source of context for every task in `issues/`. Tasks run in fresh sessions without that conversation, so **everything a task needs to know about intent lives here**. When something here conflicts with a task file, this spec wins unless the task says otherwise.

## The learner

- Experienced full-stack software engineer (JS/TS ecosystem). TypeScript is the most comfortable language. Reads Python fine.
- Returning after a ~1.5-year break (roughly mid-2025): AI knowledge is outdated.
- Has some math background and took an ML course before: knows simple neural networks, weights and backprop.
- Very interested in the technology itself. Wants to be well-versed, with **understanding weighted above tooling**.
- Can spend ~20 h/week. Wants core concepts plus practice covered first, then will choose areas to go deeper over a longer period.
- **Will not follow the book linearly.** There are no time limits or schedules in the book.
- Uses Claude (Pro plan) and Claude Code daily. Wants to try other paid models and agents (Kimi, DeepSeek, GPT, Gemini via OpenRouter) and find the most cost-effective mix of local and paid.
- This is **purely a study project**: no interview prep and no job-search content.

## Hardware and environment

- Mac mini, Apple M4 Pro, 24 GB unified memory.
- Ollama installed (0.40.x). Models already pulled: `qwen3:8b`, `qwen3:14b`, `qwen3:30b-a3b`, `qwen2.5-coder:14b`.
- Tools: Python 3.15 (Homebrew), `uv`, `git`, Node 26.
- Paid-API budget: **~€30 for the study**, mostly through OpenRouter, plus a small amount of Anthropic API credit. Every experiment that spends money records the amount in `costs.md`.

## Repo layout

- `~/Desktop/claude/learning/` is the umbrella folder for **all** of the learner's studies (any subject). It has a `README.md` index of studies. It is not itself a git repo.
- This study lives at `learning/ai-engineering/` (renamed from `ai-agents/` by issue 01). It is **its own git repo** with a **private** GitHub remote.
- Conventions (issue tracker in `.scratch/`, triage labels, domain docs) come from `learning/CLAUDE.md` and `learning/docs/agents/`. Issue 01 copies them into the study.

```
ai-engineering/
├── CLAUDE.md               # study-level agent instructions
├── docs/agents/            # tracker / label / domain conventions
├── .scratch/ai-engineering-book/   # this spec + issues
├── book/                   # VitePress site (the "interactive book")
│   ├── index.md            # home: dependency map + suggested paths
│   ├── paths.md            # suggested reading paths
│   ├── resources.md        # resources catalog with checkboxes
│   ├── landscape.md        # models / prices / tools, dated, refreshed often
│   ├── glossary.md         # rendered from GLOSSARY.md at build time
│   ├── experiments/        # rendered from experiments/*/README.md (gitignored)
│   └── part-NN-<slug>/     # one folder per part, one file per chapter
├── notes/                  # the learner's free-form notes
├── experiments/NN-name/    # code + README (what I tried, what happened, why)
├── project/                # the growing TS agent/harness (see "Growing project")
├── scripts/                # chapters.mjs (chapter + experiment catalogs), book-build.mjs, progress.mjs
├── docs/adr/               # architecture decisions
├── GLOSSARY.md
├── PROGRESS.md             # the learner's chapter status + study log
├── BUILD-LOG.md            # agents' dated log of finished tasks
├── costs.md                # spend ledger against the €30 budget
├── .env                    # ANTHROPIC_API_KEY, OPENROUTER_API_KEY (gitignored)
└── .env.example
```

## The book

- **Tool: VitePress.** Chapters are plain markdown (still readable on GitHub). Vue components are added only where they earn their place (status badge, quizzes, small interactive demos such as a tokenizer or temperature slider). Runs locally with `npm run dev`. Not deployed while the repo is private.
- **Non-linear.** Each chapter declares its prerequisites. The home page shows a **dependency map** (Mermaid) and **suggested paths** (e.g. "Productive with Claude Code fast", "Understand the transformer").
- **Two tiers:** **Core** (the first pass through all the concepts) and **Deeper** (optional follow-ups). Clearly marked on every chapter.
- **Written just in time.** The detailed outline exists up front as stub chapters. Each chapter's full content is written by its own task, run whenever the learner chooses.

### Chapter format

One sub-topic per file, about 20–60 minutes of reading plus its practice. Frontmatter:

```yaml
---
title: Attention
part: 1
chapter: "1.4"       # quote ids: YAML reads 1.10 as 1.1
tier: core            # core | deeper
needs: ["1.2", "1.3"] # prerequisite chapter ids
status: not-started   # not-started | reading | practiced | understood (the learner updates it)
last_verified: 2026-11-08
---
```

Sections, in order:

1. **Why this matters**: a short motivation.
2. **Explanation**: structured, in depth, with diagrams (Mermaid or SVG) and worked examples. Can span sub-sections. This is the core of the book. Write it for an experienced engineer, not a beginner programmer.
3. **Resources at the point of use.** Resources are **part of the learning path**, not citations at the end. The explanation sets a resource up, and the text after it builds on it. Callout format:
   - `📖 Read now: [Title](url) (article, ~15 min, essential)`. Explain what to look for in it.
   - `▶️ Watch: [Title](url) (video, ~40 min, optional)`
   - Books: name the specific chapters.
   - Tag every resource with type (article/video/paper/book/repo/docs), estimated time, and essential or optional.
4. **Practice**: an experiment in `experiments/` and/or a step in the growing project. The learner does the practical work. The chapter gives the brief, the steps and the acceptance check, not the solution. Python work (only where unavoidable) gets heavily commented starter code.
5. **Check questions**, with answers in collapsible `<details>`.
6. **My understanding**: an empty section the **learner** writes in their own words. Agents never fill it.

`npm run check -- <id>` enforces the mechanical parts of this format (the five `##` sections in order, no stub leftovers, `last_verified`, resource tags and their rows in `book/resources.md`, a `<details>` answer per check question, an empty "My understanding"); judgment calls such as sources, prices and "Look for" stay with the writer and the fact-checker. Invalid frontmatter (an unquoted `chapter` id, an unknown `tier` or `status`, a `needs` id that doesn't exist) fails `dev`, `build` and `npm run progress`.

### Accuracy rules

- **Open and check every link** when writing a chapter. Never invent URLs. If a resource can't be verified, leave it out.
- Claims about specific tools, prices, model specs, dates or standards link to a primary source.
- **Every dated or numeric claim links its source in the same paragraph** (a release date, a ratio like "100× cheaper", a context-window size, a benchmark score). Prices, rankings and model specs go on Landscape, never in a chapter: link to the Landscape section instead. If you can't find a source for a claim, cut the claim.
- Every chapter carries `last_verified`.
- `landscape.md` (models, prices, tools) is dated and refreshed often, because it goes stale fastest. Chapters link to it instead of hard-coding prices.
- Known items re-verified on 2026-11-08 (issue 06, sources in `book/landscape.md`): A2A was accepted into the Agentic AI Foundation on 2026-08-27; the OpenTelemetry GenAI semantic conventions are still in Development status, not stable. Several resource URLs below are still marked "(unverified)".

## Languages

- The learner **writes TypeScript** wherever practical: APIs, agents, harnesses, MCP servers, evals.
- **Python only where it's really needed**: the tiny GPT (PyTorch), LoRA fine-tuning (`mlx-lm`), GGUF conversion and quantization (llama.cpp). Use `uv` for Python environments.

## Growing project

One TypeScript agent/harness lives in `project/` and grows across parts, so practice builds on the same project instead of starting over:

- Part 3: agent loop, tools, then the same agent rebuilt with an SDK.
- Part 4: evals and tracing added.
- Part 5: turned into a small coding harness.
- Part 8: hardened (sandboxing, prompt-injection defenses).
- Part 9: routes between local (Ollama) and paid (OpenRouter) models through one endpoint.

Individual chapters may also have their own small experiments.

## Outline (agreed, not set in stone)

The detailed chapter list (approved 2026-11-08, issue 05) lives in the book itself: the stubs under `book/part-NN-*/`, the per-part maps on `book/index.md` (rendered at build time from each chapter's `needs`), and the project steps in `project/ROADMAP.md`. One task per chapter: issues 07–103.

| Part | Title | Contents (Core unless marked) |
|---|---|---|
| 0 | Catch-up | What changed from 2024 to 2026: reasoning models, agents, MCP, coding agents, open-weight models, prices, the Agentic AI Foundation. Orientation and vocabulary. |
| 1 | How LLMs work | Tokens/tokenization, embeddings, attention, the transformer block, training stages (pretraining, SFT, RLHF/DPO, RL with verifiable rewards for reasoning), inference (sampling, temperature, KV cache), reasoning and test-time compute, MoE, quantization, the context window. **Build a tiny GPT** (Python/PyTorch). Deeper: interpretability basics (features, SAEs, circuit tracing), nanochat. |
| 2 | Programming with LLMs | APIs (Anthropic, OpenAI-compatible, Ollama), streaming, structured output, tool calling, prompting, prompt caching, embeddings, **RAG** (chunking, hybrid search, reranking, agentic search vs. vector DB). |
| 3 | Agents | The agent loop, **tool design** (own chapter), **context engineering** (own chapter), memory, MCP (use and build a server), AGENTS.md, multi-agent patterns, **TS agent SDKs** (Vercel AI SDK, Claude Agent SDK, OpenAI Agents SDK, Mastra): build from scratch first, then with an SDK. Deeper: A2A, computer and browser agents, agent payments (one sidebar). |
| 4 | Evals & observability | Error analysis, building eval sets, code-based checks, LLM-as-judge checked against human labels, regression evals in CI, tracing (OpenTelemetry GenAI conventions, Langfuse), cost and latency tracking. |
| 5 | Harnesses | What a harness is. One deep anatomy (Claude Code or opencode, reading source where available) plus a comparison table (Claude Code, Codex CLI, opencode, Aider, Cline/Continue). Build a mini harness. Run harnesses against local Qwen. Long-running agents. |
| 6 | Claude Code mastery | **Principles over flags** (features change monthly): CLAUDE.md and memory, skills (including Matt Pocock's skills), hooks, subagents, MCP, worktrees and parallel work, kanban and issue workflows, plan/grill/spec methodologies, working within Pro limits. |
| 7 | AI-native software development | Spec-driven development, TDD with agents, automated review, CI and background agents, automating the whole lifecycle, where humans stay in the loop. |
| 8 | Production | Security: prompt injection, the "lethal trifecta", OWASP Top 10 for LLM apps and for agentic apps, sandboxing, least privilege. Guardrails. Deploying AI apps: durable and long-running agents, queues, rate limits, streaming UI, auth, managed agents. |
| 9 | Model landscape & cost | Paid APIs (Claude, Kimi, DeepSeek, GPT, Gemini), OpenRouter, LiteLLM, local vs. paid, cost-effective routing rules. Kept short. Prices live in `landscape.md`. |
| 10 | Modifying & serving models | Ollama Modelfile, HF to GGUF conversion and quantization (Q4/Q8), LoRA fine-tuning with `mlx-lm` then merging into Ollama, training from scratch (the tiny GPT from Part 1, nanochat as Deeper). Deeper: inference engines (llama.cpp, MLX, vLLM), speculative decoding, batching and prefix caching, distillation and synthetic data. |
| 11 | Multimodal, voice, computer use | (Deeper) Vision input, realtime voice, STT/TTS pipelines, computer-use agents. |

## Starting resources (from research on 2026-11-08; verify before use)

- **General:** Chip Huyen, *AI Engineering* (O'Reilly, 2025), https://github.com/chiphuyen/aie-book
- **Part 1:** Raschka, *Build an LLM From Scratch* https://github.com/rasbt/LLMs-from-scratch (unverified). Raschka, *Build a Reasoning Model (From Scratch)* https://github.com/rasbt/reasoning-from-scratch. Karpathy, Zero to Hero https://karpathy.ai/zero-to-hero.html (unverified). Karpathy, nanochat https://github.com/karpathy/nanochat. 3Blue1Brown neural network / transformer series.
- **Part 2:** Claude platform docs https://platform.claude.com/docs. Hugging Face courses https://huggingface.co/learn
- **Part 3:** Anthropic engineering: [effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), [writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents), [multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), [building agents with the Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk). HF Agents Course https://huggingface.co/learn/agents-course
- **Part 4:** Husain & Shankar, evals FAQ https://hamel.dev/blog/posts/evals-faq/. *Evals for AI Engineers* (O'Reilly). Langfuse OpenTelemetry https://langfuse.com/docs/opentelemetry
- **Part 5:** [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [Managed agents](https://www.anthropic.com/engineering/managed-agents), opencode and Codex CLI source.
- **Part 6:** [Agent skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills), Claude Code docs https://code.claude.com/docs, Matt Pocock's skills repo (unverified).
- **Part 8:** OWASP GenAI Security Project https://genai.owasp.org (unverified).
- **Part 10:** HF smol-course https://huggingface.co/learn/smol-course, mlx-lm https://github.com/ml-explore/mlx-lm, llama.cpp https://github.com/ggml-org/llama.cpp.

## Prior work to carry over

From the old `PROGRESS.md` (`ai-agents/`):
- Done: Ollama installed (0.40.14), 4 Qwen models pulled, speed benchmark in `experiments/00-speed-check/` (`bench.py`, README), notes in `notes/setup.md`.
- Log: 2026-11-06 project created. qwen3:14b ~24 tok/s, thinking mode makes simple answers ~20× slower. 8b wrote buggy code. 30b-a3b is fast (MoE) but tight on memory.
- Unfinished items from the old roadmap (num_ctx/temperature experiments, quantization notes, first API call, streaming, tool call, agent loop, harness comparisons, evals, LiteLLM/OpenRouter hybrid, MCP, context management, MLX vs GGUF) are all absorbed into the outline above.

## Working agreements for agents executing tasks

- Read this spec and the task file first. Follow the `.scratch` tracker conventions in `docs/agents/issue-tracker.md`: set `Status:` to `claimed` before starting work, and to `resolved` when done.
- **Every issue runs in its own worktree**: `.worktrees/issue-NN` on branch `issue-NN`, so parallel tasks and the learner's own work on `main` never share a checkout. Before claiming, if the session isn't already in that worktree, create it from `main` and switch into it (Claude Code: `EnterWorktree` with its `path`):

  ```sh
  git worktree add .worktrees/issue-NN -b issue-NN main
  ln -s ../../node_modules .worktrees/issue-NN/node_modules
  ```

  The symlink saves an `npm install` and stays out of commits through `.git/info/exclude` (`.gitignore`'s `node_modules/` only matches directories). Claim, write and commit on `issue-NN` only; the learner merges into `main`, and other worktrees belong to other tasks. Shared files (`GLOSSARY.md`, `book/resources.md`, `BUILD-LOG.md`) get edits from every task, so only append rows or lines there, keeping existing ones in place and in their format, so merges stay clean.
- **The learner does the practical work.** Agents write explanations, scaffolding, starter code and reviews. Agents never fill in "My understanding" and never solve the practice for the learner.
- Small batches: one task = one chapter, or one setup step.
- When finishing a task, add a dated line to `BUILD-LOG.md`. Don't edit `PROGRESS.md`: it belongs to the learner, and its table is regenerated with `npm run progress` after merging into `main` (running it on parallel branches makes every branch conflict).
- Commit at the end of each task (once the git repo exists) with a clear message. Don't push without asking.
- **Experiment numbers are assigned in the issue file**, never picked at run time ("next free number" collides when tasks run in parallel). Numbers up to `44` are taken by existing issues; a new issue that needs an experiment takes the next unused number. Issues that share a folder (e.g. `38-lora`) build on each other, so don't run them in the same parallel batch.
- Keep Claude Pro usage in mind: don't fan out subagents unless the task calls for it.

# Progress

Tick items as you go. Add a dated line to the log at the bottom when you finish a session.

## 1. Run a local model
- [x] Install Ollama (`brew install ollama && brew services start ollama`) → `notes/setup.md`
- [x] Pull `qwen3:14b` and benchmark it → `experiments/00-speed-check/`
- [ ] Chat with it yourself: `ollama run qwen3:14b --verbose`; try thinking on/off (`/set think`, `/set nothink`)
- [x] Try `qwen3:8b`, `qwen3:30b-a3b`, `qwen2.5-coder:14b`; note speed (tokens/sec) and memory pressure
- [ ] Change `num_ctx`, temperature; write what changed in `notes/model-params.md`
- [ ] Learn what quantization (Q4, Q8) means → `notes/quantization.md`

## 2. Talk to it through the API
- [ ] `experiments/01-first-api-call/`: call `localhost:11434/v1` from a short script
- [ ] Stream the response
- [ ] Same script against a paid API (e.g. Claude); note the differences

## 3. Build a tiny agent yourself
- [ ] `experiments/02-tool-call/`: give the model one tool (e.g. read a file) and handle the tool call
- [ ] `experiments/03-agent-loop/`: loop until the model stops calling tools
- [ ] Add a second tool (run a shell command) and watch it plan
- [ ] Write down where the local model breaks → `notes/agent-loop.md`

## 4. Use real harnesses
- [ ] opencode with local Qwen
- [ ] Aider with local Qwen
- [ ] Cline or Continue in VS Code with local Qwen
- [ ] Claude Code on the same tasks
- [ ] Compare in `notes/harnesses.md`: what each does well, how they manage context

## 5. Evals: compare models on your own tasks
- [ ] Write 5 small, realistic programming tasks in `evals/tasks.md`
- [ ] Run each task with local Qwen and a paid model in the same harness
- [ ] Record pass/fail, time, cost in `evals/results.md`

## 6. Hybrid setup
- [ ] Set up LiteLLM (or OpenRouter) as one endpoint for local + paid models
- [ ] Point a harness at it and switch models by config
- [ ] Decide your routing rules (what goes local vs paid) → `notes/routing.md`

## 7. Deeper topics (pick what interests you)
- [ ] MCP: connect an agent to an external tool or data source
- [ ] System prompts and project files (`CLAUDE.md`, `AGENTS.md`)
- [ ] Context management: what happens when the window fills up
- [ ] MLX vs GGUF on Apple Silicon

## Log

- 2026-11-06: project created; Ollama + Qwen model sizes discussed.
- 2026-11-06: installed Ollama 0.40.14, pulled qwen3:14b. ~24 tok/s output; thinking mode makes simple answers ~20x slower.
- 2026-11-06: pulled qwen3:8b, qwen2.5-coder:14b, qwen3:30b-a3b and compared. 8b wrote buggy code; 30b-a3b is fast (MoE) but tight on memory.
- 2026-11-08: grilled the study plan → spec + tasks in `.scratch/ai-engineering-book/`. Renamed `ai-agents/` → `ai-engineering/`, own git repo (issue 01).

## Setup checklist

- [x] Private GitHub remote: https://github.com/hsavovski/ai-engineering

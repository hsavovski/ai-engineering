# AI agents, models & harnesses

Learning project: understand how models, inference servers, harnesses and agents fit together,
and build a practical hybrid setup (local Qwen + paid API models) for programming.

Hardware: Mac mini M4 Pro, 24GB unified memory.

## Layout

- `PROGRESS.md` – the roadmap and checklist. Start here.
- `notes/` – what I learned, one file per topic (e.g. `notes/quantization.md`).
- `experiments/` – scripts and configs, one folder per experiment (e.g. `experiments/01-first-api-call/`).
- `evals/` – a fixed set of programming tasks to compare models and harnesses on.

## Vocabulary

| Term | Meaning |
|---|---|
| Model | The weights that predict text (Qwen, Claude, GPT). |
| Inference server | Runs a model and exposes an API (Ollama, LM Studio, llama.cpp, MLX). |
| Harness | Program around the model: tools, context management, the loop (Claude Code, opencode, Aider). |
| Agent | Model + harness running a loop: think → call tool → read result → repeat. |
| Router / gateway | One endpoint in front of many models (LiteLLM, OpenRouter). |

## Useful endpoints

- Ollama (OpenAI-compatible): `http://localhost:11434/v1`

# Glossary

Starting vocabulary, carried over from the old README. Issue 06 expands it into grouped terms with links to chapters.

| Term | Meaning |
|---|---|
| Model | The weights that predict text (Qwen, Claude, GPT). |
| Inference server | Runs a model and exposes an API (Ollama, LM Studio, llama.cpp, MLX). |
| Harness | Program around the model: tools, context management, the loop (Claude Code, opencode, Aider). |
| Agent | Model + harness running a loop: think → call tool → read result → repeat. |
| Router / gateway | One endpoint in front of many models (LiteLLM, OpenRouter). |

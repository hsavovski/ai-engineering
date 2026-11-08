# Setup

## Ollama

- Installed 2026-11-06 via Homebrew: `brew install ollama` (version 0.40.14)
- Runs as a background service that starts at login: `brew services start ollama`
  - Stop: `brew services stop ollama`
- API: `http://localhost:11434` (native) and `http://localhost:11434/v1` (OpenAI-compatible)
- Models are stored in `~/.ollama/models`

## Models pulled

| Model | Disk | Notes |
|---|---|---|
| `qwen3:8b` | 5.2GB | Fastest (~41 tok/s), but made a subtle bug in testing |
| `qwen3:14b` | 9.3GB | Default general model (~25 tok/s) |
| `qwen2.5-coder:14b` | 9.0GB | Code-tuned, no thinking mode, verbose (~25 tok/s) |
| `qwen3:30b-a3b` | 18GB | MoE, smartest + fast (~41 tok/s), but uses ~19GB RAM; close other apps |

Total on disk: ~42GB.

## Handy commands

```bash
ollama list                    # models on disk
ollama ps                      # models loaded in memory right now
ollama run qwen3:14b           # chat
ollama run qwen3:14b --verbose # chat + print tokens/sec after each reply
ollama rm <model>              # delete a model
```

Inside a chat:
- `/set parameter num_ctx 8192` – context window
- `/set parameter temperature 0.2` – lower = more deterministic
- `/set nothink` / `/set think` – toggle Qwen3's reasoning ("thinking") output
- `/bye` – exit

# 01 – Keys smoke test

## What I tried

Do all three routes to a model work from code: local Ollama, OpenRouter and the Anthropic API? And what does one tiny request cost on each?

`smoke.ts` sends the same one-sentence prompt to each provider using plain `fetch`, then prints the reply, the token usage and the cost:

| Provider | Default model | API | Cost shown |
|---|---|---|---|
| Ollama | `qwen3:8b` (thinking off) | native `/api/chat` | $0 (local) |
| OpenRouter | `openai/gpt-6-luna` | OpenAI-compatible Chat Completions | actual charge, from `usage.cost` |
| Anthropic | `claude-haiku-5-5` | Messages API | estimate from token counts × prices in `book/landscape.md` |

You can override the models with `OLLAMA_MODEL`, `OPENROUTER_MODEL` and `ANTHROPIC_MODEL` in `.env`.

```bash
cp .env.example .env   # then fill in the two keys
npm run smoke          # = node --env-file-if-exists=.env experiments/01-keys-smoke-test/smoke.ts
```

Node 26 runs TypeScript directly, so there's nothing to install. (The task suggested `npx tsx`; it isn't needed.)

## What happened

<!-- Fill in after running: did all three reply? Tokens in/out and cost per provider. Then add the paid calls to costs.md. -->

- 2026-11-08 (agent check, no keys yet): Ollama replied (30 in / 38 out tokens); OpenRouter and Anthropic failed as expected with "key is not set".
- 2026-11-08 (with keys): all three replied with a correct one-sentence answer.

| Provider · model | Tokens in / out | Cost |
|---|---|---|
| Ollama · qwen3:8b | 30 / 38 | $0 |
| OpenRouter · openai/gpt-6-luna | 20 / 71 | $0.000037 (actual) |
| Anthropic · claude-haiku-5-5 | 24 / 47 | $0.000026 (estimate) |

## Why (what I learned)

<!-- Your notes: differences between the three response shapes, how usage is reported, anything surprising. -->

# 35 – Gateway

## What I tried

One LiteLLM proxy on localhost in front of one local Ollama model and two paid models (via OpenRouter or direct keys), called from a TypeScript script and from a harness, switching models by config only.

Steps and acceptance check: [chapter 9.2](../../book/part-09-model-landscape-cost/9.2-openrouter-litellm.md#practice). I write all the config and code.

Free for the local model; paid calls are logged in `costs.md`. Never commit `.env` or a config with keys in it.

## What happened

### Setup

| Public name | Backend string in `litellm_params.model` | Where it runs | Notes |
|---|---|---|---|
| local-... | | Ollama | |
| paid-... | | | |
| paid-... | | | |

### Thinking through the gateway (local model)

- Direct Ollama call: where the thinking text appears:
- Through the gateway: where it appears (or whether it is dropped):

### Fallback

- Prediction (before testing):
- What happened, and how I could tell the fallback fired:

### Spend

| Call | Gateway-reported cost | Provider usage page | Difference |
|---|---|---|---|
| | | | |

- Local model cost reported by the gateway:
- Enforced budget tested? (yes/no, what happened):

### Harness

| Gateway name | Task | Worked? | If not: model, gateway or harness config? |
|---|---|---|---|
| | | | |

## Why (what I learned)

<!-- At least three bullets. -->

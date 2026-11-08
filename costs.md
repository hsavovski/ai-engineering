# Costs

**Budget:** €30 for the whole study (paid APIs, mostly via OpenRouter, plus a little Anthropic API credit).

**Spent so far:** $0.000063

Update the running total each time you add a row. Providers bill in USD, so the ledger is in USD; convert at the rate on your card statement when you compare against the €30.

## Ledger

| Date | Experiment / chapter | Provider / model | Tokens in / out | Cost (USD) | Note |
|---|---|---|---|---|---|
| 2026-11-08 | 01-keys-smoke-test | OpenRouter / openai/gpt-6-luna | 20 / 71 | $0.000037 | actual charge (`usage.cost`) |
| 2026-11-08 | 01-keys-smoke-test | Anthropic / claude-haiku-5-5 | 24 / 47 | $0.000026 | estimate from token counts; check the Usage page |

## Credit added

| Date | Provider | Amount | Note |
|---|---|---|---|

## How to check real spend

The ledger is your own estimate. These dashboards show what was actually charged:

- **OpenRouter:** [Activity](https://openrouter.ai/activity) lists every request with its cost, and [Credits](https://openrouter.ai/settings/credits) shows your balance. Inference is billed at provider list price; the platform fee is charged when you buy credits (see [Landscape](book/landscape.md#access-routes)).
- **Anthropic:** [Usage](https://platform.claude.com/usage) shows tokens and cost per model and key, and [Billing](https://platform.claude.com/settings/billing) shows your balance and spend limits.

Optional safety nets: set a credit limit on the OpenRouter key ([Keys](https://openrouter.ai/settings/keys)) and a monthly spend limit in the Anthropic console.

Per-token prices for every model are on the [Landscape](book/landscape.md) page.

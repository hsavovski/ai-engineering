# 04 — API keys and the cost ledger

Status: ready-for-human
Type: task
Blocked by: 01

## Read first

- `../spec.md`, especially the budget in "Hardware and environment"

## Goal

Paid APIs are ready to use from experiments, with spend tracked against the €30 budget.

## Steps

**Learner (in the browser):**
1. Create an OpenRouter account, add ~€10–20 of credit, and create an API key. Optionally set a credit limit on the key.
2. Create an Anthropic Console account (separate from the Claude Pro subscription), add a small amount of credit (~€5), and create an API key. Optionally set a monthly spend limit.

**Agent (helps with the rest):**
3. Create `.env.example` with `ANTHROPIC_API_KEY=`, `OPENROUTER_API_KEY=` and `OLLAMA_BASE_URL=http://localhost:11434`. The learner copies it to `.env` and fills in the keys. **The agent never reads or prints `.env` contents.**
4. Create `costs.md`:
   - budget at the top (€30)
   - a running total
   - a ledger table: date, experiment/chapter, provider/model, tokens in/out, cost, note
   - how to check real spend (the OpenRouter activity page and the Anthropic console usage page, with links checked when written)
5. Write a tiny smoke test, `experiments/01-keys-smoke-test/` (TypeScript, run with `npx tsx`). It sends one short prompt each to Ollama, OpenRouter (a cheap model) and Anthropic (the cheapest current Haiku), then prints the replies and token usage. The learner runs it and logs the cost in `costs.md`.

## Acceptance criteria

- `.env` exists and is gitignored. `.env.example` is committed.
- The smoke test gets a reply from all three providers.
- `costs.md` has its first entry.

## Comments

- 2026-11-08: Agent steps 3–5 done: `.env.example`, `costs.md` (dashboard links checked: they resolve, behind login), and `experiments/01-keys-smoke-test/` (`npm run smoke`). It uses Node 26's built-in TypeScript support instead of `npx tsx`. Defaults: `openai/gpt-6-luna` on OpenRouter (checked in OpenRouter's model list) and `claude-haiku-5-5`. Ollama part verified working; the paid parts fail cleanly without keys. **Left for the learner:** steps 1–2 (accounts, credit, keys), `cp .env.example .env` and fill it in, `npm run smoke`, then the first `costs.md` entries. Resolve this issue once all three providers reply.

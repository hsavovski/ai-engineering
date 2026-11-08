// Smoke test: one short prompt each to Ollama, OpenRouter and Anthropic.
// Prints each reply and its token usage. Run from the repo root:
//   node --env-file-if-exists=.env experiments/01-keys-smoke-test/smoke.ts
// Node 26 runs TypeScript directly (type stripping), so there's nothing to install.

const PROMPT = 'In one sentence: what is a token in a large language model?'

const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? 'qwen3:8b'
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL ?? 'openai/gpt-6-luna'
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-haiku-5-5'

// USD per 1M tokens, from book/landscape.md (2026-11-08), for a rough estimate only.
// Haiku 5.5 rates apply to prompts up to 100k tokens.
const ANTHROPIC_PRICE = { input: 0.1, output: 0.5 }

type Result = { reply: string; tokensIn: number; tokensOut: number; costUsd?: number }

async function post(url: string, headers: Record<string, string>, body: unknown) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...headers },
    body: JSON.stringify(body),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(json)}`)
  return json
}

async function ollama(): Promise<Result> {
  const base = process.env.OLLAMA_BASE_URL ?? 'http://localhost:11434'
  // Native API, so `think: false` is honored (see experiment 00)
  const json = await post(`${base}/api/chat`, {}, {
    model: OLLAMA_MODEL,
    messages: [{ role: 'user', content: PROMPT }],
    think: false,
    stream: false,
  })
  return { reply: json.message.content, tokensIn: json.prompt_eval_count, tokensOut: json.eval_count, costUsd: 0 }
}

async function openrouter(): Promise<Result> {
  const key = process.env.OPENROUTER_API_KEY
  if (!key) throw new Error('OPENROUTER_API_KEY is not set in .env')
  const json = await post(
    'https://openrouter.ai/api/v1/chat/completions',
    { authorization: `Bearer ${key}` },
    { model: OPENROUTER_MODEL, messages: [{ role: 'user', content: PROMPT }], max_tokens: 200 },
  )
  // OpenRouter reports the actual charge in usage.cost
  return {
    reply: json.choices[0].message.content,
    tokensIn: json.usage.prompt_tokens,
    tokensOut: json.usage.completion_tokens,
    costUsd: json.usage.cost,
  }
}

async function anthropic(): Promise<Result> {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) throw new Error('ANTHROPIC_API_KEY is not set in .env')
  const json = await post(
    'https://api.anthropic.com/v1/messages',
    { 'x-api-key': key, 'anthropic-version': '2026-10-21' },
    { model: ANTHROPIC_MODEL, max_tokens: 200, messages: [{ role: 'user', content: PROMPT }] },
  )
  const { input_tokens, output_tokens } = json.usage
  return {
    reply: json.content.find((b: { type: string }) => b.type === 'text')?.text ?? '',
    tokensIn: input_tokens,
    tokensOut: output_tokens,
    costUsd: (input_tokens * ANTHROPIC_PRICE.input + output_tokens * ANTHROPIC_PRICE.output) / 1e6,
  }
}

const providers: [string, string, () => Promise<Result>][] = [
  ['Ollama', OLLAMA_MODEL, ollama],
  ['OpenRouter', OPENROUTER_MODEL, openrouter],
  ['Anthropic', ANTHROPIC_MODEL, anthropic],
]

let failed = 0
for (const [name, model, call] of providers) {
  console.log(`\n── ${name} · ${model}`)
  try {
    const r = await call()
    console.log(r.reply.trim())
    const cost = r.costUsd === undefined ? 'cost not reported' : `$${r.costUsd.toFixed(6)}`
    console.log(`tokens in/out: ${r.tokensIn} / ${r.tokensOut} · ${cost}`)
  } catch (err) {
    failed++
    console.log(`FAILED: ${(err as Error).message}`)
  }
}
console.log(failed ? `\n${failed} provider(s) failed.` : '\nAll three providers replied.')
process.exitCode = failed ? 1 : 0

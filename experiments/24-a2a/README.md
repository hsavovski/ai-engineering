# 24 – A2A: my agent behind an Agent Card

## What I tried

Exposed the `project/` agent (step 1 loop, local Qwen) as a minimal A2A 1.0 server over JSON-RPC: an Agent Card at `/.well-known/agent-card.json`, `SendMessage` and `GetTask`, tasks in memory. Called it from my own client (`client.ts`) and from the official `@a2a-js/sdk` client (`sdk-client.ts`) as an interop check.

Steps and acceptance check: [chapter 3.12](../../book/part-03-agents/3.12-a2a.md#practice). I write all the code.

## What happened

### Agent type and card

<!-- Message-only, task-generating or hybrid, and why. The skill descriptions and why they're worded that way. -->

### Runs

| Question | Task state | Time | Turns | Follow-up in same contextId? |
|---|---|---|---|---|
| | | | | |

### Interop: what the SDK client made me fix

| What failed | Spec section | Fix in my server |
|---|---|---|
| | | |

### Broken on purpose

| Case | What the client saw | What it should see |
|---|---|---|
| Server down at card fetch | | |
| Card lists a dead interface URL | | |
| Agent hits its turn limit | | |
| Message to a completed task | | |

### MCP vs A2A (if 3.7 is done)

<!-- Five lines: what was the same, what A2A made me decide that MCP didn't. -->

## Why (what I learned)

<!-- What did A2A add over calling runAgent directly, and when would that be worth it? At least three bullets. -->

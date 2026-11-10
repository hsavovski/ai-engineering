# 32 – Streaming UI and auth

## What I tried

Can I put a streaming chat UI with tool cards in front of a local model, survive disconnects, lock it behind a session, and walk the MCP OAuth discovery chain by hand?

Steps and acceptance check: [chapter 8.6](../../book/part-08-production/8.6-streaming-ui-auth.md#practice). I write all the code. Versions used (`ai`, `@ai-sdk/react`, Vite, Node, Ollama model):

## What happened

### Predictions (before running)

<!-- Will the tool arguments stream in fragments or arrive whole on this model? What will the user see when the server dies mid-stream? When the tab closes? -->

### Raw stream (annotated)

<!-- Paste the curl -N output. Mark: tool call start, arguments complete, result, second step. -->

| Question | Answer |
|---|---|
| Arguments streamed in fragments or whole? | |
| Number of `tool-input-delta` chunks | |
| Where did `tool-output-available` come from? | |

### Streaming proof

| Check | Result |
|---|---|
| First token visible in UI at (ms after send) | |
| Stream ended at (ms after send) | |
| What buffering looked like when I broke it on purpose | |

### Disconnects

| Case | What the user saw | What the server did with the model run | Message store after |
|---|---|---|---|
| server killed mid-stream | | | |
| tab closed mid-stream | | | |
| reload after a finished answer | | | |

### Auth

| Route | No cookie | User A | User B on A's chat |
|---|---|---|---|
| POST chat | | | |
| list chats | | | |
| resume / stop | | | |

Cookie attributes I set (`HttpOnly`, `SameSite`, `Secure`, `__Host-`) and why:

### MCP discovery drill (curl transcript)

| Step | Request | Response (key headers / fields) |
|---|---|---|
| 1 unauthenticated call | | |
| 2 fetch protected resource metadata | | |
| 3 authorization server found at | | |
| 4 wrong-audience token | | |

## Why (what I learned)

<!-- At least three bullets. -->

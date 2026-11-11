# Fact-check backlog

Written 2026-11-11 after the batches that wrote chapters 2.6–2.11, 3.1–3.4, 3.10, 8.6, 9.1–9.3 and 10.4. None of these has had the fact-check pass yet (`git log --oneline --grep "Fact-check chapter"` lists the chapters that have). Everything below comes from the writing agents' own reports: they flagged what they could not verify. Nothing here has been re-checked since.

Run a fact-check with `FACT_CHECK` in `scripts/workflows/book-batch.workflow.js` (branch `factcheck-X.Y`). Fix only real problems, keep the author's voice, cut claims that have no primary source.

## Shakiest: check these first

### 3.2 Build the agent loop from scratch (`book/part-03-agents/3.2-agent-loop.md`)
- The loop, `stop_reason` and Agent SDK `maxTurns` claims come from WebFetch summaries of three Anthropic pages. Re-read the pages themselves.
- The "refusal / `pause_turn` handled explicitly" row of the stop-condition table rests on the how-tool-use-works page alone.
- "Some providers require reasoning blocks to be sent back" has no source. Add one or cut it.
- The Agent SDK article: the issue's planned URL (`anthropic.com/research/building-agents-with-the-claude-agent-sdk`) is a 404. The chapter cites the redirected `claude.com/resources/articles/...` page, which does not call itself an engineering post. Check the citation wording.
- The local observation (qwen3:8b vs 14b on a "find the value of beta" task) is one run each. The chapter says so; keep it labelled as an anecdote.

### 10.4 Merge and serve (`book/part-10-modifying-serving-models/10.4-merge-and-serve.md`)
- **The pipeline was never run.** The attempt to clone and build llama.cpp was denied by the auto-mode classifier and not retried. Fuse, convert, quantize and import are documented from docs and source only. The learner should run it, or someone should, before the chapter is trusted.
- "mlx-lm's adapter layout (`lora_a`/`lora_b`, `adapters.safetensors`) differs from the PEFT layout llama.cpp's LoRA converter expects, so serving the adapter separately is hard" is the writer's reading of the source and is flagged as untested.
- `mlx_lm.fuse --export-gguf` supports only llama, mistral and mixtral model types. Re-confirm against the current `fuse.py`, since this decides the whole Qwen3 route.
- "The delta is cast to the weight dtype before it is added" and "a QLoRA base is re-quantized unless `--dequantize` is passed": re-confirm in `fuse.py` / `utils.py`.
- "Q4 may erase a small LoRA delta" is a hypothesis, marked as one. Keep it that way unless measured.
- Ollama's current docs no longer document `ADAPTER`, so the chapter cites the v0.5.7 `modelfile.md` tag (as 10.1 does). Check the tag link still works.
- The Qwen3 `think` template branch was read from the local `ollama show --modelfile qwen3:14b` output, not from a public source.

### 9.2 OpenRouter and LiteLLM (`book/part-09-model-landscape-cost/9.2-openrouter-litellm.md`)
- **The LiteLLM proxy was never started.** The permission classifier denied it (exposes a local service) and it was not retried. Config shapes and behaviour come from docs only. The chapter admits this in one place.
- The PyPI / `uv tool run` install route is flagged in the chapter as not checked against the docs.
- The opencode custom-provider snippet (`providers`, `package`, `settings.baseURL`) matches opencode's Providers page, but that page has no LiteLLM example, so the gateway snippet is an adaptation. Recheck the field names.
- LiteLLM's Ollama page has no thinking/reasoning section and its docs do not define the exact budget-enforcement mechanics. The chapter says both; confirm nothing later in the chapter assumes otherwise.
- Not opened by the writer: OpenRouter's logging page (`openrouter.ai/docs/guides/privacy/logging`, cited only because 9.1 already links it) and the models-list page. The chapter uses placeholders instead of real model IDs.

## Other chapters with flagged items

### 2.6 Tool calling
- Claude code snippets follow the docs and were **not run** (no paid calls).
- Ollama observations come from one local `qwen3:8b` run on Ollama 0.40.14: an `id` per tool call that the docs don't show, `done_reason: "stop"` even with tool calls, `tool_choice: "none"` ignored on `/v1`. Re-run on a newer Ollama before keeping them.
- Forced `tool_choice` (`any` / `tool`) is said to be rejected on Opus 5.5 and Sonnet 5.5. Check the current docs.
- The stub's link to `3.8-ts-agent-sdks` did not exist; it now points at `3.11-agent-sdks`.

### 2.7 Prompt caching
- The Anthropic docs page was fetched only up to character ~100,000 of 165,158. The pre-warming (`max_tokens: 0`) and "cache diagnostics" notes come from the first fetch's summary. Anchor slugs were derived from headings, not confirmed on the live page.
- The OpenAI page describes "GPT-5.6 and later" behaviour while Landscape lists GPT-6.x. The chapter quotes the docs as written; reconcile.
- The "Prompt caching is everything" blog link is cited as `claude.com/blog/...` and 308-redirects to `claude.dev`.
- The TypeScript request snippet was not run.

### 2.8 Embeddings in practice
- "Qwen3-Embedding ranked first on MTEB multilingual as of 2025-06-05" is taken from its Ollama page and may be stale. The chapter caveats it.
- Ollama's embedding page does not say whether `/api/embed` has an `input_type`-style parameter; the chapter says only that the shown requests have none.
- Node 26 docs name the SQLite class `Database`, with `DatabaseSync` as a deprecated alias. Confirm.
- The local measurements (`ERR_4021` 0.510 vs `ERR_4210` 0.416; the negation pair 0.761 vs 0.720; ~6 s per 100 chunks) are the writer's own, dated 2026-11-10, and not reproducible from the repo.

### 2.9 RAG fundamentals
- The "200,000 tokens, about 500 pages" rule and the Lost in the Middle effect are flagged in the text as dated.
- Anthropic's 35/49/67% figures are attributed to Anthropic's own setup. Re-read the contextual-retrieval article.
- The LangChain text-splitters page redirected to an unrelated page and is not cited; `RecursiveCharacterTextSplitter` is described through the Chroma report only.
- Two local experiments (chunking strategies; `qwen3:8b` with right, near-miss and no context) are dated own measurements on a tiny sample.

### 2.10 Better retrieval
- Quotes from the RRF PDF (extracted by hand), Hamel Husain's evals FAQ and Jason Liu's article came through fetch summaries. Confirm exact wording.
- The Hamel FAQ anchor and the Chip Huyen ch. 6 section names and page numbers (pp. 257–273) come from visible headings or the table of contents.
- The transformers.js reranker and Qwen3-Reranker were **not run**; the chapter flags both as untested. It also says Ollama's docs mention no rerank endpoint; confirm.
- The MRR table (vector 0.459, BM25 0.743, RRF 0.663, RRF + `qwen3:8b` rerank 0.828; 307 chunks, 12 questions) is a local measurement whose script was **not committed**. The chapter says the questions favour BM25. Either commit the script under `experiments/22-rag/` or soften the claim.

### 2.11 Agentic search vs. vector DB
- The local test (ripgrep + `read_file`, five questions, one run each: 1/5, 1/5, then 3/5 after rewording) is an anecdote and its script was not committed.
- The chapter links to `0.3-standards-and-orgs` because a glossary row ties progressive disclosure to it. The writer did not open 0.3 to confirm it covers skills.
- The Claude Code tools page says Grep and Glob are absent by default on macOS/Linux under some conditions. Re-read.
- The two Anthropic articles are cited by their `/research/` URLs (the `/engineering/` ones redirect there). The text states no dates; the fetched pages showed 2025-09-29 and 2025-06-13.
- The issue went straight to resolved without a `claimed` commit (process slip only).

### 3.1 Workflows vs. agents
- The OpenAI business page returns 403, so the chapter cites the PDF on `cdn.openai.com`; page numbers (pp. 4–6, 12–17) are PDF page numbers.
- Anthropic's "4× / 15× more tokens" figures link their source; re-confirm.
- OpenAI's PDF uses "workflow" differently from Anthropic; the chapter says so and follows Anthropic.

### 3.3 Tool design
- Check that the "Building effective agents" appendix quotes (ACI, poka-yoke, absolute filepaths) are not over-read.
- The Sonnet 3.5 / SWE-bench anecdote is paraphrased and flagged as the authors' own evaluation.
- The chapter says nothing about what the text editor tool returns on a missing or duplicate `old_str` match because the writer could not confirm it.
- The `search_files` example and the error / transcript tables are the writer's own and labelled as such. No local model was run.

### 3.4 Context engineering
- One quote ("Without proper guidance, an agent can waste context…") was rewritten after the last fetch and not re-checked. Nine other quotes from the Anthropic article were corrected by the writer.
- Context editing (`clear_tool_uses_20250919`, header `context-management-2025-06-27`) and the compaction APIs are betas; confirm names and status.
- The 62k-token growth table is made up (labelled). The compaction failure modes and the "50–70% trigger range" are the chapter's own judgement (labelled). Nothing was run locally.

### 3.10 Multi-agent patterns
- Statements about Cognition's post and the Claude Code `sub-agents` page rest on fetched summaries. Confirm the "Choose between subagents and main conversation" quote on `code.claude.com/docs/en/sub-agents`.
- Cognition's URL redirects to `cognition.com/blog/dont-build-multi-agents`; the post is dated 2025-06-12 with no update note.
- The 1,050k → 330k token example is labelled made-up arithmetic. Anthropic's 4× / 15× figures should be re-confirmed.

### 8.6 Streaming UI and auth
- Pinned versions `ai@7.0.168` and `@ai-sdk/react@4.0.172` were npm latest on 2026-11-10. AI SDK 7 changed the server helpers (`toUIMessageStream({ stream: result.stream })`, `isStepCount`); older tutorials differ.
- Only the server-side snippet was run (against local `qwen2.5:0.5b-instruct`). **Not run:** the client tool-card code, the Redis resume path and the MCP OAuth flow.
- The MCP registration priority order and the security-best-practices page are cited from the 2025-11-25 revision, while the latest on Landscape is 2026-07-28. The chapter flags this.
- `ai` is cited via the npm registry URL because npmjs.com returns 403 to curl.

### 9.1 Paid APIs
- Landscape is stale: Anthropic's pricing page now lists Claude Fable 5.2 and Mythos 5.2 while `book/landscape.md` still shows Fable 5.1. Update Landscape (with sources) first.
- DeepSeek's privacy policy returned 403; only the Open Platform terms are cited and they say nothing on training, retention or server location. No Kimi data-handling statement was found ("unknown, not safe" in the chapter).
- The DeepSeek and Kimi pricing pages don't say how reasoning tokens are billed; the chapter says to measure.
- Anthropic's extended-thinking page, part of its data-retention page and DeepSeek's R1 announcement were only skimmed.

### 9.3 Local vs. paid
- Experiments 5.5 and 9.1 have no results yet, so the chapter uses only experiment 00 numbers. Update once those exist.
- Apple's power page figures (idle 5 W, max 140 W) are for a 64 GB M4 Pro configuration. This Mac mini has 24 GB, so confirm the wording "the configuration it shows".
- "Paid is usually faster" and prompt-processing-speed claims are framed as hypotheses to measure, not sourced.
- Ollama cloud docs say it doesn't train on prompts but give no retention period; the chapter says so.
- The experiment-00 link uses the repo URL `hsavovski/ai-engineering`, copied from Landscape. Confirm it is right.

## Cross-cutting
- **Landscape refresh** (`book/landscape.md`): Fable 5.1 → 5.2 / Mythos 5.2, and the OpenAI "GPT-5.6" vs "GPT-6.x" wording.
- **Uncommitted scripts:** the 2.10 MRR script and the 2.11 ripgrep test live only in agent scratchpads. Commit them or soften the numbers.
- **Never executed:** the 10.4 llama.cpp pipeline and the 9.2 LiteLLM proxy. Both were denied by the permission classifier, so a human has to run them (or approve them) to verify the chapters.
- **map.md:** the spec's "resolve" step mentions appending a pointer to `.scratch/<effort>/map.md`. No map file exists, so no writer did.
- The remaining 28 chapters from earlier batches (0.x, 1.x, 2.1–2.5, 10.1–10.3) are not covered here; check `git log --grep "Fact-check chapter"` for which of those were checked.

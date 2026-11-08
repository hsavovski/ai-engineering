# 04 – Tokenizer: a tiny BPE vs. real tokenizers

## What I tried

How does byte-pair encoding actually build a vocabulary, and why does the same text cost a different number of tokens in English, Bulgarian, German and code, and on different model families?

Two scripts (to write: see the steps in [chapter 1.2](../../book/part-01-how-llms-work/1.2-tokenization.md#practice)):

- `bpe.ts`: a byte-level BPE trainer with `train`, `encode` and `decode`, written from scratch.
- `compare.ts`: counts tokens for the same samples with my BPE, OpenAI's `o200k_base` (via `js-tiktoken`) and the Qwen3 tokenizer (via `@huggingface/transformers`), and prints the pieces.

```bash
node experiments/04-tokenizer/bpe.ts        # train on a small text, print merges and compression
node experiments/04-tokenizer/compare.ts    # token counts and pieces per sample, per tokenizer
```

Free: everything runs locally. The optional Claude step uses the token counting endpoint, which the [docs](https://platform.claude.com/docs/en/build-with-claude/token-counting) say is free (rate-limited), so log it in `costs.md` as €0.

## What happened

<!-- Fill in after running. -->

### My BPE

<!-- Training text and size, number of merges, the first ~20 merges, compression ratio (bytes ÷ tokens). Did the toy corpus reproduce the chapter's merge table? -->

### Token counts

| Sample | Characters | UTF-8 bytes | My BPE | o200k_base | Qwen3 | Claude (optional) |
|---|---|---|---|---|---|---|
| English | | | | | | |
| Bulgarian | | | | | | |
| German | | | | | | |
| Code | | | | | | |
| Numbers | | | | | | |

### Pieces worth noting

<!-- Paste a few tokenizations that surprised you: numbers, Cyrillic, indentation, leading spaces, emoji. -->

## Why (what I learned)

<!-- Your notes: why does Bulgarian cost more? Why does your BPE compress its own training text well and other text badly? Why do o200k and Qwen split numbers differently? -->

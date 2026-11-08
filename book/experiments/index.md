<!-- Generated from experiments/*/README.md by `npm run experiments` (also runs before dev and build). Edit the README, not this file. -->

# Experiments

Hands-on runs, one folder each in `experiments/NN-name/`: the code plus a README with what I tried, what happened and why. Each page here is that README.

| Experiment | What I tried |
|---|---|
| [00 Speed check](/experiments/00-speed-check) | How fast do local Qwen models run on a Mac mini M4 Pro (24 GB), how much does thinking mode cost, and are the answers any good? |
| [01 Keys smoke test](/experiments/01-keys-smoke-test) | Do all three routes to a model work from code: local Ollama, OpenRouter and the Anthropic API? And what does one tiny request cost on each? |
| [02 Model comparison: issue 07 with Opus 5.5 vs. Sonnet 5.5](/experiments/02-model-comparison-issue-07) | For a writing-and-research task like a chapter, is the bigger model worth its extra cost and Pro usage, or is Sonnet good enough? |
| [03 Logprobs: watching next-token prediction](/experiments/03-logprobs) | What does the model's probability distribution look like at each step of a completion, and how fast are prefill and decode on my Mac? |
| [04 Tokenizer: a tiny BPE vs. real tokenizers](/experiments/04-tokenizer) | How does byte-pair encoding actually build a vocabulary, and why does the same text cost a different number of tokens in English, Bulgarian, German and code, and on different model families? |
| [05 Temperature: measuring output diversity](/experiments/05-temperature) | How much does temperature change what `qwen3:14b` says, and does min-p keep high temperatures coherent? |
| [06 Parallel tasks in Claude Code: terminals vs. a workflow](/experiments/06-parallel-tasks) | Can chapter tasks run in parallel without breaking each other, and what does each way of doing it cost in Pro usage, wall time and my attention? |

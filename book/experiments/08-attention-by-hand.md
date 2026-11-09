<!-- Generated from experiments/*/README.md by `npm run experiments` (also runs before dev and build). Edit the README, not this file. -->

# 08 – Attention by hand: one head, two heads, and the n²

## What I tried

Can I compute scaled dot-product attention with a causal mask myself, get the same numbers on paper as in code, and see the O(n²) cost in timings?

Two scripts (to write: see the steps in [chapter 1.4](/part-01-how-llms-work/1.4-attention#practice)), plain TypeScript, no libraries:

- `attention.ts`: `matmul`, `transpose`, `softmax`, single-head causal attention on the input below, assertions, then two heads with `W_O`.
- `scaling.ts`: times single-head attention on random inputs for n = 256 … 4096.

```bash
node experiments/08-attention-by-hand/attention.ts
node experiments/08-attention-by-hand/scaling.ts
```

Free: no model calls.

## Input

Four tokens with `d_model = 3`, and one head with `d_k = d_v = 2` (so scale by `1/√2`). Rows are tokens.

```
X (4 × 3)              W_Q (3 × 2)     W_K (3 × 2)     W_V (3 × 2)
t1  [ 1   0   1 ]      [ 1   0 ]       [ 0   1 ]       [ 1   0 ]
t2  [ 0   2   0 ]      [ 0   1 ]       [ 1   0 ]       [ 0   1 ]
t3  [ 1   1   0 ]      [ 1   1 ]       [ 1   1 ]       [ 1   1 ]
t4  [ 0   1   2 ]
```

Second head (step 7), and the output projection back to `d_model = 3`:

```
W_Q2 (3 × 2)    W_K2 (3 × 2)    W_V2 (3 × 2)     W_O (4 × 3): concat(head1, head2) → d_model
[ 0   1 ]       [ 1   1 ]       [ 0   1 ]        [ 1   0   0 ]
[ 1   1 ]       [ 0   1 ]       [ 1   0 ]        [ 0   1   0 ]
[ 1   0 ]       [ 1   0 ]       [ 1   1 ]        [ 0   0   1 ]
                                                 [ 1   1   1 ]
```

## What happened

<!-- Fill in after running. -->

### One head

<!-- Paste Q, K, V, the scaled scores, the attention pattern and the output. -->

### Hand calculation: row 3

<!-- Scores for t3 against t1..t3, scaled, exponentiated, normalized; then the weighted sum of values. Does it match the script to 3 decimals? -->

### Without the mask, without the scaling

<!-- Which rows changed? Which token looked at the future the most? How peaked did the rows get without √d_k? -->

### Two heads

<!-- Both patterns side by side. Do they attend differently? The final output after W_O. -->

### Scaling

| n | Time (ms) | Ratio to previous n |
|---|---|---|
| 256 | | |
| 512 | | |
| 1024 | | |
| 2048 | | |
| 4096 | | |

## Why (what I learned)

<!-- Your notes: what does the mask buy you at training time and at generation time? Why √d_k? Did the timings show ~4× per doubling, and if not, why not? -->

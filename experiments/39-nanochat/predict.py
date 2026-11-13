"""Predict the size and cost of a nanochat run BEFORE you start it (chapter 10.6, step 2).

You write the TODOs; run it with `python predict.py` (plain Python, no packages needed).
The point is to commit to numbers first, then compare them with what base_train.py prints.

Where the rules come from (read them in your clone, they may have changed):
  - width:          scripts/base_train.py, build_model_meta():  model_dim = depth * aspect_ratio,
                    rounded UP to a multiple of head_dim
  - "scaling params": scripts/base_train.py, get_scaling_params(): transformer matrices + lm_head
                    (NOT the embedding tables, NOT the value embeddings)
  - compute:        6 * N * D  (chapter 1.6 / 10.5), with N = scaling params, D = tokens trained
"""

# --- Settings copied from runs/runcpu.sh (check them against your clone's current file) ---
DEPTH = 6
ASPECT_RATIO = 64          # base_train.py default
HEAD_DIM = 64              # runcpu.sh passes --head-dim=64
VOCAB = 32_768             # tok_train.py default (2**15)
NUM_ITERATIONS = 5_000     # runcpu.sh
TOTAL_BATCH_TOKENS = 16_384  # runcpu.sh --total-batch-size

# Your measured throughput from chapter 10.5 (FLOP/s on this Mac). TODO: replace with your number.
MEASURED_FLOPS_PER_SEC = 2.6e12


def model_dim(depth: int, aspect_ratio: int, head_dim: int) -> int:
    """Width of the model: depth * aspect_ratio, rounded up to a multiple of head_dim."""
    # TODO: implement. Check it against the README's d24 example: width 1536 with head_dim 128.
    raise NotImplementedError


def transformer_matrix_params(depth: int, d: int) -> int:
    """Parameters in the attention and MLP matrices of all layers (no biases, no norm weights).

    Per layer: q, k, v and output projections (assume n_kv_head == n_head here) plus the two
    MLP matrices with a 4x hidden size. Count the entries of each matrix.
    """
    # TODO: implement, then compare with the "transformer_matrices" line base_train.py prints.
    raise NotImplementedError


def lm_head_params(vocab: int, d: int) -> int:
    """The output head: one vocab x d matrix."""
    # TODO: implement.
    raise NotImplementedError


def main() -> None:
    d = model_dim(DEPTH, ASPECT_RATIO, HEAD_DIM)
    n = transformer_matrix_params(DEPTH, d) + lm_head_params(VOCAB, d)
    tokens = NUM_ITERATIONS * TOTAL_BATCH_TOKENS
    flops = 6 * n * tokens
    seconds = flops / MEASURED_FLOPS_PER_SEC

    print(f"width {d}, scaling params {n:,}, tokens {tokens:,}")
    print(f"tokens per scaling param: {tokens / n:.1f}  (compare: --target-param-data-ratio default)")
    print(f"FLOPs {flops:.2e}, predicted time {seconds / 60:.0f} min at {MEASURED_FLOPS_PER_SEC:.1e} FLOP/s")

    # TODO: add the speedrun estimate. From the README: roughly how many GPU-hours is one run of
    # runs/speedrun.sh (nodes x hours)? Multiply by a price per GPU-hour you looked up TODAY
    # (write the date and the source in README.md; prices don't belong in the code).
    # TODO: print the ratio of the speedrun's FLOPs to yours. Get the speedrun's FLOPs from the
    # `total_training_flops` that base_train.py prints, or from d=24's parameter count and D.


if __name__ == "__main__":
    main()

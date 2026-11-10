"""Step 2 (done for you, read it all): batching, the training loop, evaluation.

Run:  uv run train.py            (after prepare.py, and once model.py works)

It writes out/ckpt.pt (the best weights by validation loss) and out/losses.json
(the loss curves for plot.py).
"""

import json
import time
from pathlib import Path

import numpy as np
import torch
import torch.nn.functional as F

from model import GPT, GPTConfig

# ---------------------------------------------------------------- settings
# Defaults are a small model that trains in a few minutes on an M4. Change one
# thing at a time and write down what happened (see the README).
batch_size = 64          # sequences per step
block_size = 256         # tokens per sequence (the context length)
max_steps = 3000
eval_every = 250         # steps between evaluations
eval_batches = 50        # batches averaged per evaluation (loss is noisy)
learning_rate = 3e-4     # try 1e-3 for a smaller model
seed = 1337

# ------------------------------------------------------------------ device
# MPS = Metal Performance Shaders, PyTorch's GPU backend for Apple Silicon.
# Unified memory means "moving to the GPU" does not copy across a PCIe bus.
device = "mps" if torch.backends.mps.is_available() else "cpu"
print("device:", device)
torch.manual_seed(seed)

# -------------------------------------------------------------------- data
HERE = Path(__file__).parent
DATA, OUT = HERE / "data", HERE / "out"
OUT.mkdir(exist_ok=True)
# np.memmap reads the file lazily from disk: fine for 1 MB, and it is the same
# trick used for datasets far bigger than RAM.
train_data = np.memmap(DATA / "train.bin", dtype=np.uint16, mode="r")
val_data = np.memmap(DATA / "val.bin", dtype=np.uint16, mode="r")
vocab_size = len(json.loads((DATA / "meta.json").read_text())["chars"])


def get_batch(split: str):
    """Return (x, y), both (batch_size, block_size) long tensors.

    x is a random window of the text; y is the SAME window shifted one token to
    the right. So y[b, t] is the token that follows x[b, t]: at every position
    the model is asked "what comes next?", which gives block_size training
    examples per row (this is why the causal mask matters, chapter 1.4).
    """
    data = train_data if split == "train" else val_data
    # random starting offsets; the -1 leaves room for the shifted target
    ix = np.random.randint(0, len(data) - block_size - 1, size=batch_size)
    x = np.stack([data[i : i + block_size] for i in ix]).astype(np.int64)
    y = np.stack([data[i + 1 : i + 1 + block_size] for i in ix]).astype(np.int64)
    return torch.from_numpy(x).to(device), torch.from_numpy(y).to(device)


# ------------------------------------------------------------------- model
cfg = GPTConfig(vocab_size=vocab_size, block_size=block_size)
model = GPT(cfg).to(device)
print(f"parameters: {model.count_parameters():,}")

# AdamW = Adam with decoupled weight decay: the default optimizer for LLMs.
optimizer = torch.optim.AdamW(model.parameters(), lr=learning_rate)


def compute_loss(x, y):
    logits = model(x)                       # (B, T, vocab)
    # cross_entropy wants (N, vocab) and (N,): flatten batch and time together.
    # This is exactly the next-token loss from chapter 1.6.
    return F.cross_entropy(logits.view(-1, logits.size(-1)), y.view(-1))


@torch.no_grad()                            # no gradients needed: saves memory
def estimate_loss():
    model.eval()                            # switches dropout off
    out = {}
    for split in ("train", "val"):
        losses = [compute_loss(*get_batch(split)).item() for _ in range(eval_batches)]
        out[split] = float(np.mean(losses))
    model.train()                           # dropout back on
    return out


# ----------------------------------------------------------- training loop
history = []          # one dict per evaluation, for plot.py
best_val = float("inf")
t0 = time.time()
model.train()
for step in range(max_steps + 1):
    if step % eval_every == 0:
        losses = estimate_loss()
        history.append({"step": step, **losses, "seconds": time.time() - t0})
        print(f"step {step:5d} | train {losses['train']:.4f} | val {losses['val']:.4f}"
              f" | {time.time() - t0:6.1f}s")
        if losses["val"] < best_val:        # keep the best checkpoint, not the last
            best_val = losses["val"]
            torch.save({"model": model.state_dict(), "cfg": cfg.__dict__}, OUT / "ckpt.pt")
        (OUT / "losses.json").write_text(json.dumps(history))
        if step == max_steps:
            break

    x, y = get_batch("train")
    loss = compute_loss(x, y)
    optimizer.zero_grad(set_to_none=True)   # 1. forget the previous step's gradients
    loss.backward()                         # 2. backprop: fill p.grad for every weight
    # 3. cap the gradient norm so one bad batch cannot blow up training
    torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
    optimizer.step()                        # 4. move every weight against its gradient

print(f"best val loss: {best_val:.4f}")

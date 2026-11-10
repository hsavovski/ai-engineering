"""Step 3 (YOURS): the model. This is the file you write.

train.py and sample.py only rely on this interface, so anything that honours it
works:

    model = GPT(GPTConfig(...))
    logits = model(idx)             # idx: (B, T) long -> logits: (B, T, vocab_size)
    model.count_parameters()        # int

Build it bottom-up and test each piece with a tiny input before the next one
(print shapes! most bugs here are shape bugs). Chapter 1.5 has the block diagram.
Parts you need, in order:

  1. CausalSelfAttention: Q, K, V projections, split into heads, scores
     Q @ K^T / sqrt(head_dim), causal mask, softmax, @ V, merge heads, output
     projection. (Chapter 1.4. You may call
     torch.nn.functional.scaled_dot_product_attention(q, k, v, is_causal=True)
     AFTER you have written the explicit version once and checked they agree.)
  2. MLP: Linear(d_model -> 4*d_model), GELU, Linear(4*d_model -> d_model).
  3. Block: x = x + attn(norm1(x)); x = x + mlp(norm2(x))   (pre-norm, chapter 1.5)
  4. GPT: token embedding + LEARNED position embedding, n_layer blocks, final
     norm, linear head to vocab_size.
"""

from dataclasses import dataclass

import torch
import torch.nn as nn
import torch.nn.functional as F  # noqa: F401  (you will need it)


@dataclass
class GPTConfig:
    vocab_size: int = 65     # set from data/meta.json by train.py
    block_size: int = 256    # context length: the longest sequence the model sees
    n_layer: int = 6
    n_head: int = 6
    d_model: int = 384       # must be divisible by n_head
    dropout: float = 0.2     # regularization; the corpus is small (see the chapter)


class GPT(nn.Module):
    def __init__(self, cfg: GPTConfig):
        super().__init__()
        self.cfg = cfg
        # TODO: nn.Embedding for tokens, nn.Embedding for positions,
        #       nn.ModuleList of blocks, final norm, output head.
        raise NotImplementedError

    def forward(self, idx: torch.Tensor) -> torch.Tensor:
        # idx: (B, T) integer token ids, T <= cfg.block_size
        # return logits of shape (B, T, vocab_size)
        # TODO: tok_emb + pos_emb -> blocks -> final norm -> head
        raise NotImplementedError

    def count_parameters(self) -> int:
        return sum(p.numel() for p in self.parameters())

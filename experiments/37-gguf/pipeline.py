"""Skeleton for experiment 37: Hugging Face safetensors -> GGUF -> Ollama.

Run with uv, one step at a time:

    uv run pipeline.py inspect
    uv run pipeline.py convert
    uv run pipeline.py quantize
    uv run pipeline.py import

Nothing here is finished on purpose: every TODO is yours. Read chapter 10.2 first.
Only the standard library is needed for this file. The llama.cpp converter has its
own requirements, installed into a separate environment inside the llama.cpp clone.
"""

import json
import struct
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent
MODEL_DIR = HERE / "models" / "Qwen3-1.7B"   # where `hf download` put the repo
LLAMA = HERE / "llama.cpp"                   # your clone of ggml-org/llama.cpp
BF16 = HERE / "qwen3-1.7b-bf16.gguf"
Q8 = HERE / "qwen3-1.7b-Q8_0.gguf"
Q4 = HERE / "qwen3-1.7b-Q4_K_M.gguf"


def run(cmd: list[str]) -> None:
    """Run a command, echo it, and stop on failure (so errors are not buried)."""
    print("$", " ".join(str(c) for c in cmd))
    subprocess.run(cmd, check=True)


def inspect() -> None:
    """Step 1: read a safetensors header by hand.

    File layout (chapter 10.2): 8 bytes = little-endian unsigned 64-bit header size N,
    then N bytes of UTF-8 JSON, then raw tensor bytes. The JSON maps tensor name ->
    {"dtype": ..., "shape": [...], "data_offsets": [begin, end]}, plus an optional
    "__metadata__" entry that is NOT a tensor.
    """
    shard = MODEL_DIR / "model-00001-of-00002.safetensors"
    with open(shard, "rb") as f:
        # TODO: read 8 bytes and unpack them with struct.unpack("<Q", ...)
        # TODO: read that many bytes and json.loads them
        pass
    # TODO: print five tensor names with dtype and shape
    # TODO: sum the parameters (product of each shape) over BOTH shards and compare
    #       with the 2,031,739,904 that the Hub reports. Do the shards together hold
    #       every tensor? (model.safetensors.index.json tells you.)


def convert() -> None:
    """Step 4: HF directory -> full-precision GGUF.

    The script lives at the root of the llama.cpp clone. Use the Python from the
    environment where you installed requirements/requirements-convert_hf_to_gguf.txt.
    Arguments you need: the model directory, --outfile, --outtype bf16.
    """
    # TODO: run(["python", LLAMA / "convert_hf_to_gguf.py", MODEL_DIR, ...])
    # TODO: print BF16.stat().st_size in GB and compare with your prediction
    pass


def quantize() -> None:
    """Step 5: BF16 GGUF -> Q8_0 and Q4_K_M with llama-quantize.

    Argument order is: input file, output file, type name.
    The binary is under LLAMA / "build" / "bin" after the cmake build.
    """
    # TODO: for each (output, type) in [(Q8, "Q8_0"), (Q4, "Q4_K_M")]: run llama-quantize
    # TODO: print sizes, and bits per weight = file bytes * 8 / 2_031_739_904
    pass


def ollama_import() -> None:
    """Step 6: write two Modelfiles and `ollama create` them.

    A Modelfile needs `FROM <path to .gguf>` and, here, `PARAMETER num_ctx 8192`
    so that the comparison is not run at Ollama's default context.
    """
    # TODO: write Modelfile.q8 and Modelfile.q4 next to this file
    # TODO: run(["ollama", "create", "qwen3-1.7b-q8-local", "-f", "Modelfile.q8"]) and the q4 one
    # TODO: run(["ollama", "show", "--modelfile", "<name>"]) and read the TEMPLATE
    pass


STEPS = {"inspect": inspect, "convert": convert, "quantize": quantize, "import": ollama_import}

if __name__ == "__main__":
    if len(sys.argv) != 2 or sys.argv[1] not in STEPS:
        sys.exit(f"usage: uv run pipeline.py [{'|'.join(STEPS)}]")
    STEPS[sys.argv[1]]()

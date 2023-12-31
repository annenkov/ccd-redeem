import json
import os
from pathlib import Path
from typing import List
from blabel import LabelWriter
from nacl.signing import SigningKey
from nacl.encoding import HexEncoder

def get_path(file:str):
    return (Path(__file__).parent).joinpath(file)

def base58encode(msg:bytes) -> bytes:
    ALPHABET = b'123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    m = int.from_bytes(msg,byteorder='big')
    output = b''
    while m:
        m, r = divmod(m, len(ALPHABET))
        output = ALPHABET[r:r+1] + output
    return output

def generate_labels(b58_seeds, amounts, template_file, style_file, target):
    target = get_path(target)
    template_file = get_path(template_file)
    style_file = get_path(style_file)
    label_writer = LabelWriter(template_file, items_per_page=10, default_stylesheets=(style_file,))
    records = [dict(seed=s[2:-1],amount=a//1_000_000,count=i%2) for i,(s,a) in enumerate(zip(b58_seeds,amounts))]
    label_writer.write_labels(records, target=target)

def generate_seeds(ccd_amounts: List[int]):
    n = len(ccd_amounts)
    # Good enough randomness for this demo
    seeds = [os.urandom(32) for _ in  range(n)]
    b58_seeds = [base58encode(s) for s in seeds]
    keys = [SigningKey(s) for s in seeds]
    sc_input = {"coins" : [[k.verify_key.encode(encoder=HexEncoder).decode(), f"{a}"] for k,a in zip(keys,ccd_amounts)]}
    generate_labels(b58_seeds, ccd_amounts, "style/coin_template.html","style/style.css","qr-coin-labels.pdf")
    with open(get_path('qr-coin-seeds.json'), 'w') as f:
        json.dump([f"{s}" for s in b58_seeds], f)    
    with open(get_path('qr-sc-input.json'), 'w') as f:
        json.dump(sc_input, f)    

generate_seeds([2_000_000_000 for _ in range(10)])
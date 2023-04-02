const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  mempool.push(transaction);

  return mempool;
}

function mine() {
  let block = {
    id: blocks.length,
  };
  const newArray = [...mempool];
  block.transactions = newArray.splice(0, 10);

  const toRemove = [...block.transactions];
  mempool.splice(0, toRemove.length);

  block.nonce = 0;

  while (true) {
    block.hash = SHA256(JSON.stringify(block));
    const num = BigInt(`0x${block.hash}`);
    if (num < TARGET_DIFFICULTY) {
      break;
    }
    block.nonce++;
  }

  blocks.push(block);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};

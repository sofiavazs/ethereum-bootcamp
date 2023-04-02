const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  mempool.push(transaction);
}

function mine() {
  const blocksSize = blocks.length;
  const newBlock = { id: blocksSize, nonce: 0 };

  const newArray = [...mempool];

  const transactions = newArray.filter((transaction, index) => {
    if (index < MAX_TRANSACTIONS) {
      mempool.shift();
      return transaction;
    }
  });

  newBlock.transactions = transactions;
  const block = BigInt(`0x${SHA256(JSON.stringify(newBlock))}`);

  while (block > TARGET_DIFFICULTY) {
    newBlock.nonce += 1;
  }

  const blockHash = SHA256(JSON.stringify(newBlock));

  newBlock.hash = blockHash;

  blocks.push(newBlock);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};

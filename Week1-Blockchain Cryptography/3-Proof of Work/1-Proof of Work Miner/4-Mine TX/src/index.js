const SHA256 = require("crypto-js/sha256");
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function mine() {
  const blocksSize = blocks.length;
  const newBlock = { id: blocksSize };

  const newArray = [...mempool];

  const transactions = newArray.filter((transaction, index) => {
    if (index < MAX_TRANSACTIONS) {
      mempool.shift();
      return transaction;
    }
  });

  newBlock.transactions = transactions;

  const blockHash = SHA256(JSON.stringify(newBlock));

  newBlock.hash = blockHash;

  blocks.push(newBlock);
}

function addTransaction(transaction) {
  mempool.push(transaction);
}

module.exports = {
  addTransaction,
  mine,
  blocks,
  mempool,
  MAX_TRANSACTIONS,
};

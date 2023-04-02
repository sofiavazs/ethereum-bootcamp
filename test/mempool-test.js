const { assert } = require("chai");
const {
  addTransaction,
  mempool,
} = require("../Week1-Blockchain Cryptography/3-Proof of Work/1-Proof of Work Miner/1-Mempool/src/index.js");

describe("addTransaction", () => {
  it("should add the transaction to the mempool", () => {
    const transaction = { to: "bob", sender: "alice" };
    addTransaction(transaction);
    assert.equal(mempool.length, 1);
    assert.equal(mempool[0], transaction);
  });
});

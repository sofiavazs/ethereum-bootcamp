const { assert } = require("chai");
const {
  mine,
  blocks,
} = require("../Week1-Blockchain Cryptography/3-Proof of Work/1-Proof of Work Miner/2-Mine Block/src/index");
const SHA256 = require("crypto-js/sha256");

describe("mine", () => {
  describe("first block", () => {
    let hash;
    before(() => {
      hash = mine();
    });
    it("should add to the blocks", () => {
      assert.equal(blocks.length, 1);
    });
    it("should store the expected id", () => {
      const lastBlock = blocks[blocks.length - 1];
      assert(lastBlock.id != null, "did not find an id property on the block");
      assert.equal(lastBlock.id, 0);
    });
  });
  describe("second block", () => {
    let hash;
    before(() => {
      hash = mine();
    });
    it("should add to the blocks", () => {
      assert.equal(blocks.length, 2);
    });
    it("should store the expected id", () => {
      const lastBlock = blocks[blocks.length - 1];
      assert(lastBlock.id != null, "did not find an id property on the block");
      assert.equal(lastBlock.id, 1);
    });
  });
});

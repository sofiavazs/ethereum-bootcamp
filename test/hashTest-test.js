const Block = require("../Week1-Blockchain Cryptography/4-Blockchain Network/1-Blocks and Hashes/src/block");
const assert = require("assert");

describe("Block", function () {
  const newBlock = new Block();

  it("should have a hash property", function () {
    assert(/^[0-9A-F]{64}$/i.test(newBlock.toHash()));
  });
});

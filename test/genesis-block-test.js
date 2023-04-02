const Blockchain = require("../Week1-Blockchain Cryptography/4-Blockchain Network/3-The Genesis Block/src/blockChain");
const Block = require("../Week1-Blockchain Cryptography/4-Blockchain Network/3-The Genesis Block/src/block");
const assert = require("assert");

describe("Blockchain", function () {
  it("should have a genesis block", function () {
    const blockchain = new Blockchain();
    const genesisBlock = blockchain.chain[0];
    assert(genesisBlock, "Could not find the genesis block!");
    assert(genesisBlock instanceof Block, "genesis block should be a block!");
  });
});

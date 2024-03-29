const Block = require("./Block");
const SHA256 = require("crypto-js/sha256");

class Blockchain {
  constructor() {
    const genesis = new Block();
    this.chain = [genesis];
  }
  addBlock(block) {
    this.chain = [...this.chain, block];
  }
}

module.exports = Blockchain;

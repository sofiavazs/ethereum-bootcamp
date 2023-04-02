const Block = require("./Block");
const SHA256 = require("crypto-js/sha256");

class Blockchain {
  constructor() {
    const genesis = new Block();
    this.chain = [genesis];
  }
  addBlock(block) {
    let chainIndex = this.chain.length - 1;
    const previousBlock = this.chain[chainIndex];
    block.previousHash = previousBlock.toHash();
    this.chain.push(block);
  }
}

module.exports = Blockchain;

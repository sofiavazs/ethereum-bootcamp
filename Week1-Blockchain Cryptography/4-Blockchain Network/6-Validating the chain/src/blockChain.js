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
  isValid() {
    let isChainValid = true;

    for (let i = 1; i < this.chain.length; i++) {
      const previousBlock = this.chain[i].previousHash.toString();
      const beforeBlock = this.chain[i - 1].toHash().toString();

      if (previousBlock !== beforeBlock) {
        isChainValid = false;
        break;
      }
    }
    return isChainValid;
  }
}

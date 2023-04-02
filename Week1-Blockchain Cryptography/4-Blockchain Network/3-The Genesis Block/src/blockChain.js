const Block = require("./block");

class Blockchain {
  constructor() {
    const genesis = new Block();
    this.chain = [genesis];
  }
}

module.exports = Blockchain;

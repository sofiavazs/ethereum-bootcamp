const hashMessage = require("../Week1-Blockchain Cryptography/Digital Signatures/1-Public Key Exercise/1-Hash message/src/hashMessage");
const { assert } = require("chai");
const { toHex } = require("ethereum-cryptography/utils");

const helloWorldHex =
  "47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";

describe("Hash Message", () => {
  it("should return the keccak256 hash of hello world", () => {
    const messageHash = hashMessage("hello world");

    assert.equal(toHex(messageHash), helloWorldHex);
  });
});

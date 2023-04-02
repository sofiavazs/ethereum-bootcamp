const signMessage = require("../Week1-Blockchain Cryptography/Digital Signatures/1-Public Key Exercise/2-Sign message/src/signMessage");
const recover = require("../Week1-Blockchain Cryptography/Digital Signatures/1-Public Key Exercise/3-Recover Key/src/recoverKey");
const secp = require("ethereum-cryptography/secp256k1");
const { assert } = require("chai");
const { toHex } = require("ethereum-cryptography/utils");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

describe("Recover Key", () => {
  it("should recover the public key from a signed message", async () => {
    const [sig, recoveryBit] = await signMessage("hello world");

    const publicKey = secp.getPublicKey(PRIVATE_KEY);

    const recovered = await recover("hello world", sig, recoveryBit);

    assert.equal(toHex(recovered), toHex(publicKey));
  });
});

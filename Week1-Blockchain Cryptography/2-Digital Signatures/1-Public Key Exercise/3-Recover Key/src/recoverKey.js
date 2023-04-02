const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("../../1-Hash message/src/hashMessage");

async function recoverKey(message, signature, recoveryBit) {
  const messageHash = hashMessage(message);

  return secp.recoverPublicKey(messageHash, signature, recoveryBit);
}

module.exports = recoverKey;

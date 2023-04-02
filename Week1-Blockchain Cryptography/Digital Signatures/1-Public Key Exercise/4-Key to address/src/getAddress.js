const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  // slice of the first byte of the Uint8Array publicKey
  const sliceKey = publicKey.slice(1);
  // keccak method on the rest of the key
  const hashKey = keccak256(sliceKey);
  const addressBytes = hashKey.slice(-20);

  return addressBytes;
}

module.exports = getAddress;

const { assert } = require("chai");
const findColor = require("../Week1-Blockchain Cryptography/1-The First Primitive/1-Find favourite colour/src/index");
const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

describe("findColor", () => {
  COLORS.forEach((color) => {
    it(`should work for ${color}`, () => {
      assert.equal(findColor(sha256(utf8ToBytes(color))), color);
    });
  });
});

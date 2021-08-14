const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {

  it ("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [2, 3, 4, 5, 6], for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });

  it ("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it ("returns ['Bean', 'Baby'] for ['Bita', 'Bean', 'Baby']", () => {
    assert.deepEqual(tail(["Bita", "Bean", "Baby"]), ["Bean", "Baby"]);
  });

});
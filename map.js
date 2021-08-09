const eqArrays = function(list1, list2) {
  if (list1.length !== list2.length)
    return false;
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i])
      return false;
  }
  return true;
};

const assertArraysEqual = function(list1, list2) {
  if (eqArrays(list1, list2)) {
    console.log(`Assertion Passed: ${list1} ✅ ${list2}`);
  } else {
    console.log(`Assertion Failed: ${list1} ❌ ${list2}`);
  }
};

const words = ["Bita", "is", "the", "baby", "of", "this", "house"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(map(words, word => word[0]), ['B', 'i', 't', 'b', 'o', 't', 'h']);
console.log(results1);
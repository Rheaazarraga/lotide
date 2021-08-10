const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length)
    return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i])
      return false;

  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} ✅ ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} ❌ ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) { // loop through each of the characters in the string
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// TEST CALLS

const sentence1 = "hello and goodbye";
const results1 = letterPositions(sentence1);

console.log(results1);
assertArraysEqual(results1.e, [1, 16]);
assertArraysEqual(results1.o, [4, 11, 12]);

const sentence2 = "programming is cool";
const results2 = letterPositions(sentence2);

console.log(results2);
assertArraysEqual(results2.m, [6, 7]);
assertArraysEqual(results2.o, [2, 16, 17]);
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
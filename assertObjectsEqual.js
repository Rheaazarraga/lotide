const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length)
    return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i])
      return false;
      
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} ✅ ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} ❌ ${inspect(expected)}`);
  }
};

//TEST CASES:

const object1 = {
  c: "1",
  d: ["2", 3],
  e: [4],
};

const object2 = {
  c: "1",
  d: ["2", 3],
  e: [4]
};

const objectA = {
  1: "1",
  2: ["a", 3],
  3: [4],
};

const objectB = {
  1: "1",
  2: ["b", 3],
  3: [4]
};

assertObjectsEqual(object1, object2);
assertObjectsEqual(objectA, objectB);

//MORE TEST CASES:

const myDog = {
  name: "Bita",
  breed: "pugalier",
  age: 6.5
};

const myDog2 = {
  name: "Bita",
  breed: "pugalier",
  age: 6,
  birthday: "January 18"
};

assertObjectsEqual(myDog, myDog2);
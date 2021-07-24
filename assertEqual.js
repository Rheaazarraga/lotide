const eqArrays = function(actual, expected) {

  //If array lengths do not match, false.
  if (actual.length !== expected.length) {
    return false;
  }

  // if array lengths are same, compare each element
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  // if false was not returned, the arrays must be identical
  return true;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ✅ ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} ❌ ${expected}`);
  }
};

assertEqual();
// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


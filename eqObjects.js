const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} ❌ ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} ✅ ${expected}`);
  }
};

const eqArrays = function(list1, list2) {
  if (list1.length !== list2.length) {
    return false; 
  }
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i])
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
    if (!object2.hasOwnProperty(key)) {
      return false;
    }

    const type1 = typeof object1[key];
    const type2 = typeof object2[key];

    if (type1 !== type2) {
      return false;
    }
    
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

//TEST CASES:

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

  // check lengths are the same
  // check if array of keys are the same
  //if arrays are not equal, return false
  //if they are equal, keep going / do nothing
  //loop through one of the objects arrays, and check if it exists in the other object
  // check if object contents are the same
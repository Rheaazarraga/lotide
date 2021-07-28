const eqArrays = function(list1, list2) {
  if (list1.length !== list2.length) 
  return false;
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i])
      return false;

  }
  return true;
}

const assertArraysEqual = function (list1, list2) {
  if (eqArrays(list1, list2)) {
    console.log(`Assertion Passed: ${list1} ✅ ${list2}`);
  } else {
    console.log(`Assertion Failed: ${list1} ❌ ${list2}`);
  }
}


assertArraysEqual([1,2], [1,2]);
assertArraysEqual([1,2], [1,2,3]);
assertArraysEqual([1,2,3], [2,2,3]);
assertArraysEqual([100, 200], [100, 200]);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ✅ ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} ❌ ${expected}`);
  }
};

//create a function that takes in a sentence as a string and then returns a count of each of the letters in that sentence.
const countLetters = function(sentence) {
  const result = {}; // create an empty object that stores each unique letter in the sentence and the times they were counted
  for (const letter of sentence) { //loop through each of the letters in the sentence
    console.log(letter);
    if (result[letter]) {
      result[letter] += 1; //if the current letter has already been added to the result, add one to the count
    } else {
      result[letter] = 1; //if the current letter has not been added, add the letter to the result object with the value of 1
    }
  }


  return result; //return the object
};

//TEST CASE:

const myName = countLetters("rhea azarraga");
console.log(myName);

const myNameis = {
  r : 3,
  h : 1,
  e : 1,
  a : 5,
  z : 1,
  g : 1

};

console.log(myNameis);
assertEqual(myNameis["r"], 3);
assertEqual(myNameis["h"], 1);
assertEqual(myNameis["e"], 1);
assertEqual(myNameis["a"], 5);
assertEqual(myNameis["z"], 1);
assertEqual(myNameis["g"], 1);
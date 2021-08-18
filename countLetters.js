//create a function that takes in a sentence as a string and then returns a count of each of the letters in that sentence.

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

//EXPORT
module.exports = countLetters;
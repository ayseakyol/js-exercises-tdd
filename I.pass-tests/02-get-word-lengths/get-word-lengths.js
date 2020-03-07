var getWordLengths = function(someWords) {
  let newArray = [];
  for (i = 0; i < someWords.length; i++) {
    newArray.push(someWords[i].length);
  }
  return newArray;
};

module.exports = getWordLengths;

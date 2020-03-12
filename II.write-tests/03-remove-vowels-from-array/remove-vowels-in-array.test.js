var removeVowelsForWords = require("./remove-vowels-in-array.js");
test("remove vowels from all words in array", function() {
  // Arrange
  var input = ["Irina", "Etza", "Daniel"];
  var expected = ["__i_a", "___a", "_a_ie_"];
  var output = removeVowelsForWords(input);

  // Act
  var unchanged = ["Irina", "Etza", "Daniel"];
  // Assert
  expect(output).toEqual(expected);
  expect(input).toEqual(unchanged);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

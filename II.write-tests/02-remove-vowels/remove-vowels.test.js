var removeVowels = require("./remove-vowels.js");
test("remove vowels from word", function() {
  // Arrange
  var words = "samuel";
  // Act
  var unchanged = "samuel";
  var expected = "_a_ue_";
  var output = removeVowels(words);

  // Assert
  expect(output).toEqual(expected);
  expect(words).toEqual(unchanged);
});

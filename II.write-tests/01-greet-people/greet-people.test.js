var greetPeople = require("./greet-people.js");

test("print list of names prefixed with Hello", function() {
  // Arrange
  var mentors = ["Irina", "Ashleigh", "Etza"];
  // Act
  var unchanged = ["Irina", "Ashleigh", "Etza"];
  var expected = "Hello IrinaAshleighEtza";
  var output = greetPeople(mentors);
  // Assert

  expect(output).toEqual(expected);
  expect(mentors).toEqual(unchanged);
});

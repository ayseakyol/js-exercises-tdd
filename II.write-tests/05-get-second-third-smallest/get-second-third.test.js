var getSecondThird = require("./get-second-third.js");

test("Get second and third", function() {
  var myArray = [90, 5, 11, 8, 6];
  var unchanged = [90, 5, 11, 8, 6];
  var expected = [6, 8];
  var output = getSecondThird(myArray);

  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

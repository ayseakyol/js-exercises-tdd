var getLargestNumber = require("./largest-number.js");

test("Get second and third", function() {
  var array = [3, 21, 88, 4, 36];
  var unchanged = [3, 21, 88, 4, 36];
  var expected = 88;
  var output = getLargestNumber(array);

  expect(output).toEqual(expected);
  expect(array).toEqual(unchanged);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

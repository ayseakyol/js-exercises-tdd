var getEven = require("./get-even-numbers.js");

test("Get even nmber", function() {
  var array = [22, 13, 73, 82, 4];
  var unchanged = [22, 13, 73, 82, 4];
  var expected = [22, 82, 4];
  var output = getEven(array);

  expect(output).toEqual(expected);
  expect(array).toEqual(unchanged);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

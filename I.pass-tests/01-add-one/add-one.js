module.exports = function(numbers) {
  let newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] + 1);
  }
  return newArray;
};

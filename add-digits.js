/*
https://leetcode.com/problems/add-digits/description/
*/

var addDigits = function (num) {
  if (num < 10) return num;
  const sum = (num % 10) + addDigits(Math.floor(num / 10));
  return addDigits(sum);
};

console.log(addDigits(38));

// O(1)
var addDigits = function (num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  else return num % 9;
};

var addDigits = function (num) {
  return 1 + ((num - 1) % 9);
};

/*
https://leetcode.com/problems/ugly-number/description/
*/

var isUgly = function (n) {
  if (n <= 0) return false;
  while (n % 2 === 0) {
    n = Math.floor(n / 2);
  }
  while (n % 3 === 0) {
    n = Math.floor(n / 3);
  }
  while (n % 5 === 0) {
    n = Math.floor(n / 5);
  }

  return n === 1 ? true : false;
};

console.log(isUgly(6));

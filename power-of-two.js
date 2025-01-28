/*
https://leetcode.com/problems/power-of-two/description/
*/

var isPowerOfTwo = function (n) {
  for (let i = 0; i < 31; i++) {
    let ans = Math.pow(2, i);
    if (ans === n) return true;
  }

  return false;
};

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(9));

var isPowerOfTwo = function (n) {
  while (n > 0) {
    if (n === 1) return true;
    if (n % 2) break;
    n /= 2;
  }
  return false;
};

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(9));

var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n <= 0) return false;
  return isPowerOfTwo(n / 2);
};
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(9));

var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) == 0 ? true : false;
};
// And operation between multiple of 2 (n) and (n-1) will always give 0 and other wise it will never be 0.
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(9));

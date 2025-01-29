/*
https://leetcode.com/problems/missing-number/description/
*/

var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) return i;
  }
};

console.log(
  missingNumber([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
);

var missingNumber = function (nums) {
  let max = nums.length;
  let ESum = Math.floor((max * (max + 1)) / 2);
  let ASum = nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
  return ESum - ASum;
};

console.log(
  missingNumber([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
);

var missingNumber = function (nums) {
  let xor = 0;
  const n = nums.length;

  for (let i = 0; i <= n; i++) {
    xor ^= i;
    if (i < n) xor ^= nums[i];
  }

  return xor;
};
console.log(
  missingNumber([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
);

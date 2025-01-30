/*
https://leetcode.com/problems/move-zeroes/description/
*/

var moveZeroes = function (nums) {
  let n = nums.length;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1]));

var moveZeroes = function (nums) {
  let n = 0;
  for (let num of nums) {
    if (num !== 0) {
      nums[n++] = num;
    }
  }
  while (n < nums.length) {
    nums[n++] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1]));

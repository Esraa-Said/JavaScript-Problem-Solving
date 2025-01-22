/*
https://leetcode.com/problems/majority-element/
*/

var majorityElement = function (nums) {
  nums.sort();
  let num = nums[0];
  let ans = 1,
    f = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (f > ans) {
        ans = f;
        num = nums[i - 1];
      }
      f = 1;
    } else {
      f++;
    }
  }
  if (f > ans) num = nums[nums.length - 1];
  return num;
};

console.log(majorityElement([3, 2, 3]));

// Another sol. : O(n)
var majorityElement = function (nums) {
  let maj = null;
  let count = 0;
  for (let num of nums) {
    if (count === 0) maj = num;
    count += maj === num ? 1 : -1;
  }

  return maj;
};

console.log(majorityElement([3, 2, 3]));

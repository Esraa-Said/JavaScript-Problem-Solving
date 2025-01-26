/*
https://leetcode.com/problems/summary-ranges/description/
*/

var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  let ans = [];
  let str = "";
  let ic = "->";
  str += `${nums[0]}`;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] != 1) {
      if (nums[i - 1] != str) str += `${ic}${nums[i - 1]}`;
      ans.push(str);
      str = `${nums[i]}`;
    } else {
      if (i + 1 === nums.length) {
        str += `${ic}${nums[i]}`;
      }
    }
  }

  ans.push(str);
  return ans;
};

console.log(summaryRanges([-2147483648, 0, 2, 3, 4, 6, 8, 9]));


// another sol.
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  let start = nums[0];
  let ans = [];
  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] - nums[i - 1] != 1) {
      if (start === nums[i - 1]) ans.push(`${start}`);
      else ans.push(`${start}->${nums[i - 1]}`);
      if (i < nums.length) start = nums[i];
    }
  }
  return ans;
};

console.log(summaryRanges([-2147483648, 0, 2, 3, 4, 6, 8, 9]));

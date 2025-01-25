/*
https://leetcode.com/problems/contains-duplicate/description/
*/

var containsDuplicate = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) return true;
    obj[nums[i]] = 1;
  }
  return false;
};

console.log(containsDuplicate([2,3,1]))
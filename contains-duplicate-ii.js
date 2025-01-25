/*
https://leetcode.com/problems/contains-duplicate-ii/description/
*/

var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = map.get(nums[i]);
    if (i - num + 1 <= k) {
      return true;
    } else {
      map.set(nums[i], i + 1);
    }
  }
  return false;
};

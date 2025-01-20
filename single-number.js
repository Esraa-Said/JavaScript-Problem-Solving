/*
https://leetcode.com/problems/single-number/description/
*/

var singleNumber = function (nums) {
  let num = 0;
  for (let i of nums) {
    num ^= i;
  }
  return num;
};

console.log(singleNumber([3, 2, 2, 4, 3]));

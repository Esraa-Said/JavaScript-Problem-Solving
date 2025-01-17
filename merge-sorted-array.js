/*
https://leetcode.com/problems/merge-sorted-array/description/
*/

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let x = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[x] = nums1[i];
      i--;
    } else {
      nums1[x] = nums2[j];
      j--;
    }
    x--;
  }
  while (j >= 0) {
    nums1[x] = nums2[j];
    j--;
    x--;
  }
  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

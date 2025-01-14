/*
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
*/

var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let x = haystack.substring(i, needle.length + i);
    if (x === needle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("leetcode", "code"));

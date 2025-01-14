/*
https://leetcode.com/problems/length-of-last-word/description/
*/

var lengthOfLastWord = function (s) {
  let f = false;
  let l = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      f = true;
      l++;
    } else if (s[i] === " " && f) return l;
  }
  return l;
};

console.log(lengthOfLastWord("a"))
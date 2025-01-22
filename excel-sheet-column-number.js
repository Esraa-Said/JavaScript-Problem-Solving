/*
https://leetcode.com/problems/excel-sheet-column-number/
*/

var titleToNumber = function (columnTitle) {
  let ans = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let char = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;

    ans = ans * 26 + char;
  }
  return ans;
};

console.log(titleToNumber("AB"));

/*
https://leetcode.com/problems/sqrtx/description/
*/

var mySqrt = function (x) {
  if (x == 0 || x == 1) return x;
  let l = 0,
    m = 0,
    r = x,
    ans = 0;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    let s = m * m;
    if (s > x) {
      r = m - 1;
    } else if (s < x) {
      l = m + 1;
      ans = m;
    } else return m;
  }
  return ans;
};

console.log(mySqrt(16))

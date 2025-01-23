/*
https://leetcode.com/problems/isomorphic-strings/description/
*/

var isIsomorphic = function (s, t) {
  let objS = {};
  let objT = {};
  for (let i = 0; i < s.length; i++) {
    let charS = objS[s[i]];
    if (!charS && !objT[t[i]]) {
      objS[s[i]] = t[i];
      objT[t[i]] = 1;
    } else if (charS !== t[i]) {
      return false;
    }
  }
  return true;
};
console.log(isIsomorphic("foo", "bar"));

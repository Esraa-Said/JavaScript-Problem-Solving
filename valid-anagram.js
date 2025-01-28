/*
https://leetcode.com/problems/valid-anagram/description/
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let x = map.get(s[i]) || 0;
    map.set(s[i], ++x);
  }

  for (let i = 0; i < t.length; i++) {
    let x = map.get(t[i]);
    if (x > 0) map.set(t[i], --x);
    else return false;
  }
  return true;
};

console.log(isAnagram("cat", "rat"));

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};
console.log(isAnagram("anagram", "nagaram"));

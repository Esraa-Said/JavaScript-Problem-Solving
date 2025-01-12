/*
https://leetcode.com/problems/roman-to-integer/description/
*/

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

var romanToInt = function (s) {
  let map = new Map();
  let sum = 0;
  let n = s.length;
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  for (let i = 0; i < n; i++) {
    if (map.get(s[i]) < map.get(s[i + 1])) {
      sum -= map.get(s[i]);
    } else {
      sum += map.get(s[i]);
    }
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));

/*
Time Complexity: 𝑂(𝑛)
Space Complexity: 𝑂(1)
*/
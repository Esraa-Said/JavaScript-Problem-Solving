/*
https://leetcode.com/problems/climbing-stairs/description/
*/

// Memoization
var climbStairs = function (n, memo = {}) {
  if (n === 2 || n === 1) return n;

  if (memo[n]) return memo[n];

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

console.log(climbStairs(5));


// Iterative
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev1 = 1,
    prev2 = 2;

  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
};

console.log(climbStairs(5));

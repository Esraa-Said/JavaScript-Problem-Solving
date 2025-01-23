/*
https://leetcode.com/problems/happy-number/description/
*/

var isHappy = function (n) {
  if (n == 1 || n == 7) return true;
  else if (n < 10) return false;
  else {
    let sum = 0;
    while (n > 0) {
      let temp = n % 10;
      n = Math.floor(n / 10);
      sum += temp * temp;
    }
    return isHappy(sum);
  }
};

console.log(isHappy(1));

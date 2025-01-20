/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
*/

var maxProfit = function (prices) {
  let min = prices[0],
    max = prices[0],
    ans = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > max) {
      max = prices[i];
      ans = Math.max(max - min, ans);
    } else if (prices[i] < min) {
      min = prices[i];
      max = prices[i];
    }
  }
  return ans;
};

console.log(maxProfit([3, 7, 1,2]))

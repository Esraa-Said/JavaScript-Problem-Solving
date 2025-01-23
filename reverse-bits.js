/*
https://leetcode.com/problems/reverse-bits/description/
*/

var reverseBits = function (n) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    // Extract the least significant bit of `n`
    let bit = n & 1;
    // Shift the result to the left and add the bit
    ans = (ans << 1) | bit;
    // Shift `n` to the right
    n = n >>> 1;
  }
  return ans >>> 0;  // Ensure the result is treated as an unsigned 32-bit integer
};

console.log(reverseBits(1));

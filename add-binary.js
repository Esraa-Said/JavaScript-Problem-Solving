/*
https://leetcode.com/problems/add-binary/description/
*/

var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1; 
  let carry = 0; 
  let result = []; 

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry; 

   
    if (i >= 0) {
      sum += a[i] === "1" ? 1 : 0;
      i--;
    }


    if (j >= 0) {
      sum += b[j] === "1" ? 1 : 0;
      j--;
    }

  
    result.push(sum % 2 === 1 ? "1" : "0");

    carry = Math.floor(sum / 2);
  }

  return result.reverse().join("");
};

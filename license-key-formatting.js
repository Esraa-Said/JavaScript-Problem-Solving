/*
https://leetcode.com/problems/license-key-formatting/description/
*/

var licenseKeyFormatting = function (s, k) {
  s = s.split("-").join("").toUpperCase();
  let numOfSegments = Math.floor(s.length / k);
  let reminder = s.length % k;
  let f = true;
  let ans = "";

  let t = 0;
  for (let i = 0; i < s.length; i++) {
    if (reminder && f) {
      ans += s[i];
      reminder--;

      if (reminder === 0) {
        f = false;
      }
      if (!f && numOfSegments) {
        ans += "-";
      }
    } else {
      ans += s[i];
      t++;
      if (t === k) {
        t = 0;
        numOfSegments--;
        if (numOfSegments > 0) ans += "-";
      }
    }
  }

  return ans;
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));

// Another Sol.
var licenseKeyFormatting = function (s, k) {
  s = s.split("-").join("").toUpperCase();

  let result = [];
  let length = s.length;

  let firstGroupLength = length % k || k;

  // Add the first group
  result.push(s.slice(0, firstGroupLength));

  // Add the remaining groups
  for (let i = firstGroupLength; i < length; i += k) {
    result.push(s.slice(i, i + k));
  }

  return result.join("-");
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));


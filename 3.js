/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLen = 0;
  let keys = [];
  for (let i = 0, iLen = s.length; i < iLen; ++i) {
    let index = keys.indexOf(s[i]);
    keys.push(s[i]);
    keys = keys.slice(index + 1);
    maxLen = maxLen > keys.length ? maxLen : keys.length;
  }
  return maxLen;
};

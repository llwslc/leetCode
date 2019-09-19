/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = '';

  for (let i = 0, iLen = s.length; i < iLen; ++i) {
    let chars = [s[i]];
    for (let j = i + 1, jLen = s.length; j < jLen; ++j) {
      if (s[i - (j - i)] == s[j]) {
        chars.unshift(s[i - (j - i)]);
        chars.push(s[j]);
      } else {
        break;
      }
    }
    if (longest.length < chars.length) {
      longest = chars.join('');
    }
    chars = [s[i]];

    if (s[i] == s[i + 1]) {
      chars.push(s[i + 1]);
      for (let j = i + 2, jLen = s.length; j < jLen; ++j) {
        if (s[i - (j - i - 1)] == s[j]) {
          chars.unshift(s[i - (j - i - 1)]);
          chars.push(s[j]);
        } else {
          break;
        }
      }
      if (longest.length < chars.length) {
        longest = chars.join('');
      }
    }
  }

  return longest;
};

// console.log(longestPalindrome('ababad'));
// console.log(longestPalindrome('ccc'));
// console.log(longestPalindrome('aaaa'));

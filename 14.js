/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = '';
  if (strs.length == 0) return result;

  let firstStr = strs.shift();
  for (let i = 0; i < firstStr.length; i++) {
    const prefix = firstStr[i];
    if (strs.every(_ => _[i] == prefix)) {
      result += prefix;
    } else {
      break;
    }
  }

  return result;
};

console.log(longestCommonPrefix(['aca', 'cba']) == '');
console.log(longestCommonPrefix(['flower', 'flow', 'flight']) == 'fl');
console.log(longestCommonPrefix(['dog', 'racecar', 'car']) == '');

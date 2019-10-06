/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let result = [];
  if (digits.length == 0) return [];
  let letterArr = [[], [], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];

  result = letterArr[digits[0]];

  for (let i = 1; i < digits.length; i++) {
    const digit = parseInt(digits[i]);

    let letters = letterArr[digit];
    let res = [];
    for (let i = 0; i < result.length; i++) {
      const lastRes = result[i];
      for (let j = 0; j < letters.length; j++) {
        const letter = letters[j];
        res.push(lastRes + letter);
      }
    }
    result = res;
  }
  return result;
};

// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations('23'));

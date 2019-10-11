/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];
  let resultObj = {};
  if (n == 0) return [];
  if (n == 1) return ['()'];

  let left = '(';
  let right = ')';

  let base = `)${new Array(n - 2).fill('()').join('')}(`;
  result.push(`(${base})`);

  let flip = (str, start) => {
    for (let i = start; i < str.length; i = i + 2) {
      const rStr = str[i];
      if (rStr == right) {
        let rRes = str.substr(0, i) + left + str.substr(i + 1);
        for (let j = i + 1; j < str.length; j = j + 2) {
          const lStr = str[j];
          if (lStr == left) {
            let lRes = rRes.substr(0, j) + right + rRes.substr(j + 1);
            if (!resultObj[lRes]) {
              resultObj[lRes] = true;
              result.push(`(${lRes})`);
              // console.log(str, rRes, lRes, i, j, start);
              flip(lRes, i + 2);
            }
          }
        }
      }
    }
  };

  flip(base, 0);

  return result;
};

// console.log(generateParenthesis(4));
// console.log(generateParenthesis(3));
// console.log(generateParenthesis(2));

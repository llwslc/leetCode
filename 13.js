/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let res = roman[s.substr(i, 2)];
    if (res) {
      i++;
    } else {
      res = roman[s[i]];
    }
    result += res;
  }

  return result;
};

console.log(romanToInt('III') == 3);
console.log(romanToInt('IV') == 4);
console.log(romanToInt('VI') == 6);
console.log(romanToInt('IX') == 9);
console.log(romanToInt('LVIII') == 58);
console.log(romanToInt('MCMXCIV') == 1994);

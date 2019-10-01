/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let roman = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' };
  roman = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];
  let result = '';

  for (let i = 0; i < 4; i++) {
    let digit = Math.floor(num / Math.pow(10, i)) % 10;
    if (digit < 0) break;
    switch (digit) {
      case 0:
      case 1:
      case 2:
      case 3:
        result =
          Array(digit)
            .fill(roman[i][0])
            .join('') + result;
        break;
      case 4:
        result = roman[i][0] + roman[i][1] + result;
        break;
      case 5:
        result = roman[i][1] + result;
        break;
      case 6:
      case 7:
      case 8:
        result =
          roman[i][1] +
          Array(digit - 5)
            .fill(roman[i][0])
            .join('') +
          result;
        break;
      case 9:
        result = roman[i][0] + roman[i + 1][0] + result;
        break;
    }
  }

  return result;
};

console.log(intToRoman(3) == 'III');
console.log(intToRoman(4) == 'IV');
console.log(intToRoman(9) == 'IX');
console.log(intToRoman(58) == 'LVIII');
console.log(intToRoman(1994) == 'MCMXCIV');
console.log(intToRoman(10));

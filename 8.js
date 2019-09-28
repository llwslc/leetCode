/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '0', '-', ' ', '+'];
  if (nums.indexOf(str[0]) == -1) return 0;
  let numStr = '';
  let negativeSign = 1;
  for (let i = 0, iLen = str.length; i < iLen; ++i) {
    if (nums.indexOf(str[i]) == -1) {
      break;
    } else {
      if (str[i] == ' ') {
        if (numStr.length) {
          break;
        } else {
          continue;
        }
      }
      if (str[i] == '+') {
        if (nums.indexOf(str[i + 1]) > 9) {
          break;
        } else {
          if (numStr.length) {
            break;
          } else {
            continue;
          }
        }
      }
      if (str[i] == '-') {
        if (nums.indexOf(str[i + 1]) > 9) {
          break;
        } else {
          if (numStr.length) {
            break;
          } else {
            negativeSign = -1;
            continue;
          }
        }
      }
      numStr += str[i];
    }
  }
  let result = 0;
  let digit = 0;
  for (let i = numStr.length - 1; i > -1; i--) {
    result += numStr[i] * Math.pow(10, digit++);
  }
  result = negativeSign * result;

  let minInt = 1 << 31;
  let maxInt = ~minInt;

  if (result > maxInt) return maxInt;
  if (result < minInt) return minInt;

  return result;
};

// console.log(myAtoi('42'), parseInt('42'));
// console.log(myAtoi('   -42'), parseInt('   -42'));
// console.log(myAtoi('4193 with words'), parseInt('4193 with words'));
// console.log(myAtoi('words and 987'), parseInt('words and 987'));
// console.log(myAtoi('-91283472332'), parseInt('-91283472332'));
// console.log(myAtoi('+1') == 1, parseInt('+1'));
// console.log(myAtoi('+-1') == 0, parseInt('+-1'));
// console.log(myAtoi('-+1') == 0, parseInt('-+1'));
// console.log(myAtoi('   +0 123') == 0, parseInt('   +0 123'));
// console.log(myAtoi('0-1') == 0, parseInt('0-1'));

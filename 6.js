/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let arr = [];

  let rowIndex = 0;
  let rowInc = true;
  let maxRowIndex = numRows - 1;
  for (let i = 0, iLen = s.length; i < iLen; ++i) {
    if (!arr[rowIndex]) {
      arr[rowIndex] = s[i];
    } else {
      arr[rowIndex] += s[i];
    }
    if (rowInc) {
      rowIndex++;
      if (rowIndex == maxRowIndex) {
        rowInc = false;
      }
    } else {
      rowIndex--;
      if (rowIndex == 0) {
        rowInc = true;
      }
    }
  }

  let zigzag = '';
  arr.forEach(_ => (zigzag += _));

  return zigzag;
};

console.log(convert('PAYPALISHIRING', 3) == 'PAHNAPLSIIGYIR');
// P   A   H   N
// A P L S I I G
// Y   I   R
console.log(convert('PAYPALISHIRING', 4) == 'PINALSIGYAHRPI');
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

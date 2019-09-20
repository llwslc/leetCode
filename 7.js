/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let minInt = 1 << 31;
  let maxInt = ~minInt;
  if (x > maxInt || x < minInt) return 0;
  let digitArr = (x + '').split('');
  let result = parseInt(digitArr.reverse().join('')) * (x > 0 ? 1 : -1);
  if (result > maxInt || result < minInt) return 0;
  return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));

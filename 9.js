/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let num = x;
  let result = 0;
  while (num) {
    result = result * 10 + (num % 10);
    num = parseInt(num / 10);

    if (result == x) return true;
  }

  return false;
};

console.log(isPalindrome(10));
console.log(isPalindrome(0));
console.log(isPalindrome(123));
console.log(isPalindrome(121));

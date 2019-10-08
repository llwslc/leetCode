/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let queue = [];
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    let q = queue[queue.length - 1];
    switch (el) {
      case ')':
        if (q == '(') queue.pop();
        else queue.push(el);
        break;
      case ']':
        if (q == '[') queue.pop();
        else queue.push(el);
        break;
      case '}':
        if (q == '{') queue.pop();
        else queue.push(el);
        break;
      default:
        queue.push(el);
        break;
    }
  }

  return queue.length ? false : true;
};

console.log(isValid('()') == true);
console.log(isValid('()[]{}') == true);
console.log(isValid('(]') == false);
console.log(isValid('([)]') == false);
console.log(isValid('{[]}') == true);

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let result = -1;
  if (needle.length == 0) return 0;
  let len = needle.length;

  let getNext = str => {
    let res = [-1];

    let start = -1;
    let end = 0;
    while (end < str.length) {
      if (start == -1 || str[start] == str[end]) {
        res[++end] = ++start;
      } else {
        start = res[start];
      }
    }

    return res;
  };

  let next = getNext(needle);

  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    // console.log(i, j, haystack[i], needle[j]);
    if (j == -1 || haystack[i] == needle[j]) {
      j++;
      i++;
    } else {
      j = next[j];
    }
    if (j == len) {
      return i - len;
    }
  }

  return result;
};

let haystack = 'hello';
let needle = 'll';
console.log(strStr(haystack, needle) == 2);

haystack = 'aaaaa';
needle = 'bba';
console.log(strStr(haystack, needle) == -1);

haystack = 'bbcabcdababcdabcdabde';
needle = 'abcdabd';
console.log(strStr(haystack, needle) == 13);

haystack = 'mississippi';
needle = 'issip';
console.log(strStr(haystack, needle) == 4);

haystack = 'mississippi';
needle = 'issipi';
console.log(strStr(haystack, needle) == -1);

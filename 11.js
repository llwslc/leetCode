/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let len = height.length - 1;
  let i = 0;
  let resArea = 0;
  while (i <= len) {
    let area = 0;
    if (height[i] < height[len]) {
      area = height[i] * (len - i);
      i++;
    } else {
      area = height[len] * (len - i);
      len--;
    }
    resArea = area > resArea ? area : resArea;
  }
  return resArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49);

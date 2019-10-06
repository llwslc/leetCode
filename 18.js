/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;

  for (let i = 0; i < nums.length; i++) {
    const ni = nums[i];
    if (ni == nums[i - 1]) continue;
    if (ni > target && ni > 0) break;
    let mTarget = target - ni;
    for (let j = i + 1; j < nums.length; j++) {
      let nj = nums[j];
      if (nj == nums[j - 1] && j - i > 1) continue;
      if (nj > mTarget && nj > 0) break;
      let k = j + 1;
      let l = len - 1;
      while (k < l) {
        let nk = nums[k];
        let nl = nums[l];
        let sum = nj + nk + nl;
        // console.log(i, j, k, l, ni, nj, nk, nl, sum, mTarget, nums);
        if (sum == mTarget) {
          result.push([ni, nj, nk, nl]);
          while (k < l && nums[k] == nums[++k]);
          while (k < l && nums[l] == nums[--l]);
        } else if (sum > mTarget) {
          l--;
        } else {
          k++;
        }
      }
    }
  }

  return result;
};

// [[-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2]];
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// console.log(fourSum([0, 0, 0, 0, 0], 0));

// console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));

console.log(fourSum([4, -3, -8, 5, 2, 10, 6, 3, -4, -4, 4, 3, 0, -10, 0, -6, -5, -3], -19));

// [[-3, -2, 2, 3], [-3, -1, 1, 3], [-3, 0, 0, 3], [-3, 0, 1, 2], [-2, -1, 0, 3], [-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]];
// console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));

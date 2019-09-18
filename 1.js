/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0, iLen = nums.length; i < iLen; ++i) {
    for (let j = i + 1, jLen = nums.length; j < jLen; ++j) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let len = nums1.length + nums2.length;
  let nums = [...nums1, ...nums2].sort((a, b) => a - b);
  if (len % 2) {
    return nums[(len + 1) / 2 - 1];
  } else {
    return (nums[len / 2 - 1] + nums[len / 2]) / 2;
  }
};

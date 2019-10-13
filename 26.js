/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num != nums[i + 1]) {
      nums[j] = num;
      j++;
    }
  }
  return j;
};

let nums = [1, 1, 2];
console.log(removeDuplicates(nums), nums);
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums), nums);

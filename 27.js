/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    let num = nums[j];
    if (nums[j] !== val) {
      nums[i] = num;
      i++;
    }
  }

  return i;
};

let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val), nums);

nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;
console.log(removeElement(nums, val), nums);

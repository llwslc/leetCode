/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let len = nums.length;
  nums = nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];

  let distance = Math.abs(result - target);

  for (let i = 0; i < len; i++) {
    const ni = nums[i];
    if (ni == nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      let nj = nums[j];
      let nk = nums[k];
      let sum = ni + nj + nk;
      if (Math.abs(sum - target) <= distance) {
        result = sum;
        distance = Math.abs(sum - target);
      }
      if (sum > target) {
        k--;
      } else if (sum < target) {
        j++;
      } else {
        return target;
      }
    }
  }

  return result;
};

console.log(threeSumClosest([0, 1, 1, 1], 100) == 3);
console.log(threeSumClosest([1, 1, 1, 0], -100) == 2);
console.log(threeSumClosest([1, 1, -1, -1, 3], -1) == -1);
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82) == 82);

console.log(threeSumClosest([1, 1, 1, 1], 0) == 3);
console.log(threeSumClosest([0, 0, 0], 0) == 0);
console.log(threeSumClosest([-1, 2, 1, -4], 1) == 2);

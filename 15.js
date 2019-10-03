/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  let len = nums.length;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    const ni = nums[i];
    if (ni > 0) break;
    if (ni == 0 && nums[i + 1] == 0 && nums[i + 2] == 0) {
      result.push([0, 0, 0]);
      break;
    }
    if (ni == nums[i - 1]) {
      continue;
    }
    let lastK = len - 1;
    for (let j = i + 1; j < len; j++) {
      const nj = nums[j];
      if (ni == nums[j + 1]) continue;

      let last = result[result.length - 1];
      if (last && last[0] == ni && last[1] == nj) continue;

      for (let k = lastK; k > j; k--) {
        const nk = nums[k];

        let last = result[result.length - 1];
        if (last && last[0] == ni && last[1] == nj && last[2] == nk) continue;

        const sum = ni + nj + nk;
        if (sum < 0) {
          lastK = k;
          break;
        }
        if (sum == 0) {
          // console.log(ni, nj, nk, i, j, k, nums);
          result.push([ni, nj, nk]);
        }
        lastK = k;
      }
    }
  }

  return result;
};

// console.log(threeSum([1, 1, -2]));
// console.log(threeSum([-2, 0, 0, 2, 2]));
// console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));

// [[-2,0,2],[-2,1,1]]
// console.log(threeSum([-2, 0, 1, 1, 2]));

// [[-1, 0, 1], [-1, -1, 2], [0, 0, 0]]
// console.log(threeSum([-1, 0, 0, 0, 1, 2, -1, -4]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let end = nums.length;
  let start = 0;

  let indexOf = (start, end) => {
    let midIndex = Math.floor((end + start) / 2);
    let mNum = nums[midIndex];
    let sNum = nums[start];
    let eNum = nums[end];
    // console.log(`start: ${start} end: ${end} mNum: ${mNum} sNum: ${mNum} eNum: ${eNum} target: ${target} `);
    if (mNum == target) return midIndex;
    if (start >= end) return -1;
    if (sNum <= mNum) {
      // 左侧升序
      if (sNum <= target && mNum >= target) {
        return indexOf(start, midIndex - 1);
      } else {
        return indexOf(midIndex + 1, end);
      }
    } else {
      // 右侧升序
      if (eNum >= target && mNum <= target) {
        return indexOf(midIndex + 1, end);
      } else {
        return indexOf(start, midIndex - 1);
      }
    }
  };

  return indexOf(start, end - 1);
};

let nums = [];
let target = 0;

nums = [4, 5, 6, 7, 0, 1, 2];
target = 0;
console.log(search(nums, target) == 4);

nums = [4, 5, 6, 7, 0, 1, 2];
target = 3;
console.log(search(nums, target) == -1);

nums = [];
target = 3;
console.log(search(nums, target) == -1);

nums = [3, 1];
target = 1;
console.log(search(nums, target) == 1);

nums = [5, 1, 3];
target = 5;
console.log(search(nums, target) == 0);

nums = [5, 1, 3];
target = 3;
console.log(search(nums, target) == 2);

nums = [4, 5, 6, 7, 8, 1, 2, 3];
target = 8;
console.log(search(nums, target) == 4);

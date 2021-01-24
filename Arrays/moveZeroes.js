// https://leetcode.com/problems/move-zeroes/description/
// Given an array nums,
// write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// [0,1,0,3,12] = [1,3,12,0,0]
// [0,0,1] = [1,0,0]

let numbers = [0, 0, 1];

//O(n) - bad
const moveZeroes = (nums) => {
  let hasRighsideZero = false;
  let shouldContinue = true;
  let i = 0;

  while (shouldContinue) {
    if (nums[i] == 0 && nums[i + 1] !== 0 && i < nums.length - 1) {
      let temp = nums[i + 1];
      nums[i + 1] = 0;
      nums[i] = temp;
      hasRighsideZero = true;
    }
    if (i == nums.length - 1) {
      i = 0;
      if (!hasRighsideZero) {
        shouldContinue = false;
      }
      hasRighsideZero = false;
    } else {
      i++;
    }
  }
  return nums;
};

//O(n) - a bit better
const moveZeroes2 = (nums) => {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

const moveZeroes3 = (nums) => {
  for (let lastNonZeroFoundAt = 0, i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[i];
      nums[i] = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt] = temp;
      lastNonZeroFoundAt++;
    }
  }
  return nums;
};

// console.warn(`O(n) - bad try ${moveZeroes(numbers)}`);
// console.warn(`O(n) - ${moveZeroes2(numbers)}`);
console.warn(`O(n) - ${moveZeroes3(numbers)}`);

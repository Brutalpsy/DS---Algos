// https://leetcode.com/problems/maximum-subarray/
// [-2,1,-3,4,-1,2,1,-5,4] = 6
// [4,-1,2,1] = 6
// [5, 4, -1, 7, 8] = 23
// [1,3] = 3
// [-1] = -1

const nums = [5, 4, -1, 7, 8];

//O(n^3)
const maximumSubArray = (nums) => {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxSum) {
      maxSum = nums[i];
    }

    for (let j = i + 1; j < nums.length; j++) {
      let tempsum = nums[j - 1];

      for (let z = j; z < nums.length; z++) {
        tempsum += nums[z];
        if (tempsum > maxSum) {
          maxSum = tempsum;
        }
      }
    }
  }
  return maxSum;
};

// O (n^2)
const maximumSubArray2 = (nums) => {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxSum) {
      maxSum = nums[i];
    }
    let tempsum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      tempsum += nums[j];
      if (tempsum > maxSum) {
        maxSum = tempsum;
      }
    }
  }
  return maxSum;
};

// console.error(`O(n^3) ${maximumSubArray(nums)}`);
console.log(`O(n^2) ${maximumSubArray2(nums)}`);

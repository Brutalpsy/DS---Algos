//https://leetcode.com/problems/trapping-rain-water/
let nums = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

// brute force solution
// O(n^2) time
// O(1) space

var trap = function (height) {
  let totalWater = 0;
  for (let p = 0; p < height.length; p++) {
    let pLeft = p;
    let pRight = p;
    let leftMax = 0;
    let rightMax = 0;

    while (pLeft >= 0) {
      leftMax = Math.max(leftMax, height[pLeft]);
      pLeft--;
    }
    while (pRight < height.length) {
      rightMax = Math.max(rightMax, height[pRight]);
      pRight++;
    }

    let currentWater = Math.min(leftMax, rightMax) - height[p];
    if (currentWater > 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

// optimal solution
// O(n) time
// O(1) space

var trap2 = function (height) {
  let totalWater = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] > maxLeft) {
        maxLeft = height[left];
      } else {
        let currentWater = maxLeft - height[left];
        totalWater += currentWater;
      }
      left++;
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else {
        let currentWater = maxRight - height[right];
        totalWater += currentWater;
      }
      right--;
    }
  }

  return totalWater;
};

console.log(trap(nums));
console.log(trap2(nums));

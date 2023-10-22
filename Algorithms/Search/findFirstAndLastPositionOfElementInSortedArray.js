//leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Examples
// ---------------------------------------------------------
// Input: nums = [5,7,7,8,8,8,8,10], target = 8
// Output: [3,6]

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// ---------------------------------------------------------

// solution #1
// Binary Search and Bidirectional Scan
// bad soluton
// Time complexity : O(n) at worst case (linear search)-> [4,4,4,4,4,4,4,4,4,4,4,4,4,4]
// Space complexity : O(1)
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      let start = mid;
      let end = mid;
      while (nums[start - 1] === nums[mid]) {
        start--;
      }

      while (nums[end + 1] === nums[mid]) {
        end++;
      }
      return [start, end];
    }

    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];
};

// Solution #2
// with two binary searches - reusable one function
// Time Complexity: O(logN) -> split every time by half
// Space Complexity: O(1)
var searchRangeWithTwoBinarySearches = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let searchIndex = function (nums, left, right, target, isFirstRun) {
    let index = -1;
    while (left <= right) {
      var mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        if (isFirstRun && nums[mid - 1] == target) {
          right = mid - 1;
        } else if (!isFirstRun && nums[mid + 1] == target) {
          left = mid + 1;
        } else {
          return mid;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return index;
  };

  var indexLeft = searchIndex(nums, left, right, target, true);

  // if it havent find any number and jumped out of a while loop, it means that i didn't find given target
  // so we can return immediately not found result so in this case [-1, -1]
  if (indexLeft === -1) {
    return [-1, -1];
  }

  var indexRight = searchIndex(nums, indexLeft, right, target, false);

  return [indexLeft, indexRight];
};

// Solution #3
// easier to understand solution
// Time Complexity: O(logN) -> split every time by half
// Space Complexity: O(1)
var searchRangeEasierToUnderstand = function (nums, target) {
  var indexLeft = searchLeft(nums, target);
  // if it havent find any number and jumped out of a while loop, it means that i didn't find given target
  // so we can return immediately not found result so in this case [-1, -1]
  if (indexLeft === -1) {
    return [-1, -1];
  }
  var indexRight = searchRight(nums, target);
  return [indexLeft, indexRight];
};

function searchLeft(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var leftMostIndex = -1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      leftMostIndex = mid;
      right = mid - 1;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return leftMostIndex;
}

function searchRight(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var rightMostIndex = -1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      rightMostIndex = mid;
      left = mid + 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return rightMostIndex;
}

// Solution #4
// easiest to understand - copied from internet
// Time Complexity: O(logN) -> split every time by half
// Space Complexity: O(1)

const binarySearch = (nums, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = nums[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const searchRangeEasiestToUnderstand = function (nums, target) {
  if (nums.length < 1) return [-1, -1];
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  if (firstPos === -1) return [-1, -1];

  let endPos = firstPos,
    startPos = firstPos,
    temp1,
    temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;

  return [startPos, endPos];
};

console.log(searchRangeEasiestToUnderstand([1, 3, 3, 5, 5, 5, 8, 9], 5));

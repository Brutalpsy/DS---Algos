//https://leetcode.com/problems/contains-duplicate/description/
// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Input: [1,2,3,1] = true
// Input: [1,2,3,4] = false
// Input: [1,1,1,3,3,4,3,2,4,2] = true

const nums = [1, 2, 3, 1];
//O(n) - fast
const containsDuplicate = (nums) => {
  for (let i = 0, obj = {}; i < nums.length; i++) {
    if (obj[nums[i]] != undefined) {
      return true;
    }
    obj[nums[i]] = i;
  }
  return false;
};

// slower
const containsDuplicate2 = (nums) => {
  let set = new Set(nums);
  return set.size < nums.length;
};

console.warn(`[${nums}]  contains duplicate: ${containsDuplicate(nums)}`);
console.warn(`[${nums}] contains duplicate: ${containsDuplicate2(nums)}`);

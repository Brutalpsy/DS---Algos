//https://leetcode.com/problems/house-robber/

var robRecursive = function (nums) {
  const memo = [];
  const helper = (index) => {
    if (index < 0) return 0;
    if (memo[index] >= 0) return memo[index];

    memo[index] = Math.max(helper(index - 2) + nums[index], helper(index - 1));
    return memo[index];
  };
  return helper(nums.length - 1);
};

var robIterative = function (nums) {
  if (!nums || !nums.length) return 0;

  const memo = [];
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(memo[memo.length - 1], memo[memo.length - 2] + nums[i]);
  }

  return memo[nums.length - 1];
};

console.log(robIterative([8, 1, 3, 10, 7]));
console.log(robRecursive([8, 1, 3, 10, 7], 0));

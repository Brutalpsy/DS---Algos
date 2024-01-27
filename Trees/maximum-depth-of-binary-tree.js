//https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

// Complexity
// - Time complexity:
//  O(n)

// - Space complexity:
//  O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  var recursiveCall = function (node, count) {
    if (node == null) {
      return count;
    }
    count++;
    return Math.max(
      recursiveCall(node.left, count),
      recursiveCall(node.right, count)
    );
  };
  return recursiveCall(root, 0);
};

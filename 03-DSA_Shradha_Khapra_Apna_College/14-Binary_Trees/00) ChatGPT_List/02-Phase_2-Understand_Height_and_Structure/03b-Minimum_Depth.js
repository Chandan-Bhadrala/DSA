/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

/**
## Error: In approach.
1. If both children exist, neither if block runs, so both remain Infinity.
  1. That gives Infinity, which is wrong.
*/


// We recurse till we find the **LEAF NODE** (a node with no/0 child).
const minDepth = function (root) {
  // Base Case: We return when we hit null value/node.
  if (!root) return 0; // Null value/node will not be considered in the tree height calculation.

  // Only when we will find the true LEAF NODE, we'll return 1 for the further accumulation purpose to calculate the tree's height.
  if (!root.left && !root.right) return 1; // For accumulation to purpose. To calculate the tree's height.

  let ltBranchHT = Infinity;
  let rtBranchHT = Infinity;

  if (!root.left) {
    // Recurse till we reach to the end of the right branch of the parent's node.
    rtBranchHT = minDepth(root.right);
  }

  if (!root.right) {
    // Recurse till we reach to the end of the left branch of the parent's node.
    ltBranchHT = minDepth(root.left);
  }

  return Math.min(ltBranchHT, rtBranchHT) + 1; // +1 to add the parent node's ht into the tree ht. +1 into the children's ht. // This return value will be received by the grand parent node for further addition.
};

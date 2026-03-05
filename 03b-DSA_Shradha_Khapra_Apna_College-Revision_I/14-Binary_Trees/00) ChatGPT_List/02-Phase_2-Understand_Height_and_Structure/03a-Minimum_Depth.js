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

// We recurse till we find the **LEAF NODE** (a node with no/0 child).
const minDepth = function (root) {
  // Base case: We recurse till we find a node with no right and the left node. A true LEAF NODE.
  // Because a leaf node decides the min or the max height.
  if (!root) return 0; // Recurse till leaf node is found and then only return a base value to compile answer on.

  if (!root.left) {
    // Just recurse, if there is a right branch. To reach to the Leaf Node.
    minDepth(root.right);
  }

  if (!root.right) {
    // Just recurse, if there is a left branch. Again just to reach to the Leaf Node.
    minDepth(root.left);
  }

  return Math.min() + 1; // I've nothing now other than 0, to accumulate my answer on. +1 is for the parent node. How to accumulate children result.
};

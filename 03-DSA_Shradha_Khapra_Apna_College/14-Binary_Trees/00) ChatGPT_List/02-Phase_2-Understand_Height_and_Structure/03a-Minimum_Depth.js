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
  // Base case: We recurse till we find a node with no right and the left node. A true leaf node.
  // Because a leaf node decides the min or the max height.
  if (!root) return 0;

  if (!root.left) {
    minDepth(root.right);
  }

  if()
};

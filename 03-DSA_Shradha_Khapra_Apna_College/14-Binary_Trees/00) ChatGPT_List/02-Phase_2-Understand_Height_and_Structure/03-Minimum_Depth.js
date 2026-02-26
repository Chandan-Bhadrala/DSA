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
const minDepth = function(root) {
  // 1. Base case: Empty tree
  if (root === null) {
    return 0;
  }

  // 2. Base case: Leaf node (no children)
  if (root.left === null && root.right === null) {
    return 1;
  }

  // 3. If left child is null, we must recurse into the right subtree
  if (root.left === null) {
    return minDepth(root.right) + 1;
  }

  // 4. If right child is null, we must recurse into the left subtree
  if (root.right === null) {
    return minDepth(root.left) + 1;
  }

  // 5. If both exist, find the minimum of the two
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
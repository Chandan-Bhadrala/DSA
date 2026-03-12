/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */

// Helper: Checks if two trees are identical
function isIdentical(node1, node2) {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;

  return (
    node1.val === node2.val &&
    isIdentical(node1.left, node2.left) &&
    isIdentical(node1.right, node2.right)
  );
}

// Main: Checks if subRoot is a subtree of root
function isSubtree(root, subRoot) {
  // An empty tree is always a subtree
  if (subRoot === null) return true;
  // A non-empty tree cannot be a subtree of an empty tree
  if (root === null) return false;

  // Check if trees are identical at the current root
  if (isIdentical(root, subRoot)) return true;

  // Otherwise, recurse to the left and right children
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

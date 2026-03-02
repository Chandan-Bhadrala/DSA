class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  const result = [];

  // Helper function for DFS
  const findPaths = (node, currentPath) => {
    if (!node) return;

    // Add current node value to path
    currentPath.push(node.val);

    // Check if it's a leaf node
    if (!node.left && !node.right) {
      // Join the path array into a string format "1->2->3"
      result.push(currentPath.join("->"));
    } else {
      // Continue traversal to children
      findPaths(node.left, currentPath);
      findPaths(node.right, currentPath);
    }

    // Backtrack: remove the current node before going back up the tree
    currentPath.pop();
  };

  findPaths(root, []);
  return result;
};

// Example Usage:
const root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

console.log(binaryTreePaths(root))

// Definition for a binary tree node
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  // Base case: If the node is empty, depth is 0
  if (root === null) {
    return 0;
  }

  // Recursive calls to find the depth of child nodes
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the greater of the two plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
};

// Example Usage:
//      3
//     / \
//    9  20
//      /  \
//     15   7

const tree = new TreeNode(3, 
  new TreeNode(9), 
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log("The maximum depth is:", maxDepth(tree)); // Output: 3
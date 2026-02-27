// Definition for a binary tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to calculate the height of a binary tree
 * @param {TreeNode} root
 * @return {number}
 */
const getTreeHeight = (root) => {
  // Base Case: We'll return from the null value and while backtracking, we'll be adding 1 to the previous obtained answer.
  if (!root) return 0;

  let ltHt = getTreeHeight(root.left); // Recursing to reach the left sub tree bottom.
  let rtHt = getTreeHeight(root.right); // Recursing to reach the right sub tree bottom.

  return Math.max(ltHt, rtHt) + 1; // Returning answer to the grandparent node from the parent node. Parent node is adding 1 to provide its own count in addition to the children count.
};

// --- Example Usage ---

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("The height of the tree is:", getTreeHeight(root)); // Output: 3

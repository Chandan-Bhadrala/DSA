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
 * @return {number[]}
 */

/**
## Using DFS.

## Solution Approach:
1. I'll be visiting the left nodes first as usual using DFS.
2. I'll be using pre-order traversal and I'll push the node into the res array, if the res.length == depthOfTree.
  1. As this comparison will indicate that, this depth of the tree is being visited for the first time.
*/

var leftView = function (root, level = 0, res = []) {
  if (!root); // Return from the leaf node.

  // Conditionally collect the nodes.
  // Below condition'll collect the first left nodes of the tree.
  if (res.length == level) res.push(root.val);

  leftView(root.left, level + 1, res);
  leftView(root.right, level + 1, res);

  return res;
};

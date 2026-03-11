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
1. Simply visit right branch first and check if this depth visited for the first time using a level/depth comparison with the res.length.
2. If the node of that depth at the right side is visited for the first time then add that node.val into the res array.
*/
var rightSideView = function (root, level = 0, res = []) {
  if (!root) return []; // Simply return back from the leaf node.
  // Using an array, if the given root is an empty tree.

  if (level == res.length) res.push(root.val);

  rightSideView(root.right, level + 1, res);
  rightSideView(root.left, level + 1, res);

  // Return the collected rightmost nodes-value.
  return res;
};

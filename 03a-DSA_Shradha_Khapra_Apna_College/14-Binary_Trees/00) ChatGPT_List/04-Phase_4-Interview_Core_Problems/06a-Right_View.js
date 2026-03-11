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

// ## Using BFS.
var rightSideView = function (root) {
  if (!root) return []; // Early return upon finding empty tree.

  let queue = [root];
  let res = [];

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      // Collect the right-most node-value from the level of the tree.
      if (i == levelSize - 1) res.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  // Return the collected rightmost nodes-value.
  return res;
};

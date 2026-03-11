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
## Using BFS.

## Solution Approach:
1. I'll be scanning the tree level by level and then I'll push the **first element** of the **level** into the resultant array.
2. Resultant array will be the my final array containing the elements from the Left-View.
*/

var leftView = function (root) {
  if (!root) return []; // Early return upon finding tree to be empty.

  let queue = [root]; // To help traversing the tree in a BFS manner.
  let res = []; // To capture the final answer.

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (i == 0) res.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return res;
};

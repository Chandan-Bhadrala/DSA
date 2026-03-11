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
 * @return {number[][]}
 */

/**
## Question:
1. We've to travel the binary tree using BFS and has to store each level values as a nested array in a main res array.
2. However, the catch is. We've to store each level in a zig-zag fashion.
    1. Meaning, if we traverse and store the values of one level in **left-to-right manner**, then next level values'll be stored in **right-to-left manner**.
    2. And we'll keep swinging the traversal manner every time we go down the level.
*/
var zigzagLevelOrder = function (root) {
  if (!root) return []; // Early return, if empty tree is given.

  let queue = [root];
  let res = [];
  let leftToRight = true; // Flag to know from which direction to traverse the tree level.

  while (queue.length) {
    let levelSize = queue.length;
    let currentLevelElements = [];

    //---

    // Insert the current Level elements in the nested array "currentLevelElements" for the further process.
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      if (leftToRight) {
        currentLevelElements.push(currentNode.val);
      } else {
        currentLevelElements.unshift(currentNode.val);
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // ---

    res.push(currentLevelElements);

    // Flip the flag.
    leftToRight = !leftToRight;
  }

  return res;
};

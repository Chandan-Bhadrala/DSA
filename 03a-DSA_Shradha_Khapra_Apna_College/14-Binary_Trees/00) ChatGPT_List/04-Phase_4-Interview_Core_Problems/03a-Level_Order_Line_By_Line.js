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

// ---

/**
## BFS - (Breath First Search).
1. BFS is a traversal method in which we traverse the tree in a level by level manner.
2. However, in this question we've to store the result in an array with each level elements grouped as a nested array.

## Solution Approach:
1. I'll first write down the code for the simple BFS.
2. Then in that code, I'll insert few special lines to capture the each level elements separately in a new array and then I'll push that new array into our main res array.
*/

var levelOrder = function (root) {
  if (!root) return [];

  let res = []; // To accumulate the tree elements level by level.
  let queue = [root]; // This queue'll help in processing the BFS.
  // Initializing it with root.

  while (queue.length) {
    let levelSize = queue.length; // Capturing the queue length to extract the single level elements.

    let singleLevelElements = [];

    // Extracting all elements pertaining to the single level.
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      singleLevelElements.push(currentNode.val);

      // Adding the children of the currentNode to be processed in the next iteration of the while-loop.
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // Storing the single level elements extracted above into the res array.
    res.push(singleLevelElements);
  }
  return res;
};

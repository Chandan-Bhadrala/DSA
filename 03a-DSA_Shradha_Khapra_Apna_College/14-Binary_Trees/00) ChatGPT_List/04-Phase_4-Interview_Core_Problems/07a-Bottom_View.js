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
1. In top and the bottom view, all we need to do is to maintain the record of the **Horizontal Distance**.
2. For every unique HD, we maintain the record of first seen node in the unique HD using a map.
    1. Similarly, in the bottom-view, we'll maintain the record of last seen node in the unique HD again using a map.
*/
var bottomView = function (root) {
  if (!root) return [];

  let queue = [[root, 0]]; // 0 denotes the HD.
  let map = new Map();

  while (queue.length) {
    let [currentNode, HD] = queue.shift();

    // Below, code'll keep on overwriting the older seen node.
    // Till it finds the last/bottom node.
    // So, bottom node'll never get overwritten in the map.
    map.set(HD, currentNode.val);

    if (currentNode.left) queue.push([currentNode.left, HD - 1]);
    if (currentNode.right) queue.push([currentNode.right, HD + 1]);
  }

  // Now map has all the bottom nodes value.
  // Now, we just need to sort the map and return it.

  // sortedCols has all the **keys** of the map in a sorted fashion.
  let sortedCols = Array.from(map.keys()).sort((a, b) => a - b);

  // Now, we need an array with values corresponding to the sorted keys stored in the sortedCols.
  let res = sortedCols.map((key) => map.get(key)); // This map code will find/get the values corresponding to the keys stored in the sortedCols and will store/map them into the res array.

  return res;
};

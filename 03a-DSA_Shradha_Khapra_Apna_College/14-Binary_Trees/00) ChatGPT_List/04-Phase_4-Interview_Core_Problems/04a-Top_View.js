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
## Question: 
1. Need to store the elements that are visible from the top of the tree.

## Solution Approach:
1. I'll be iterating the tree level by level using BFS.
2. Root element will be considered as on 0th column.
    1. Right to the parent node, will get col+1 in comparison to its parent.
    2. Similarly, left to the parent node, will get col-1 in comparison to its parent node.
3. I'll be storing the node value in pair with its colNo.
    1. If a node for the same colNo., already exists in the map, then I'll ignore adding the same colNo. and node pair into the map.
    2. As, the next pair of node and colNo. will indicate a node right below the above/previously added node.
    3. So, the next time, I'll get another node with the already existing colNo. in the map. I'll ignore adding that node into the map.
4. So, I need a queue to process BFS and a map to store/keep track of the node and the colNo.
*/

/**
## Improvement: In Approach.
1. Last code was quite okay, just needed to return the sorted array instead of simply returning back the original map.
2. As map keeps an insertion order and not the sorted order of the keys.
*/

var topView = function (root) {
  if (!root) return [];

  let queue = [[root, 0]]; // To process the BFS
  let map = new Map(); // To store the node and colNo.

  while (queue.length) {
    let [currentNode, col] = queue.shift();

    // Add current node to the map conditionally.
    // Only if the map doesn't have any node corresponding to the current col.
    if (!map.has(col)) map.set(col, currentNode.val);

    // Push the current node children to be processed in the next cycle/iteration of the while loop.
    // Push node as a pair with their Horizontal Distance.
    if (currentNode.left) queue.push([currentNode.left, col - 1]);
    if (currentNode.right) queue.push([currentNode.right, col + 1]);
  }

  // Map/Object in the JS keeps the elements **sorted** on the basis of the key.
  // If the keys in a Map/Object are **comparable**.
  // Our map has a comparable keys, so we'll return the same map, as that map will spill out all its value in an ascending order of the keys.
  return map;
};

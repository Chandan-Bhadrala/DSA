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
 * @return {number}
 */

/**
## Question:
1. This question requires maximum possible distance between two nodes in a given tree.
2. That maximum distance will be considered as the maximum dia of the tree.
3. What diameter actually means:
    1. It is the maximum number of nodes (or edges, depending on definition) on the longest path between any two nodes in the tree.
    2. That path may or may not pass through the root.

## Solution Approach:
1. I'll initialize a maxDia = 0.
2. First Dia will be calculated as maxDia = Math.max(maxDia, rtHt + ltHt + 1).
    1. Sitting at a node, we've it's ltHt and the rtHt add 1 for its own-self and we've max dia for the given node.
    2. We'll compare the current dia with the preserved maxDia and update accordingly.
*/

/**
## Error: In Approach.
1. Just one error, return statement of the Main function was wrong.
2. I had to calculate the CurrentDia for the current node and then return Math.max(maxDia, ltDia, rtDia).
*/
// Trial: 3 -> Let's try to write correct code with time complexity of O(n^2).
var diameterOfBinaryTree = function (root, maxDia = 0) {
  if (!root) return; // Universal base case to return from the point of the null value.

  let ltDia = diameterOfBinaryTree(root.left, maxDia);
  let rtDia = diameterOfBinaryTree(root.right, maxDia);
  // Below recursive call gives answer for the top node.
  // Let's call above recursive function for the rest of the nodes too.
  // Now above recursive call will recurse down below to the leaf node and then will call the ltHt and rtHt function to check their heights.

  let ltHt = findHt(root.left);
  let rtHt = findHt(root.right);

  // Now, I need another return statement to return Math.max(ltDia, rtDia).
  // I think two functions are mandatory in this problem.

  return Math.max(maxDia, rtHt + ltHt + 1);
};

// Helper function to return length between the root node and the leaf node.
function findHt(root) {
  if (!root) return 0; // Returning 0, to start accumulating the answer.

  let ltHt = findHt(root.left);
  let rtHt = findHt(root.right);

  return Math.max(ltHt, rtHt) + 1; // Returning the longest branch of the root node.
}

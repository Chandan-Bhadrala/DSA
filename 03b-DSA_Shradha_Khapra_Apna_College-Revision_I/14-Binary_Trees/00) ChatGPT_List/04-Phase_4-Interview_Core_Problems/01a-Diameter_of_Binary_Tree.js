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

// Trial: 2
var diameterOfBinaryTree = function (root, maxDia = 0) {
  if (!root) return; // Universal base case to return from the point of the null value.

  let ltHt = findHt(root.left);
  let rtHt = findHt(root.right);

  // It doesn't seem that I require another recursive function, such as, diameterOfBinaryTree(root.left) or diameterOfBinaryTree(root.right).
  // But, I think we do need this recursive call too.
  // As we are only passing first root.left and the root.right to the helper function, we need to traverse down the tree and has to pass other than top nodes' left and right nodes too.
  // If we call helper function for all the nodes of the tree, then Time Complexity will jump to the O(n^2).

  return Math.max(maxDia, rtHt + ltHt + 1);
};

// Helper function to return length between the root node and the leaf node.
function findHt(root) {
  if (!root) return 0; // Returning 0, to start accumulating the answer.

  let ltHt = findHt(root.left);
  let rtHt = findHt(root.right);

  return Math.max(ltHt, rtHt) + 1; // Returning the longest branch of the root node.
}

// ---

// Trial: 1
var diameterOfBinaryTree = function (root, maxDia = 0) {
  if (!root) return; // Universal base case to return from the point of the null value.

  let ltHt = diameterOfBinaryTree(root.left, maxDia); // This'll not be returning ltHt, rather these two statements will return the maxDia value.
  // We need to return values.
  // 1. ltHt and rtHt and other is the updated value of the maxDia.
  // 2. So, we need to call two functions returning our desired values.
  let rtHt = diameterOfBinaryTree(root.right, maxDia);

  return Math.max(maxDia, rtHt + ltHt + 1);
};

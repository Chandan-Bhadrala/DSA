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

// ---

//Trial: 4 -> was a correct O(n^2) approach, let's improve it to O(n) time complexity.

// Trial: 5 -> Let's try to write correct code with time complexity of **O(n)**.

var diameterOfBinaryTree = function (root) {
  let maxDia = 0;

  // Now, will write the helper function as a nested function. This nested helper function will keep on calculating the maxHt for each node and along with it node's Ht calculation, it'll also update the parent's Dia variable for the maxDia value.

  function findHt(root) {
    if (!root) return 0; // Returning 0, to start accumulating the answer.

    let ltHt = findHt(root.left);
    let rtHt = findHt(root.right);

    // Calculating the currDia for the current node.
    let currDia = ltHt + rtHt + 1;

    // Updating the maxDia value.
    maxDia = Math.max(maxDia, currDia);

    return Math.max(ltHt, rtHt) + 1; // Returning the longest branch for the current node.
  }

  // Call the nested/helper function for the root node.
  findHt(root);

  // Return maxDia.
  // Let it be updated by the nested function.
  return maxDia;
};

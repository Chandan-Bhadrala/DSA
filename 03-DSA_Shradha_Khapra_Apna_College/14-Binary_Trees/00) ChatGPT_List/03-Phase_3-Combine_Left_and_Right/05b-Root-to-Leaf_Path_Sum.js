class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to check if a root-to-leaf path exists for a given sum
 * @param {Node} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum, calSum = 0) => {
  if (!root) return false; // Reached the last empty null value and still didn't found the targetSum, so return or bubble up the false boolean.

  calSum += root.val;

  // Doing pre-order, because I wish to add parent/root node value before I touch either of the children.
  if (!root.left && !root.right && targetSum == calSum) {
    return true;
  }

  let leftCheck = hasPathSum(root.left, targetSum, calSum);
  let rightCheck = hasPathSum(root.right, targetSum, calSum);

  calSum -= root.val;

  // Parent return to the Grand Parent the truth returned by the child node.
  return leftCheck || rightCheck; // If either of the child says yes. We propagate that answer to the top.
};

// Example Usage:
const root = new Node(5);
root.left = new Node(4);
root.right = new Node(8);
root.left.left = new Node(11);
root.left.left.left = new Node(7);
root.left.left.right = new Node(2);

console.log(hasPathSum(root, 22)); // Output: true (5 + 4 + 11 + 2 = 22)
console.log(hasPathSum(root, 5)); // Output: false (5 is root, but not a leaf)

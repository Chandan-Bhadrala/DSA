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
const hasPathSum = (root, targetSum) => {
  // 1. If the node is null, there's no path
  if (!root) return false;

  // 2. Check if we are at a leaf node
  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  // 3. Recurse down, subtracting the current value from the target
  const remainingSum = targetSum - root.val;

  return (
    hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
  );
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

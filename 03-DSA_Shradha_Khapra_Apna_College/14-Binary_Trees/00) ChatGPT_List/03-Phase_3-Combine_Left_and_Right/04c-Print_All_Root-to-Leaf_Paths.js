class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to find and print all root-to-leaf paths
 * @param {Node} root
 * @param {string} path - Accumulates the values as we go
 */
const printPaths = (root, res = [], path = []) => {
  if (!root.left && !root.right) return res.push([...path]); // Insert one full path once leaf node is touched.

  // Push current node.
  path.push(root.val);

  // Recurse deep till the null value.
  printPaths(root.left, res, path);
  printPaths(root.right, res, path);

  // While backtracking pop the last node so that last left-node gets popped up to make space/room for the right-node.
  path.pop();

  // But how to ensure that path has nested array of all the paths.
  // While popping one full path must not be interrupted.
  // I need to store the full path as a nested array securely.

  return res;
};

// Example Usage:
const root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

console.log(printPaths(root));

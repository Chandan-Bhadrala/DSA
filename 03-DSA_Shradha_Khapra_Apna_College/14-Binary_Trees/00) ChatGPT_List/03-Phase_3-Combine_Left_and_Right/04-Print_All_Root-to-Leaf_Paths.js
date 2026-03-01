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
const printPaths = (root, path = "") => {
  // 1. Base Case: If the tree is empty
  if (!root) return;

  // 2. Append current node value to the path string
  // If path is empty, just add val; otherwise, add an arrow separator
  const currentPath = path === "" ? `${root.val}` : `${path} -> ${root.val}`;

  // 3. Leaf Check: If it's a leaf, we found a complete path
  if (!root.left && !root.right) {
    console.log(currentPath);
    return;
  }

  // 4. Recursive Step: Continue searching left and right
  printPaths(root.left, currentPath);
  printPaths(root.right, currentPath);
};

// Example Usage:
const root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

printPaths(root);
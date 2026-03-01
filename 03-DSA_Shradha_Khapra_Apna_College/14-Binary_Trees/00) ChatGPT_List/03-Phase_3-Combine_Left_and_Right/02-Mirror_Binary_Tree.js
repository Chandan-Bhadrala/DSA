class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to invert a binary tree
 * @param {Node} root
 * @return {Node}
 */
const invertTree = (root) => {
  // 1. Base case: If node is null, we've reached the end
  if (!root) {
    return null;
  }

  // 2. Perform the swap
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // 3. Recursively call for children
  invertTree(root.left);
  invertTree(root.right);

  // 4. Return the modified root
  return root;
};

// Example Usage:
const tree = new Node(4);
tree.left = new Node(2);
tree.right = new Node(7);

const invertedRoot = invertTree(tree);
console.log(invertedRoot.left.val);  // Output: 7 (previously was 2)
console.log(invertedRoot.right.val); // Output: 2 (previously was 7)

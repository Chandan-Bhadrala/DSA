class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to mirror a binary tree
 * @param {Node} root
 * @return {Node}
 */
const mirrorTree = (root) => {
  // Base case to start backtracking.
  if (!root) return root;

  // Standing at the root, start swapping the left and the right child.
  let temp = root.right;
  root.right = root.left;
  root.left = temp;
  // Swapping complete.

  // Recurse down the tree.
  mirrorTree(root.left);
  mirrorTree(root.right);

  return root; // As per the question requirement.
  // Even If returned nothing. Still mirroring has already happened.
  // As in JS non-primitive object (data structures) arguments are passed by reference.
  // So, swapping is done returning back the root node just to meet the function contract.
};

// Example Usage:
const tree = new Node(4);
tree.left = new Node(2);
tree.right = new Node(7);

const mirroredRoot = mirrorTree(tree);
console.log(mirroredRoot.left.val); // Output: 7 (previously was 2)
console.log(mirroredRoot.right.val); // Output: 2 (previously was 7)

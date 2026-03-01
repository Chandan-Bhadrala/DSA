class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to check if two binary trees are identical
 * @param {Node} p
 * @param {Node} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p || !q) return p == q; // Both must be equal and both must be null to return true.

  // Recurse into the right and the left sub-tree.
  let ltCheck = isSameTree(p.left, q.left);
  let rtCheck = isSameTree(p.right, q.right);

  return ltCheck && rtCheck && p.val == q.val;
};

// Example Usage:
const tree1 = new Node(1);
tree1.left = new Node(2);
tree1.right = new Node(3);

const tree2 = new Node(1);
tree2.left = new Node(2);
tree2.right = new Node(3);

console.log(isSameTree(tree1, tree2)); // Output: true

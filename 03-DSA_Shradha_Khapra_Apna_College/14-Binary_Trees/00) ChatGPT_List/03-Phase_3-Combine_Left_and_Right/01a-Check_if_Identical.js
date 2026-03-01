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
  // 1. If both nodes are null, they are identical
  if (!p && !q) return true;

  // 2. If one is null and the other isn't, or values differ
  if (!p || !q || p.val !== q.val) return false;

  // 3. Recursively check left and right children
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Example Usage:
const tree1 = new Node(1);
tree1.left = new Node(2);
tree1.right = new Node(3);

const tree2 = new Node(1);
tree2.left = new Node(2);
tree2.right = new Node(3);

console.log(isSameTree(tree1, tree2)); // Output: true
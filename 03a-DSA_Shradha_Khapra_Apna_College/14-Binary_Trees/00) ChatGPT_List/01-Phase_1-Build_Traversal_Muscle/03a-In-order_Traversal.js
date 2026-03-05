class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * In-order Traversal: Left -> Root -> Right
 */
function inOrder(root) {
  // Base case
  if (!root) {
    return;
  }

  // 1. Traverse the Left subtree
  inOrder(root.left);

  // 2. Visit the Root
  console.log(root.value);

  // 3. Traverse the Right subtree
  inOrder(root.right);
}

// Example Tree:
//      1
//     / \
//    2   3
//   / \
//  4   5

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

inOrder(tree); 
// Output: 4, 2, 5, 1, 3
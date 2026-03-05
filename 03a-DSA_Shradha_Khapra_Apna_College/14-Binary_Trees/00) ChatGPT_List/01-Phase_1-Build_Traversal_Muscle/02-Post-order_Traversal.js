class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Post-order Traversal: Left -> Right -> Root
 */
function postOrder(root) {
  // Base case
  if (!root) {
    return;
  }

  // 1. Traverse the Left subtree
  postOrder(root.left);

  // 2. Traverse the Right subtree
  postOrder(root.right);

  // 3. Visit the Root
  console.log(root.value);
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

postOrder(tree); 
// Output: 4, 5, 2, 3, 1
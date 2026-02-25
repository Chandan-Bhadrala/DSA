// Define the Node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Pre-order Traversal: Root -> Left -> Right
 */
function preOrder(root) {
  // Base case: if the node is empty, just return
  if (!root) {
    return;
  }

  // 1. Visit the Root
  console.log(root.value);

  // 2. Traverse the Left subtree
  preOrder(root.left);

  // 3. Traverse the Right subtree
  preOrder(root.right);
}

// Example Usage:
//        1
//       / \
//      2   3
//     / \
//    4   5
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

preOrder(tree); 
// Output: 1, 2, 4, 5, 3
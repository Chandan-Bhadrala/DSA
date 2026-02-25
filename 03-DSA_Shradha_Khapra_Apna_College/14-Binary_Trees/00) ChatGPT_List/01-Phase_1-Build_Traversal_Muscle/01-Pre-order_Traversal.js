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
  // Travel to the bottom of the tree using recursion.
  // Return from the point of the null.
  if (!root) return;

  // Console the value of the root.
  console.log(root.value);

  // Traverse to the left node (or left subtree completely).
  // For the next recursive calls, it'll be a root node.
  preOrder(root.left);
  
  // After traversing all the left nodes of the tree with the help of the above recursive call.
  // Traverse to the right sub-tree or right nodes using below recursive call.
  preOrder(root.right);

  // We'll be printing the nodes in the starting of the function using the console.log(root) statement.
  // As these nodes will be a root for the new function call.
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

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

  postOrder(root.left); // Traverse left subtree completely till the point of null value.
  postOrder(root.right); // Traverse right subtree completely till the point of null value.

  console.log(root.value); // First print the left-most, then the right-most and then the root (parent) node.

  // The stack control will touch/access at last the 4.leftChild == null then 4.rightChild which is also equal to null.
  // Then it'll traverse back to the 4 and then 4 will get print.
  // Similarly, after 4 gets print.
  // 5.leftChild will be accessed then 5.rightChild will be accessed (both are null) and
  // then control will transfer back to the 5 and 5 will get printed.
  // Same pattern will follow for every leaf node.
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

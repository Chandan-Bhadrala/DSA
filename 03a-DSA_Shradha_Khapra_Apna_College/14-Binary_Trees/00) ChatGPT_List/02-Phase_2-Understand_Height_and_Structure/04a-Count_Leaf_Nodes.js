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
function countLeafNodes(root) {
  if (!root) return 0; // If input tree is empty and to return from the null nodes.

  if (!root.left && !root.right) return 1; // return 1 when Leaf Node is found. Child nodes will return 1 to the parent node.

  return countLeafNodes(root.left) + countLeafNodes(root.right); 
  // This return statement is calling recursion to go deep into the left and the right branch.
  // Recursion will thrown back the reply upon finding the leaf node.
  // And Parent node will return the count of the left and the right child branches to the grandparent node.
}

// Example Usage:
//        1
//       / \
//      2   3
//     / \
//    4   5

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Total Leaf Nodes:", countLeafNodes(root));
// Output: 3 (Nodes 4, 5, and 3 are leaves)

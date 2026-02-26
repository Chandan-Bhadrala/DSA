// Define the Node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to sum all node values
 * @param {Node} root - The starting node
 * @returns {number} - Total sum
 */
function sumNodes(root) {
   // Base Case: If the node is empty, it adds 0 to the sum
  if (root === null) {
    return 0;
  }

  // Recursive Step: Current Value + Left Sum + Right Sum
  return root.value + sumNodes(root.left) + sumNodes(root.right);
  }

// --- Example Tree ---
//      10
//     /  \
//    5    20
//   /
//  3

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.left.left = new Node(3);

console.log("Sum of all nodes:", sumNodes(root)); // Output: 38 (10 + 5 + 20 + 3)
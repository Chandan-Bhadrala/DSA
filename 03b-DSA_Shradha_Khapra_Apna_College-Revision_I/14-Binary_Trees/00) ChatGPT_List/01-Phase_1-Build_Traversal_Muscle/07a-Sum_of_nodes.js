// ## Revision-1.

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
  if (!root) return 0; // Return 0, a mathematical value to build/add answer over it.

  let ltSum = sumNodes(root.left);
  let rtSum = sumNodes(root.right);

  return root.value + ltSum + rtSum;
}

// --- Example Tree ---
//      10
//     /  \
//    5    20
//   / \
//  3   7

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.left.left = new Node(3);
root.left.right = new Node(7);

console.log("Sum of all nodes:", sumNodes(root)); // Output: 45 (10 + 5 + 20 + 3 + 7)

/**
 * Function to sum all node values
 * @param {Node} root - The starting node
 * @returns {number} - Total sum
 */
function sumNodes(root) {
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
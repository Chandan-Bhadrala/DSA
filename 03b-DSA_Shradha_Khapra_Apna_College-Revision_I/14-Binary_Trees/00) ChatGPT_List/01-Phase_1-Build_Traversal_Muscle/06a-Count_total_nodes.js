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
 * Function to count total nodes
 * @param {Node} root - The starting node
 * @returns {number} - Total count
 */
function countNodes(root) {
  if (!root) return 0; // Return 0 upon reaching the null value while recursing.

  let leftCount = countNodes(root.left);
  let rightCount = countNodes(root.right);

  return 1 + leftCount + rightCount;
}

// --- Example Usage ---

// Creating a small tree:
//      1
//     / \
//    2   3
//   / \
//  4   5

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Total Nodes:", countNodes(root)); // Output: 5

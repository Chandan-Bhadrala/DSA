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
  // Base case to start backtracking.
  if (!root) return 0;

  let ltCount = countNodes(root.left);
  let rtCount = countNodes(root.right);


  return ltCount + rtCount + 1;
  // Above "return statement" will be touched only after the "return statement" of the base case.
  //  4.leftChild will return 0 and 4.rightChild will return 0.
  // Then 4 will return as 1 to the 2 node.
  // Similar pattern will happen for the 5.
  // 5 will also return 1 to the 2 after 5.leftChild and 5.rightChild returns 0 to the 5.

  // Finally 2 will return to its parent sum count of its left and the right child + of its own.
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

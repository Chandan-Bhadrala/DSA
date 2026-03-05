// Define the Node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Search in an unsorted Binary Tree
 * @param {Node} root 
 * @param {number} target 
 * @returns {boolean}
 */
function searchTree(root, target) {
  // Base Case: If we hit a null node, the target isn't here
  if (root === null) return false;

  // Base Case: We found the value!
  if (root.value === target) return true;

  // Recursive Step: Search Left OR Right
  // If either returns true, the target exists in the tree
  return searchTree(root.left, target) || searchTree(root.right, target);
}

// --- Example ---
//      10
//     /  \
//    5    20
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);

console.log(searchTree(root, 20)); // Output: true
console.log(searchTree(root, 99)); // Output: false
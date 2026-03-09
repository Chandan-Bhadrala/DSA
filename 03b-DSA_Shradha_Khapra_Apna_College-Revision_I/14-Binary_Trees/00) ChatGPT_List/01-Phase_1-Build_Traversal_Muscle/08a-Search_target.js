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
 * Search in an unsorted Binary Tree
 * @param {Node} root
 * @param {number} target
 * @returns {boolean}
 */
function searchTree(root, target) {
  if (!root) return false; // If we hit the last null value and still couldn't find the target then return the false value.

  if (root.value == target) return true; // If target found let true bubble up.

  // On above if-condition being true, it will immediately return true to one of the below recursive call.
  let ltSearchRes = searchTree(root.left, target);
  let rtSearchRes = searchTree(root.right, target);

  return ltSearchRes || rtSearchRes;
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

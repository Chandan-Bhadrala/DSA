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
  if (!root) return false;

  if (root.value == target) return true; // This way we'll return early if this condition ever gets hit. If this return statement gets touched then we'll never touch the base case.
  // Slight change in above "never" wording. Base case will keep getting hit upon successfully touching the end of the one branch and upon touching the end of the one branch of the tree, we'll start backtracking and start to recurse into other branches of the tree till we find the target or hit the last branch without ever changing the return value to true from the false of the base case.

  // Now, we'll recurse for the left and the right subtree in the search of the target.
  let ltAnswer = searchTree(root.left, target);
  let rtAnswer = searchTree(root.right, target);

  // After scanning the children nodes, a final return value from the parent node.
  return ltAnswer || rtAnswer;
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

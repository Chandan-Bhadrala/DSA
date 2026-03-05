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
  // Base case to start backtracking.
if(!root) return 0;

// return sumNodes(root.left.value) + sumNodes(root.right.value) + root.value;

// We are only supposed to return the value of the root node, i.e., root.value + result of the left child nodes + result of the right child nodes.
// return sumNodes(root.left) + sumNodes(root.right) + root.value; // This is good but short. I'll right the same in a bit expanded form.

let ltSum = sumNodes(root.left);
let rtSum = sumNodes(root.right);

// Both above statements will simply accumulate the result.

// Below return statement will return final answer to its parent node.
return ltSum + rtSum + root.value;

// We'll hit 3.ltChild, it'll return 0.
// Then we'll hit 3.rtChild, it'll return 0.
// Then finally for the first time we'll touch the last return statement to return the result of 3 to the 5 which will be root.value = 3.
// Same pattern will happen for all the rest of the nodes.
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
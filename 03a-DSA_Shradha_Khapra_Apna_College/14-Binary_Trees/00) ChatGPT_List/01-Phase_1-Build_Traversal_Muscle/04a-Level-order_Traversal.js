class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Level-order Traversal: Row by Row
 */

/**
## Solution Approach:
0. In level order traversal, we traverse a tree level/row by level/row.
1. In level order traversal we use a queue and a while loop.
  1. In level order traversal, we don't use a recursion.
*/

function levelOrder(root) {
  if (!root) return []; // Early return upon receiving an empty tree.

  let res = []; // A resultant variable to hold the tree elements row-by-row, for printing or any other operation.
  let queue = [root]; // Adding very first root element of the tree straight away.

  // Traversing the tree till we've any element pending in the queue.
  while (queue.length) {
    let currentNode = queue.shift(); // Take the first/front element from the queue for further processing.

    // Process the extracted current node.
    res.push(currentNode.value);

    // Add/Load the left and the right child of the currentNode to the queue.
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    // This loop will continue till we've either left/right child of the currentNode.
  }

  return res;
}

// Example Tree:
//      1
//     / \
//    2   3
//   / \
//  4   5

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

console.log(levelOrder(tree));
// Output: [1, 2, 3, 4, 5]

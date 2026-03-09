class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function levelOrderGrouped(root) {
  if (!root) return [];

  const result = [];
  const queue = [root]; // Start with the root level

  while (queue.length > 0) {
    const levelSize = queue.length; // Capture the number of nodes at THIS level
    const currentLevelNodes = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift(); // Remove the front node
      currentLevelNodes.push(currentNode.val);

      // Add children to the queue for the NEXT level
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // After the inner loop, we've finished one full level
    result.push(currentLevelNodes);
  }

  return result;
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

console.log(levelOrderGrouped(tree)); 
// Output: [1, 2, 3, 4, 5]
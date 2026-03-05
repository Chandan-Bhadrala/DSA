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
function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root]; // Initialize queue with the root

  while (queue.length > 0) {
    // 1. Take the first node from the front of the queue
    const currentNode = queue.shift();
    
    // 2. Process it (add to result)
    result.push(currentNode.value);

    // 3. Add the children to the back of the queue
    // Add Left first so it's processed before Right
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
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

console.log(levelOrder(tree)); 
// Output: [1, 2, 3, 4, 5]
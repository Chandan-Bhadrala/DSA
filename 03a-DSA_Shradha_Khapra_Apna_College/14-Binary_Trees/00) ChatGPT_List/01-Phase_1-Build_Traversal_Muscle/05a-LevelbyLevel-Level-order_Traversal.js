class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function levelOrderGrouped(root) {
  if (!root) return []; // Early return, if given tree has no root.

  let queue = [root]; // Let's initialize queue with the root value.
  let res = []; // A resultant array to hold the desired result.

  while (queue.length) {
    let levelSize = queue.length; // Taking snapshot of the queue length before processing the levels of the tree.

    let currentLevelNodes = []; // An array to hold the single level values.

    // Running a for-loop to the size of the queue length as per the snapshot taken earlier.
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      // Adding the currentNode's value into the currentLevelNodes.
      currentLevelNodes.push(currentNode.value);

      // Adding the children to the queue for processing in the next round of the for-loop.
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      // This for-loop will continue till the point of the queue levelSize snapshot taken earlier.
      // And this for-loop will push all the children of the previous queue frontier into the queue.
    }

    // Once the first-for-loop finishes, push the collected answer into the resultant array.
    res.push(currentLevelNodes);
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

console.log(levelOrderGrouped(tree));
// Output: [ [ 1 ], [ 2, 3 ], [ 4, 5 ] ]

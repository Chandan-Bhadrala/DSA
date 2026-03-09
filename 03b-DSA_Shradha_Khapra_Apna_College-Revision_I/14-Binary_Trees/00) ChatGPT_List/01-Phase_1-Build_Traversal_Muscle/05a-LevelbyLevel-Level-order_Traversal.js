class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function levelOrderGrouped(root) {
  
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
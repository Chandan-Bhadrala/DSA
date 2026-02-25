class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function createSampleTree() {
  const root = new TreeNode(1);

  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);

  root.right.right = new TreeNode(6);

  return root;
}

/**
        1
       / \
      2   3
     / \   \
    4   5   6
*/

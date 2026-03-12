function flatten(root) {
  if (!root) return;

  // 1. Flatten the left and right subtrees
  flatten(root.left);
  flatten(root.right);

  // 2. Store the subtrees
  const leftSubtree = root.left;
  const rightSubtree = root.right;

  // 3. Move the left subtree to the right
  root.right = leftSubtree;
  root.left = null;

  // 4. Find the end of the new right chain to attach the old right subtree
  let current = root;
  while (current.right !== null) {
    current = current.right;
  }
  
  current.right = rightSubtree;
}
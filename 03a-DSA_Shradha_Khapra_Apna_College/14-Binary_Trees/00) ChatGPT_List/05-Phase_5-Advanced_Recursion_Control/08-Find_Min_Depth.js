function minDepth(root) {
  if (root === null) return 0;

  // If left child is null, we must go down the right side
  if (root.left === null) return minDepth(root.right) + 1;
  
  // If right child is null, we must go down the left side
  if (root.right === null) return minDepth(root.left) + 1;

  // If both exist, take the minimum of both sides
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}
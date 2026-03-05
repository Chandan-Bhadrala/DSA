function countSingleChildNodes(root) {
  // Base Case: If the node is null, it contributes 0 to the count.
  if (!root) return 0;

  // Condition for exactly one child:
  // (Left exists AND Right is null) OR (Left is null AND Right exists)
  const hasOnlyLeft = root.left && !root.right;
  const hasOnlyRight = !root.left && root.right;

  if (hasOnlyLeft || hasOnlyRight) {
    // If this node has exactly one child, we count it (1) 
    // and continue searching both branches.
    return 1 + countSingleChildNodes(root.left) + countSingleChildNodes(root.right);
  }

  // If the node has zero children (leaf) or two children, 
  // we don't count it (0) but still recurse to find single-child nodes deeper down.
  return countSingleChildNodes(root.left) + countSingleChildNodes(root.right);
}
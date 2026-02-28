const minDepth = function (root) {
  // Base Case: We return when we hit null value/node.
  if (!root) return 0;

  // Only when we find the true LEAF NODE, we return 1.
  if (!root.left && !root.right) return 1;

  let ltBranchHT = Infinity;
  let rtBranchHT = Infinity;

  // CHANGE: Check if the branch EXISTS. If it does, go catch its height.
  if (root.left) {
    ltBranchHT = minDepth(root.left);
  }

  if (root.right) {
    rtBranchHT = minDepth(root.right);
  }

  // The smallest height from children + 1 for the current node.
  return Math.min(ltBranchHT, rtBranchHT) + 1;
};
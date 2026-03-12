function maxPathSum(root) {
  let maxSum = -Infinity;

  function gainFromSubtree(node) {
    if (node === null) return 0;

    // Recursively get max gains, ignore negative paths (0)
    const leftGain = Math.max(gainFromSubtree(node.left), 0);
    const rightGain = Math.max(gainFromSubtree(node.right), 0);

    // Current path sum passing through this node
    const currentPathSum = node.val + leftGain + rightGain;

    // Update global maximum
    maxSum = Math.max(maxSum, currentPathSum);

    // Return the max gain this node adds to its parent
    return node.val + Math.max(leftGain, rightGain);
  }

  gainFromSubtree(root);
  return maxSum;
}
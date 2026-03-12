function maxPathSum(root) {
  let globalMax = -Infinity;

  function calculateGain(node) {
    if (!node) return 0;

    // We take max(0, ...) to ignore negative paths
    const left = Math.max(calculateGain(node.left), 0);
    const right = Math.max(calculateGain(node.right), 0);

    // Current peak is node + left + right
    const currentPeak = node.val + left + right;

    // Update global maximum
    globalMax = Math.max(globalMax, currentPeak);

    // Return max gain to parent
    return node.val + Math.max(left, right);
  }

  calculateGain(root);
  return globalMax;
}
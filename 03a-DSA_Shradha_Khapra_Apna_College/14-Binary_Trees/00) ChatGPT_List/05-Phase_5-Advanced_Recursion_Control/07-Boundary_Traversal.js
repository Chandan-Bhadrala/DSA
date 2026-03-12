function boundaryTraversal(root) {
  if (!root) return [];
  const result = [root.val];

  // Helper: Is it a leaf node?
  const isLeaf = (node) => !node.left && !node.right;

  // 1. Left Boundary (excluding leaves)
  let curr = root.left;
  while (curr) {
    if (!isLeaf(curr)) result.push(curr.val);
    curr = curr.left || curr.right;
  }

  // 2. Collect Leaves (left to right)
  function getLeaves(node) {
    if (!node) return;
    if (isLeaf(node)) result.push(node.val);
    getLeaves(node.left);
    getLeaves(node.right);
  }
  getLeaves(root);

  // 3. Right Boundary (excluding leaves, in reverse)
  const rightPath = [];
  curr = root.right;
  while (curr) {
    if (!isLeaf(curr)) rightPath.push(curr.val);
    curr = curr.right || curr.left;
  }
  result.push(...rightPath.reverse());

  return result;
}
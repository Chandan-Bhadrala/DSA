function hasPathSum(root, targetSum) {
  // If the node is null, we haven't found a path
  if (root === null) {
    return false;
  }

  // Check if we are at a leaf node
  if (root.left === null && root.right === null) {
    // Is the remaining sum equal to the leaf's value?
    return targetSum === root.val;
  }

  // Recurse to children with the updated remaining sum
  const remainingSum = targetSum - root.val;
  
  return hasPathSum(root.left, remainingSum) || 
         hasPathSum(root.right, remainingSum);
}
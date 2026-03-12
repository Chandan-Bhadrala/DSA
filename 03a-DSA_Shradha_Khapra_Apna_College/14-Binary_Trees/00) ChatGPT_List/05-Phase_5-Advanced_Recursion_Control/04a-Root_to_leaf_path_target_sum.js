function hasPathSum(root, targetSum) {
if(!root) return false; // If we reached the last null value and still early returned the true. Then that means tree doesn't have a target sum in any of its root to leaf branch.

// Compare the target sum with branch sum upon reaching the leaf node.
if(!root.left&&!root.right) return 

hasPathSum(root.left,targetSum);
hasPathSum(root.right,targetSum);



}
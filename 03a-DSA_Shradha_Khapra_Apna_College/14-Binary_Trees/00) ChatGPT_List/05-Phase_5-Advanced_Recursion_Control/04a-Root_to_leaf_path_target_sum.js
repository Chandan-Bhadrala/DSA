/**
## Question:
1. Has to check whether there exist any root-to-leaf path which sum equals to the given target sum.

## Solution:
1. Traverse the tree and accumulate the sum, upon reaching the leaf node check whether the pathSum matches the target sum or not.
2. So, I again need two return values one for accumulating the sum and one (boolean) to confirm whether the pathSum matches the given targetSum.
3. My below approach is going to be of time complexity O(n^2).
*/

// ## Trial 1:
function hasPathSum(root, targetSum) {
  if (!root) return false; // If we reached the last null value and still early returned the true. Then that means tree doesn't have a target sum in any of its root to leaf branch.

 

  // Now question arises how to use pathSum helper function to check for the pathSum == target
}

function pathSum(root) {
  if (!root) return 0;

  let ltSum = pathSum(root.left);
  let rtSum = pathSum(root.right);

  return ltSum + rtSum + root.val;
}

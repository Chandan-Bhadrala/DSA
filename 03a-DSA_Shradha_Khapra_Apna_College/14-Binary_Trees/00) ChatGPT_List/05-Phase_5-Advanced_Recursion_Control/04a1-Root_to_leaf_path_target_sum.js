/**
## Question:
1. Has to check whether there exist any root-to-leaf path which sum equals to the given target sum.

## Solution:
1. Let's traverse the tree and accumulate the sum and upon reaching the leaf node, let's check whether the pathSum matches the target sum or not.
2. If I try do it in one go then return value will be mixed.
  1. I'll returning sum to accumulate the sum and upon touching the leaf node I'll be sending back a boolean value.
  2. This'll mix up return values.
3. So, I need to maintain a global value for one of them.
  1. Let's keep boolean as global value.
*/

// ## Trial 2:
function hasPathSum(root, targetSum) {
  hasTarget = false;

  // I'll return from the recursion, as soon as target is found.
  function pathSum(root) {
    if (!root) return 0; // Upon touching the null values restart the count to 0.

    let ltSum = pathSum(root.left);
    let rtSum = pathSum(root.right);

    // Below if condition will run for the leaf node.
    if (!root.left && !root.right && ltSum + rtSum == targetSum) {
      hasTarget = true;
      return;
    }

    return ltSum + rtSum + root.val;
  }
  pathSum(root);
  return hasTarget;
}

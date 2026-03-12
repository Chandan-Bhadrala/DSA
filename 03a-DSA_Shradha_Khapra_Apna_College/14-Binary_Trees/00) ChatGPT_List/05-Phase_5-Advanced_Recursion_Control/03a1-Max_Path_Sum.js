/**
## Question:
1. We've to find the max possible sum that can be attained in a tree.

## Solution:
1. Simply, keep track of the maxSum seen and keep counting the sum.
2. If the currentSum > maxSum, then update the maxSum value.
*/

/**
## Error: In Approach.
1. I'm supposed to return the root.val + Math.max(ltSum, rtSum);
2. However, maintain the maxSum = Math.max(root.val + ltSum + rtSum,maxSum) separately.
3. I Can use Kadane's logic to avoid adding/checking negative numbers/root.val.
*/


function maxPathSum(root, maxSum = -Infinity) {
  if (!root)  0;

  let ltSum = maxPathSum(root.left, maxSum);
  let rtSum = maxPathSum(root.right, maxSum);

  let currentPathSum = ltSum + rtSum + root.val;

  return Math.max(currentPathSum, maxSum);

  // This code is returning the sum of all the nodes.
  // I need to return the maxSum of the path in a tree.
}

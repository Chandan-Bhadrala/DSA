/**
## Question:
1. We've to find the max possible sum that can be attained in a tree.

## Solution:
1. Simply, keep track of the maxSum seen and keep counting the sum.
2. If the currentSum > maxSum, then update the maxSum value.
*/

/**
## Improvement: In Approach.
1. Now, I'll only return: root.val + Math.max(ltSum, rtSum).
2. And I'll maintain a global maxSum separately.
3. I'll Kadane's logic in the next iteration of the code.
*/

/**
## Error: In Approach.
1. maxSum is primitive value and every call stack its own value of maxSum and it cannot be updated via. below code.
  1. So, either use an object, an array or a global value to update the maxSum.
2. Passing a primitive value into the parameter would've worked only, if the return statement had that parameter value.
  1. Then, maxSum value would've been updated for the call stack while returning back.
3. Issue with returning the maxSum is:
  1. I need to return currentPathSum too.
  2. So, I'd have to return {currentPathSum, maxSum} and then destructure this o/p on every recursive call to read.
  3. I've used an object in the return value because I need two different independent o/p's to propagate through the recursive calls.
*/

function maxPathSum(root, maxSum = -Infinity) {
  if (!root) return 0;

  // Adding maxSum to the function call to meet the function contract. And to maintain the global maxSum value.
  let ltSum = maxPathSum(root.left, maxSum); // Collecting the sum of the left branch.
  let rtSum = maxPathSum(root.right, maxSum); // Collecting the sum of the right branch.

  let currentPathSum = ltSum + rtSum + root.val;
  maxSum = Math.max(currentPathSum, maxSum); // Updating maxSum value.

  return root.val + Math.max(ltSum, rtSum); // Returning parent the maxSum obtained from either of the branch.
}

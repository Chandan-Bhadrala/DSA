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
## Improvement: In Approach.
1. So, as discussed previously. I need two return value, i.e., currentPathSum and maxSum.
2. So, I'll be maintaining the global variable for the maxSum and recursively passing around the currentPathSum.
*/

/**
## Error: In Approach.
1. I've to use Kadane's logic.
2. As I've to return **max possible sum**, so I've to exclude the paths which contributes negatively.
*/

function maxPathSum(root) {
  let maxSum = -Infinity; // Global variable to store the maxSum of the tree.

  // Helper function to calculate the pathSum.
  function pathSum(root) {
    if (!root) return 0;

    // Adding maxSum to the function call to meet the function contract. And to maintain the global maxSum value.
    let ltSum = pathSum(root.left); // Collecting the sum of the left branch.
    let rtSum = pathSum(root.right); // Collecting the sum of the right branch.

    let currentPathSum = ltSum + rtSum + root.val;
    maxSum = Math.max(currentPathSum, maxSum); // Updating maxSum value.

    return root.val + Math.max(ltSum, rtSum); // Returning parent the maxSum obtained from either of the branch.
  }

  // Calling the helper function.
  pathSum(root);

  // Returning the final value of the maxSum after traversing the whole tree.
  return maxSum;
}

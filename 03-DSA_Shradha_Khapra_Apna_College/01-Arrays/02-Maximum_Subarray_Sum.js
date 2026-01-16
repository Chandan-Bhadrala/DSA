/**
# Find maximum subarray Sum.

## Question:
## Solution Approach:
*/
// -----------------------------

function waysToClimbStairs(n) {
  // Base Case: for step = 0 or 1, we only have one way to reach to the step 0 or step 1.
  if (n == 0 || n == 1) return 1;

  // To reach the step n, we must be either at step n - 1 or n - 2.
  // So, to reach the step n from the step n - 1 or n - 2. We must know in how many ways we have reached to the step n - 1 or n - 2.
  // And finally the number of ways we can reach the step n is equal to the sum of the waysToClimbStairs(n - 1) + waysToClimbStairs(n - 2).
  return waysToClimbStairs(n - 1) + waysToClimbStairs(n - 2);
}

// --- Output:
console.log(waysToClimbStairs(7));

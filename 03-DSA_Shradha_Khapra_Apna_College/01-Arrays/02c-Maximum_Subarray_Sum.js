/**
# Find maximum subarray Sum.

## Question:
1. Find a contiguous slice of an array that has the largest sum.
2. Even **one single element** of the array can be considered as a sub-array.
 2.1. So, only if **one single array element** yields the maximum sum, we will simply consider that **single element** as a complete/whole part of the sub-array.

## Solution Approach:
*/

// -----------------------------

/**
Time Complexity: O(n): Kadane’s Algorithm.
1. Got to find the max sub-array sum in a single pass.
2. Thought is, if the currSum + arr[i] < arr[i], then reset the currSum = arr[i]

## Error: In approach.
1. I'm adding arr[i] to currSum again in the if check and then comparing it to the arr[i].
2. That is wrong.
*/

function maxSubArraySum(arr) {
  let currSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currSum = currSum + arr[i];

    // Reset the currSum, if the previous array sum decreases the value of the current arr[i].
    if (currSum + arr[i] < arr[i]) currSum = arr[i];

    // Update the value of the maxSum.
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}
// --- Output:
console.log(maxSubArraySum([1, 2, -2, 3, 4, -3, -9, 13, 5, 12]));

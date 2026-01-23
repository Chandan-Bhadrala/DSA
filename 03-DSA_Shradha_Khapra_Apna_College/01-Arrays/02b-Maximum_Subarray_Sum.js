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
Time Complexity: O(n^2).

## Improvement in code:
1. Now, I'll be considering all the possible sub-arrays.
*/

function maxSubArraySum(arr) {
  let sumArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;
    let maxSum = 0;

    for (let j = i; j < arr.length; j++) {
      currSum = currSum + arr[j];
      maxSum = Math.max(currSum, maxSum);
    }

     // Rather than pushing all the sub-arrays sum in the sumArr.
     // I'm only pushing the maxSum within the inner array pass.
    sumArr.push(maxSum);
  }

  return Math.max(...sumArr);
}

// --- Output:
console.log(maxSubArraySum([1, 2, -2, 3, 4, -3, -9, 13, 5, 12]));

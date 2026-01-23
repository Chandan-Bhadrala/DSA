/**
# Find maximum subarray Sum.

## Question:
1. Find a contiguous slice of an array that has the largest sum.
2. Even **one single element** of the array can be considered as a sub-array.
 2.1. So, only if **one single array element** yields the maximum sum, we will simply consider that **single element** as a complete/whole part of the sub-array.

## Solution Approach:
### Well, there are two approaches to solve this question.
1. Time Complexity: O(n^2), Use two pointers, i -> Starting index of the subarray and j -> iterates over the rest of the whole array to find the sum.
  1.1. Increments i on every one successful pass.
  1.2. Now you've the sum of the all sub-arrays. Thus, choose the sub-array with the maximum sum.
2. Time Complexity: O(n), Kadane’s Algorithm.
  2.1. In this algorithm, we keep adding numbers of the array from the very beginning.
  2.2. We keep two variables, one maxSum and the other is currSum.
    2.2.1. currSum -> We keep record of the sum of the left sub-array.
      2.2.1.1. We update our currSum value:
      - if we find that the **sum** of our "current single array element, i.e. arr[i]" and previous "currSum" is smaller than our "current single array element, i.e. arr[i]".
      - i.e., We start afresh on our subarray if our previous currSum is dragging arr[i] down.
    2.2.2. maxSum -> We update our maxSum value upon finding the maximum running sum/currSum value.
*/

// -----------------------------

/**
Time Complexity O(n^2):
Error: In Approach.
1. I'm only building and collecting sub-arrays starting from i and ending at arr.length.
2. ❌ I'm not including individual array elements. Which could yield as an maximum sub-array in itself.
3. ❌ I'm only including sub-array starting from beginning till the end.
  3.1. There might be a sub-array with maxSum in the middle.
  3.2. So, I need to consider all the permutations of the sub-array.
*/

/**
Time Complexity: O(n^2)

Error in approach:
1. I'm only building sub-arrays starting at index i and always ending at arr.length - 1 (suffix sums).
2. ❌ I'm not considering all intermediate sub-arrays (i … j).
3. ❌ I'm not considering single-element sub-arrays, which themselves can be the maximum subarray.
4. ❌ I'm assuming the maximum subarray must include the last element.
   4.1 But the maximum subarray can lie entirely in the middle.
   4.2 Hence, all possible (i … j) sub-arrays must be evaluated.
*/

function maxSubArraySum(arr) {
  let sumArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;
    for (let j = i; j < arr.length; j++) {
      currSum = currSum + arr[j];
    }
    sumArr.push(currSum);
  }

  return Math.max(...sumArr);
}

// --- Output:
console.log(maxSubArraySum([1, 2, -2, 3, 4, -3, -9, 13, 5, 12]));

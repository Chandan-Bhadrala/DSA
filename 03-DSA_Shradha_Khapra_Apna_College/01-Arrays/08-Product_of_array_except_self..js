/**
# Product of array except self.

## Question:
1. We are given an array and we are supposed to replace the array element with the product of the array leaving the one array element of that index from the product calculation.
2. We are supposed to do it in O(n) time complexity and O(1) space complexity.
3. We are not allowed to use divide operation.

## Solution Approach:
1. I'm thinking to use three pointers

*/

// -----------------------------

// ## Answer is found in a single pass.
function containerWithMostWater(arr) {
  let maxWaterArea = 0;

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let currentWaterArea = Math.min(arr[i], arr[j]) * (j - i);

    // Updating the maxWaterArea value upon finding the next best candidate.
    maxWaterArea = Math.max(maxWaterArea, currentWaterArea);

    // Shifting bounds
    if (arr[i] < arr[j]) i++;
    else j--;
  }

  return maxWaterArea;
}

// --- Output:
console.log(containerWithMostWater([9, 7, 5, 12, 0.5, 20, 3, 2, 20]));

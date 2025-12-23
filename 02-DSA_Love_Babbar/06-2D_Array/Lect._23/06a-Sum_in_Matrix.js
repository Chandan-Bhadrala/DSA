/**
# Sum in a Matrix.
Link:
https://leetcode.com/problems/sum-in-a-matrix/description/
## Question:
## Solution Approach (Brute Force) - Time complexity:
Finding max in one row: O(n)
Doing this for m rows: O(mn)
Repeat for n columns: O(mn²).

1. Iterate one array and find largest number within it push it in an another array.
    1.1. Delete that number from too from that array.
  2. Similarly find the largest number from the rest of the inner arrays and push it into the same another array.
    2.2. Delete those numbers too from that inner arrays.
  3. Take the largest number among the another new array and add that to the total sum.
  4. Keep repeating the step 1 and 2 till the inner array gets exhaust.
  5. Will use array splice method to remove the element.

*/
// -----------------------------

// ## Find Sum in a Matrix.
function sumMatrix(matrix) {
  let m = nums.length;
  let n = nums[0].length;
  let sum = 0;

  // Repeat for each column operation
  for (let step = 0; step < n; step++) {
    let pickedMax = -Infinity;

    // For each row
    for (let r = 0; r < m; r++) {
      let row = nums[r];

      // Find max element and its index in this row
      let maxVal = row[0];
      let maxIdx = 0;

      for (let i = 1; i < row.length; i++) {
        if (row[i] > maxVal) {
          maxVal = row[i];
          maxIdx = i;
        }
      }

      // Remove that max element from the row
      row.splice(maxIdx, 1);

      // Track the largest among all rows in this step
      pickedMax = Math.max(pickedMax, maxVal);
    }

    sum += pickedMax;
  }

  return sum;
}

// --- Output:
console.log(
  "Sum in Matrix ",
  sumMatrix([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ])
);

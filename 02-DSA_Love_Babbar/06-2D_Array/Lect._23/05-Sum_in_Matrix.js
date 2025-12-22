/**
# Sum in a Matrix.
Link:
https://leetcode.com/problems/sum-in-a-matrix/description/
## Question:
## Solution Approach:
  1. Iterate one array and find largest number within it push it in an another array.
    1.1. Delete that number from too from that array.
  2. Similarly find the largest number from the rest of the inner arrays and push it into the same another array.
    2.2. Delete those numbers too from that inner arrays.
  3. Take the largest number among the another new array and add that to the total sum.
  4. Keep repeating the step 1 and 2 till the inner gets exhaust.
*/
// -----------------------------

// 01. Create a 2D array. For given 1D array.
function findTarget(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // Iterate row iterator to access matrix[i][j] properly.
  for (let i = 0; i < rows; i++) {
    // Iterate col iterator to access matrix[i][j] properly.
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == target) return true;
    }
  }

  // Looped out of the matrix, i.e., never found the target value.
  return false;
}

// --- Output:
console.log(
  "Does target exists in the array? ",
  findTarget(
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],
    3
  )
);

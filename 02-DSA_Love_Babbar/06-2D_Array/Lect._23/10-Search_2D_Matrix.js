/**
# Rotate Array by 90 degree.
Link:
https://leetcode.com/problems/search-a-2d-matrix-ii/
## Question:
## Solution Approach:
  1. 
*/
// -----------------------------

// ## Staircase Search the target in a 2D array. Time Complexity: O(m + n)
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
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    3
  )
);

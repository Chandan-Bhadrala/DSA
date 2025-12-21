/**
# Find the target in the given 2D array.

## Question:
1. Take the 2D array and a target value to search.
2. Return boolean as a search result.
## Solution Approach:
  1.  
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

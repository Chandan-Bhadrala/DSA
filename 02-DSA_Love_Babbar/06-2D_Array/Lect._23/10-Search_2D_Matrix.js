/**
# Find Target. Level II. Staircase Search.
Link:
https://leetcode.com/problems/search-a-2d-matrix-ii/
## Question:
## Solution Approach:
  1. 
*/
// -----------------------------

// ## Staircase Search the target in a 2D array. Time Complexity: O(m + n)
function findTarget(matrix, target) {
  // Define boundary values.
  let rows = matrix.length - 1;
  let cols = matrix[0].length - 1;

  // Starting value of the iterators.
  let i = 0;
  let j = cols;

  // Used && operator instead of the || operator.
  // As the 2D dimension search space will collapse immediately the moment one iterator becomes negative or goes out of bound.
  while (j >= 0 && i <= rows) {
    if (matrix[i][j] == target) {
      console.log(i, j);
      return true;
    }

    // Move iterators in the stair case fashion.
    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
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
    9
  )
);

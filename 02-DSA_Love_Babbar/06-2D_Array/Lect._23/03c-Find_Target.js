/**
# Find the target in the given 2D array (Binary Search).
## Given matrix is sorted in ascending order.

## Question:
1. Take the 2D array and a target value to search.
2. Return boolean as a search result.
## Solution Approach (Binary Search):
  1. Will make the target comparison with the row's last column element.  
  2. If the last row element is smaller than the target value then, will increment the row value.
  3. Else will decrement the column value.
  4. The invariant here is:
    At any step, all elements left of col are smaller
    and all elements below row are larger
*/
// -----------------------------

// ## Binary Search the target in a 2D array. Time Complexity: O(log n)
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

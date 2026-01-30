/**
# Find the target in the given 2D array (Staircase Search).
1. Given matrix is sorted in ascending order.
2. Time Complexity: O(m + n) instead of O(m * n) as in a Linear search in 03a) Code. 

## Question:
1. Take the 2D array and a target value to search.
2. Return boolean as a search result.
## Solution Approach (Staircase Search):
  1. Will make the target comparison with the row's last column element.  
  2. If the last row element is smaller than the target value then, will increment the row value.
  3. Else will decrement the column value.
  4. The invariant here is:
    At any step, all elements left of col are smaller
    and all elements below row are larger
*/
// -----------------------------

// ## Staircase Search the target in a 2D array. Time Complexity: O(m + n)
function findTarget(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let row = 0;
  // let col = -1; // It doesn't access last element in JS. -1 access last array element in the Python.
  let col = cols - 1;

  while (row < rows && col >= 0) {
    let currValue = matrix[row][col];
    console.log(currValue);
    if (currValue == target) return true;
    if (currValue < target) {
      row++;
    } else {
      col--;
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
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    7
  )
);

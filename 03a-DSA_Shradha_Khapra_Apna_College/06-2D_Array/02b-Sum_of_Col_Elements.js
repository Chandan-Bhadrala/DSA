/**
# Find sum of column elements.

## Question:
  1. Traverse each col and add the elements and push the sum in a new 1D array.  
## Solution Approach:
  1.  
*/
// -----------------------------

// ## Function to calculate col-wise sum.
function colSum(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let sumMatrix = [];

  // Traverse matrix.
  for (let j = 0; j < cols; j++) {
    let colSum = 0;
    for (let i = 0; i < cols; i++) {
      colSum += matrix[i][j];
    }
    sumMatrix.push(colSum);
  }

  return sumMatrix;
}

// --- Output:
console.log(
    "Sum of Col elements:",
  colSum(
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],
    3
  )
);

/**
# Calculate sum of row elements.

## Question:
1. Calculate sum of each row and print the same for the each row.
## Solution Approach:
  1. Traverse each row and add the elements and push the sum in a new 1D array.  
*/
// -----------------------------

// ## Function to calculate row-wise sum.
function rowSum(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let sumMatrix = [];

  // Traverse matrix.
  for (let i = 0; i < rows; i++) {
    let rowSum = 0;
    for (let j = 0; j < cols; j++) {
      rowSum += matrix[i][j];
    }
    sumMatrix.push(rowSum);
  }

  return sumMatrix;
}

// --- Output:
console.log(
  "Sum of Row elements:",
  rowSum([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ])
);

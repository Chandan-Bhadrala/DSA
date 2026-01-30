/**
# Find largest row sum.

## Question:
1. Find the row whose elements sum is the largest among all the rows.

## Solution Approach:
1. 
*/
// -----------------------------

// ## Function to find the row with the largest element sum.
function largestSumRow(matrix) {
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
  console.log(...sumMatrix);
  console.log(sumMatrix);
  return Math.max(...sumMatrix);
}

// --- Output:
console.log(
  "Does target exists in the array? ",
  largestSumRow(
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],
  )
);

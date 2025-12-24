/**
# Segmented Sieve.

## Question:
1. Take the input and store it row-wise.
Input:
arr: [1, 2, 3, 4, 5, 6, 7, 8, 9], row: 3, col: 3
Output:
1 2 3
4 5 6
7 8 9
## Solution Approach:
  1.  
*/
// -----------------------------

// 01. Create a 2D array. For given 1D array.
function row_wise_Initialization(arr, rows, cols) {
  // Declared an empty array.
  let matrix = []; // To create a 2D array.

  let k = 0; // To iterate over the given 1D arr.

  // ## Initialize an array.
  // 1. For-loop to iterate over rows.
  for (let i = 0; i < rows; i++) {
    // 2. Declare an empty rows. To avoid undefined rows
    matrix[i] = [];

    // 3. For-loop to iterate over columns of the row.
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  return matrix;
}

// --- Output:
console.log(
  "2D Matrix:",
  row_wise_Initialization([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3)
);

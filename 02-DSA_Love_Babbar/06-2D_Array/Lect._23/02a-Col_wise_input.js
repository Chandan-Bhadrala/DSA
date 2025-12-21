/**
# Initialize and Access 2D Array.

## Question:
1. Take the input and store it col-wise.
Input:
arr: [1, 2, 3, 4, 5, 6, 7, 8, 9], row: 3, col: 3
Output:
1 4 7
2 5 8
3 6 9
## Solution Approach:
  1.  
*/
// -----------------------------

// ## Error in Approach:
// 1. I've to create rows first separately.
// 2. As of now I'm re-initializing row with an empty array again and again in the inner loop.

// 01. Create a 2D array. For given 1D array.
function col_wise_Initialization(arr, rows, cols) {
  // Declared an empty array.
  let matrix = []; // To create a 2D array.

  let k = 0; // To iterate over the given 1D arr.

  // ## Initialize an array.
  // 1. i (rows) and j (columns) are the iterators of the matrix.
  // 2. Control them to fill the matrix as per your liking.
  // 3. Fix the column iterator "j" and keep changing row iterator "i" in the inner loop to fill the matrix column-wise.

  // 1. For-loop to iterate over columns iterator "j".
  for (let j = 0; j < cols; j++) {
    // 2. For-loop to iterate over rows iterator "i".
    for (let i = 0; i < rows; i++) {

      // 3. Declare an empty rows (empty inner arrays). To avoid undefined rows.
      matrix[i] = [];

      // Finally fill the matrix at the chosen "i" and "j" places.
      matrix[i][j] = arr[k];
      k++;
    }
  }
  return matrix;
}

// --- Output:
console.log(
  "2D Matrix:",
  col_wise_Initialization([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3)
);

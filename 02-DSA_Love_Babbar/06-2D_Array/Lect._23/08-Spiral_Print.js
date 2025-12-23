/**
# Sum in a Matrix.
Link:
https://leetcode.com/problems/spiral-matrix/description/
## Question:
## Solution Approach:
  1. 
*/
// -----------------------------

// ## Print array elements in a spiral fashion.
function spiralPrint(matrix) {
  // Define boundaries.
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  let resultantArr = [];
  while (top <= bottom || left <= right) {
    // Print top boundary row
    if (top <= bottom) {
      for (let j = left; j <= right; j++) {
        resultantArr.push(matrix[top][j]);
      }
      top++;
    }

    // Print right boundary column
    if (right >= left) {
      for (let i = top; i <= bottom; i++) {
        resultantArr.push(matrix[i][right]);
      }
      right--;
    }

    // Print bottom boundary row
    if (bottom >= top) {
      for (let j = right; j >= left; j--) {
        resultantArr.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // Print left boundary column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        resultantArr.push(matrix[i][left]);
      }
      left++;
    }
  }

  return resultantArr;
}

// --- Output:
console.log(
  "Array elements printed in a spiral fashion:",
  spiralPrint([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
  ])
);

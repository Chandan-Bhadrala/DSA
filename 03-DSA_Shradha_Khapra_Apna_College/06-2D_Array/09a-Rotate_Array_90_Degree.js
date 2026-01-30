/**
# Rotate Array by 90 degree.
Link:
https://leetcode.com/problems/rotate-image/
## Question:
## Solution Approach:
  1.
*/
// -----------------------------

// ## Rotate Array by 90 degrees - Brute force, use another array for rotation.
function rotateArrayBy90(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // Defining boundaries.
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let i = 0;

  let resultantArr = [];

  // Define number of rows of the resultantArr before accessing them.
  for (let i = 0; i < rows; i++) {
    resultantArr[i] = [];
  }

  while (right >= 0) {
    for (let k = top, j = 0; k <= bottom; k++, j++) {
      resultantArr[k][right] = matrix[i][j];
    }
    right--;
    i++;
  }
  return resultantArr;
}

// --- Output:
console.log(
  "Rotate given array by 90 degrees:",
  rotateArrayBy90([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ])
);

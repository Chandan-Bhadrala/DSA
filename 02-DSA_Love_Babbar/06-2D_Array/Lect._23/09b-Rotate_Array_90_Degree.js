/**
# Rotate Array by 90 degree.
Link:
https://leetcode.com/problems/rotate-image/

Tutorial Video: Awesome Explanation. Must Watch.
https://www.youtube.com/watch?v=Z0R2u6gd3GU

## Question:
1. Rotate Matrix in-place.
  1.1. Space-Complexity: O(1)
## Solution Approach:
1. First Transpose Matrix.
  1.1. Start swapping elements only after the diagonal. 
2. Then reverse each row of the matrix.
3. After doing first two steps you'll get your matrix rotated by 90 degrees.
*/
// -----------------------------

// ## Rotate Array by 90 degrees - in-place rotation, intelligent and practical solution. Production grade or production needed.
// Production needed in-place manipulation. As array could easily contains millions or billions of entry.
// So, creating a copy of an array could be memory in-efficient or costly.
function rotateArrayBy90(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // 01. Transpose Array.
  for (let i = 0; i < rows; i++) {
    for (let j = cols - 1; j > i; j--) {
      // Swap
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 02. Reverse each array row.
  for (let i = 0; i < rows; i++) {
    for (let j = 0, k = cols - 1; j < k; j++, k--) {
      [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]];
    }
  }
  return matrix;
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

/**
# Sum in a Matrix.
Link:
https://leetcode.com/problems/sum-in-a-matrix/description/
## Question:
## Solution Approach (Sort and remove) - Time Complexity: O(mn log n).
  1. 

*/
// -----------------------------
// Wrote and debug myself. Yaaay.
// ## Find Sum in a Matrix.
function sumMatrix(matrix) {
  // map function is changing the original array. Because map function is passing the value and which in this case is a reference to the inner-array.
  // So, sort is changing the original inner array as sort has **reference** to the shared array.
  // If the inner element of the array would have been a number primitive instead of being an array then map would have also passed numbers as **value** and reference issue would not have been there for number primitive.
  matrix.map((arr) => arr.sort());

  let rows = matrix.length;
  let cols = matrix[0].length;
  let largestElementArr = [];
  let sum = 0;
  // Scan sorted nested array to extract last largest number.
  for (let j = cols - 1; j >= 0; j--) {
    for (let i = 0; i < rows; i++) {
      let largestElement = matrix[i][j];
      largestElementArr.push(largestElement);
    }
    sum += Math.max(...largestElementArr);
    largestElementArr = [];
  }
  return sum;
}

// --- Output:
console.log(
  "Sum in Matrix ",
  sumMatrix([
    [2, 5, 1],
    [2, 9, 3],
    [0, 7, 4],
  ])
);

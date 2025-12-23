/**
# Sum in a Matrix.
Link:
https://leetcode.com/problems/sum-in-a-matrix/description/
## Question:
## Solution Approach (Sort and remove) - Time Complexity: O(mn log n).
  1. 

*/
// -----------------------------

// ## Find Sum in a Matrix.
function sumMatrix(matrix) {

  // map function is changing the original array. Because map function is passing the value and which in this case is a reference to the inner-array.
  // So, sort is changing the original inner array as sort has reference to the shared array via. reference.
  // If the inner element of the array would have been a numbers then map would have also passed numbers as value but reference issue would not have been there for numbers.
  matrix.map((arr) => arr.sort());


  
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

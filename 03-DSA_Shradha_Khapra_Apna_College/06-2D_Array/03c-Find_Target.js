/**
# Find the target in the given 2D array (Binary Search).
## Given matrix is sorted in ascending order.
Link:
https://leetcode.com/problems/search-a-2d-matrix/

## Question:
1. Take the 2D array and a target value to search.
2. Return boolean as a search result.
## Solution Approach (Binary Search):
  1. Will consider the 2D sorted matrix as a flattened sorted 1D array.
  2. Keep start = matrix[0][0] value and end = matrix[lastRow][lastColumn].
    2.1. Rather Keep start = 0 index and end = lastIndex.
    2.2. And apply Binary search on sorted indices.
  3. mid = Math.floor((start + end)/2).
  4. midValue = matrix[Math.floor(mid/n)][mid%n]
    4.1. Reason for above rowIndex and columnIndex values is written in notes in hashnode.
    4.2.You can consider theatre seating arrangement to understand the reasoning behind the rowIndex and columnIndex values.
    4.3. Assume theatre has seats in 1 dimension only.
    4.4. 4 seats in every row section and you got ticket for seat 19.
    4.5. How would you find your seat.
    4.6. Row section Int(19/4) = 4.
    4.7. Seat in Row section, 19%4 = 3.

*/
// -----------------------------

// ## Binary Search the target in a 2D array. Time Complexity: O(log n)
function findTarget(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let start = 0; // First index.
  let end = rows * cols - 1; // Last Index to perform binary search.

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let midValue = matrix[Math.floor(mid / cols)][mid % cols];

    // Return true if target value is found.
    if (midValue == target) {
      return true;
    }

    // Modify value of start or end to continue the search.
    if (midValue > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // Looped out of the matrix, i.e., never found the target value.
  return false;
}

// --- Output:
console.log(
  "Does target exists in the array? ",
  findTarget(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3
  )
);

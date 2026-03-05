/**
# Count occurrences of the given element in the array.

## Question:
## Solution Approach:
*/
// -----------------------------

// Linear Search
function countOccurrences({ arr, target, i = 0, count = 0 }) {
  // Base Case: To terminate the recursive loop and to return the count value.
  if (i >= arr.length) return count;

  if (arr[i] == target) count++;

  // Send updated value of the count to the next recursive function call during the stacking phase of the recursion.
  // And helps base case propagate the accumulated value of the count variable during the unwinding phase of the recursion.
  return countOccurrences({ arr, target, i: i + 1, count });
}

// --- Output:
console.log(
  countOccurrences({ arr: [1, 2, 2, 2, 3, 3, 4, 4, 7, 7, 7, 9, 9], target: 7 })
);

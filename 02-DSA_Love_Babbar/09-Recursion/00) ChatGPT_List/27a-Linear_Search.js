/**
# Find target element in an array.

## Question:
## Solution Approach:
*/
// -----------------------------

// Linear Search: Tail Recursion
function searchTarget(arr, target, i = 0) {
  // Base case to terminate the recursive loop and to let the calling function know that whole array has been traversed and the target has not been found.
  if (i === arr.length) return -1;

  // Create an early return upon finding the target value.
  if (arr[i] == target) return i;

  // return the return value from the deeper recursive calls.
  return searchTarget(arr, target, i + 1);
}

// --- Output:
console.log(searchTarget([1, 2, 2, 2, 3, 3, 4, 4, 7, 7, 7, 9, 9], 7));

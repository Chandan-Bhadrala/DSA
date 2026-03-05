/**
# Find target element in an array.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
Error: In approach
1. I was mutating the local variable (start or end) of the current frame stack and then passing the value of the start and end to the next recursive call stack.
2. I shall never mutate the variables of the current frame stack before passing those variables new value to the next recursive call.
*/

// Binary Search.
function searchTarget(arr, target, start = 0, end = arr.length - 1) {
  // Base Case: Terminates the recursive loop and returns -1, to indicate the search value was not found.
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  // If target is found, return index of the target value.
  if (arr[mid] == target) return mid;

  // Search the left half.
  if (arr[mid] > target) {
    // Return statement to propagate the -1 return value from the base case, in case target is not found or to propagate the mid value to describe the index of the target value.
    return searchTarget(arr, target, start, (end = mid - 1));
  } else {
    // Return statement to propagate the -1 return value from the base case, in case target is not found or to propagate the mid value to describe the index of the target value.
    return searchTarget(arr, target, (start = mid + 1), end);
  }
}

// --- Output:
console.log(searchTarget([1, 2, 3, 5, 7, 9, 11], 7));

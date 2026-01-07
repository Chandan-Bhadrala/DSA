/**
# Search target in the given array.

## Question:
## Solution Approach:
*/
// -----------------------------

// Binary Search:
function searchTarget(arr, target, start = 0, end = arr.length - 1) {
  // Base Case:
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  // Early return on finding the target.
  if (arr[mid] == target) return mid;

  if (target > arr[mid]) {
    // Let there be a search for various mid values and if the target is found, then let return statement return the answer to the calling function.
    return searchTarget(arr, target, mid + 1, end);
  } else {
    return searchTarget(arr, target, start, mid - 1);
  }
}

// --- Output:
console.log(searchTarget([1, 2, 3, 4, 5], 1));

/**
# Search first occurrence of the target in the given array.

## Question:
## Solution Approach:
*/
// -----------------------------

// Binary Search:
function firstOccurrence(arr, target, start = 0, end = arr.length - 1) {
  // Base Case:
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (target == arr[mid]) {
    // Update the return value upon unwinding.
    // firstIndex holds the return value of the function.
    let firstIndex = firstOccurrence(arr, target, start, mid - 1);

    return firstIndex != -1 ? firstIndex : mid;
  }

  if (target > arr[mid]) {
    // Below statements are only propagating the return values provided by the base or success case in the unwinding phase.
    // However, initially they are trying to shrink the search space while stacking phase.
    return firstOccurrence(arr, target, mid + 1, end);
  } else {
    return firstOccurrence(arr, target, start, mid - 1);
  }
}

// --- Output:
console.log(firstOccurrence([1, 2, 2, 3, 4, 4, 5], 4));

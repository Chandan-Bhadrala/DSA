/**
# Search last occurrence of the target in the given array.

## Question:
## Solution Approach:
*/
// -----------------------------

// Binary Search:
function lastOccurrence(arr, target, start = 0, end = arr.length - 1) {
  // Base Case:
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] == target) {
    // Search the right side further for the rightmost occurrence of the target.
    let lastIndex = lastOccurrence(arr, target, mid + 1, end);

    // If we found a better result update the older result.
    return lastIndex != -1 ? lastIndex : mid;
  }

  // If we haven't found the result yet, keep on shrinking boundaries to search the target till base case is hit.
  // return statement is returning the value received from the base case or from the success case.
  if (arr[mid] > target) {
    return lastOccurrence(arr, target, start, mid - 1);
  } else {
    return lastOccurrence(arr, target, mid + 1, end);
  }
}

// --- Output:
console.log(lastOccurrence([1, 2, 2, 3, 4, 4, 5], 4));

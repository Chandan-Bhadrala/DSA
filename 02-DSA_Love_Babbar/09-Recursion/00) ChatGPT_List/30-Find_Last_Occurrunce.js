/**
# Find first occurrence of an element in array.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
# Count occurrences of the given element in the array.

## Question:
## Solution Approach:
*/
// -----------------------------

// Binary Search
function lastOccurrence(
  arr,
  target,
  start = 0,
  end = arr.length - 1,
  lastIndex = -1
) {
  // Base Case: Terminates the recursive loop and it is not >= but > comparison as search shall continue even for the "start = end" case.
  if (start > end) return lastIndex;

  // Compute mid.
  let mid = Math.floor((start + end) / 2);

  // Passing lastIndex to every recursive call will make sure, lastIndex value reaches the base case.
  // Return statement in all three below branches will propagate the value decided by the base case in the unwinding phase of the recursion.
  if (arr[mid] == target) {
    // Still search the left space for the last index of the target and store the current location of the target in a variable.
    lastIndex = mid;
    return lastOccurrence(arr, target, mid + 1, end, lastIndex);
  } else if (arr[mid] > target) {
    return lastOccurrence(arr, target, start, mid - 1, lastIndex);
  } else if (arr[mid] < target) {
    return lastOccurrence(arr, target, mid + 1, end, lastIndex);
  }
}

// --- Output:
console.log(lastOccurrence([1, 2, 2, 2, 3, 3, 4, 4, 7, 7, 7, 9, 9], 2));

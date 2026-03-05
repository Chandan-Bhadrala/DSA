/**
# Count occurrences of the given element in the array.

## Question:
## Solution Approach:
*/
// -----------------------------

// Binary Search
function countOccurrences(arr, target) {
  // Find the First Occurrence with the help of a helper function.
  const firstIndex = firstOccurrence(arr, target);

  // Early return upon target not present in the array.
  if (firstIndex == -1) return 0;

  // Find the Last Occurrence with the help of a helper function.
  const lastIndex = lastOccurrence(arr, target);

  return lastIndex - firstIndex + 1;
}

// Helper Function 1:
function firstOccurrence(
  arr,
  target,
  start = 0,
  end = arr.length - 1,
  firstIndex = -1
) {
  // Base Case: Terminates the recursive loop and it is not >= but > comparison as search shall continue even for the start = end case.
  if (start > end) return firstIndex;

  // Compute mid.
  let mid = Math.floor((start + end) / 2);

  // Passing firstIndex to every recursive call will make sure, firstIndex value reaches the base case.
  // Return statement in all three below branches will propagate the value decided by the base case in the unwinding phase of the recursion.
  if (arr[mid] == target) {
    // Still search the left space for the first index of the target and store the current location of the target in a variable.
    firstIndex = mid;
    return firstOccurrence(arr, target, start, mid - 1, firstIndex);
  } else if (arr[mid] > target) {
    return firstOccurrence(arr, target, start, mid - 1, firstIndex);
  } else if (arr[mid] < target) {
    return firstOccurrence(arr, target, mid + 1, end, firstIndex);
  }
}
// ---
// Helper Function 2:
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

// ---
// ---
// --- Output:
console.log(countOccurrences([1, 2, 2, 2, 3, 3, 4, 4, 7, 7, 7, 9, 9], 0));

// console.log(firstOccurrence([1, 2, 2, 2, 3, 3, 4, 4, 7, 7, 7, 9, 9], 2));

// console.log(lastOccurrence([1, 2, 2, 2, 3, 3, 4, 4, 7, 7, 7, 9, 9], 2));

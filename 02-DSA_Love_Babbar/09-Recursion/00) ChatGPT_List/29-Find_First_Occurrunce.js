/**
# Find last occurrence of an element in array.

## Question:
## Solution Approach:
*/
// -----------------------------

// Binary Search
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

// --- Output:
console.log(firstOccurrence([1, 2, 2, 2, 3, 3, 4, 4, 7, 7, 7, 9, 9], 2));

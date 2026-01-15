/**
# Check if given array is sorted or not.

## Question:
## Solution Approach:
*/
// -----------------------------

function isSorted(arr, n = arr.length - 1) {
  // Base case: array of size 0 or 1 is sorted
  if (n <= 1) return true;

  // If last two elements are not in ascending order
  if (arr[n - 2] > arr[n - 1]) return false;

  // Recursive call for remaining array
  return isSorted(arr, n - 1);
}

// --- Output:
console.log(isSorted([1, 2, 3, 4, 7, 5]));

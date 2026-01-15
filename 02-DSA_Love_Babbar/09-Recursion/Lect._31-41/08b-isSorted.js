/**
# Check if given array is sorted or not.

## Question:
## Solution Approach:
*/
// -----------------------------

function isSorted(arr, n = arr.length ) {
  // Base case: array of size 0 or 1 is definitely sorted
  if (n == 0 || n == 1) return true;

  return arr[n - 1] >= arr[n - 2] && isSorted(arr, n - 1);
}

// --- Output:
console.log(isSorted([1, 2, 3, 4, 7, 5]));

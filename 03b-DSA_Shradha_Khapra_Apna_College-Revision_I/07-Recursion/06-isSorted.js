/**
# Check if array is sorted or not.

## Question:
## Solution:

## DSA intuition takeaway
1. Recursion = “check one step + trust recursion for the rest”
2. Base case usually means “array size 1 or end reached”
*/
// -----------------------------

function isSorted(arr, n = 0) {
    // Base case for the empty or the array with the one element.
    // Or if the iterator n has reached the length of the array.
  if (arr.length <= 1 || n == arr.length - 1) return true;

  if (arr[n] > arr[n + 1]) return false;
  return isSorted(arr, n + 1);
}

// --- Output:
console.log(isSorted([3, 4, 5, 7, 9, 13]));

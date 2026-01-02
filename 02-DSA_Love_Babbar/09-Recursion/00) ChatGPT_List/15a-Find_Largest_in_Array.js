/**
# Find maximum element in an array

## Question:
## Solution Approach:
*/
// -----------------------------

// Linear Search.
function largestElement(arr, i = 0, max = arr[0]) {
  // Base case:
  if (i >= arr.length) return;

  i++;

  if (arr[i] > max) max = arr[i];

  largestElement(arr, i, max);

  return max;
}

// --- Output:
console.log(largestElement([1, 3, 5, 7]));

/**
## Recursive Call Frame Stacking
f(i=0)
f(i=1)
f(i=2)
f(i=3)

## Unwinding Phase
f(i=3)
f(i=2)
f(i=1)
f(i=0)
*/

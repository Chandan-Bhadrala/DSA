/**
# Find maximum element in an array

## Question:
## Solution Approach:
*/
// -----------------------------

// Linear Search.
function largestElement(n, i = 0, max) {
  // Base case:
  if (i >= n.length) return;

  max = n[i];
  i++;

  if (n[i] > max) max = n[i];

  largestElement(n, i++, max);

  return max;
}

// --- Output:
console.log(largestElement([1, 3, 5, 7, 9, 11]));

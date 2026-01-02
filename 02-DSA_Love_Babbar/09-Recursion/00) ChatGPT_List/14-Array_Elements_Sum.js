/**
# Find sum of array elements.

## Question:
## Solution Approach:
*/
// -----------------------------

function arrayElementsSum(n) {
  // Base Case: stop recursive loop and seed a value.
  if (n.length == 0) return 0;

  // Extract the last element and reduce the array.
  let lastElement = n.pop();

  // Take the lastElement from the stack frame and add it to the return value.
  // And further return it in the upward direction, till it reaches the caller function.
  return lastElement + arrayElementsSum(n);
}

// --- Output:
console.log(arrayElementsSum([1, 2, 3]));

/**
# Print array elements in reverse.

## Question:
## Solution Approach:
*/
// -----------------------------

function printArrayElementsReverse(n) {
  // Base Case:
  if (n.length == 0) return;

  // Extract lastElement and reduce array size.
  let lastElement = n.pop();

  console.log(lastElement);
  printArrayElementsReverse(n);
}

// --- Output:
printArrayElementsReverse([1, 2, 3]);

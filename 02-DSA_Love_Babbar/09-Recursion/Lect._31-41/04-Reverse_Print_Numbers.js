/**
# Print Numbers till N in reverse order.

## Question:
## Solution Approach:
*/
// -----------------------------

function printNumbersReverse(n) {
  // Base case: Stop recursive call at n == 0.
  if (n == 0) return;

  console.log(n);
  // Call recursive call stack with reduced n to make n reach to the base case value.
  printNumbersReverse(n - 1);
}

// --- Output:
printNumbersReverse(9);

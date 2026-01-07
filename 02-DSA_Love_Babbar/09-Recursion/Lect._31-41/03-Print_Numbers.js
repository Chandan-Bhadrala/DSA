/**
# Print Numbers till N.

## Question:
## Solution Approach:
*/
// -----------------------------

function printNumbers(n) {
  // Base Case: n == 0.
  if (n == 0) return; // Print 1 -> N
  // Base case shall do no other work than returning a seed value and stopping the recursive loop.
  // if (n == 0) return console.log(0); // Print 0 -> N

  // Create call stacks with the knowledge of their n value.
  // Use that n value while unwinding to print that n.
  printNumbers(n - 1);
  console.log(n);
}

// --- Output:
printNumbers(9);

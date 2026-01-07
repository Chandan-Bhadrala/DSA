/**
# Factorial of N.

## Question:
## Solution Approach:
*/
// -----------------------------

function factorial(n) {
  // Base case: Seeds return value of 1.
  if (n == 0) return 1;


  // Initially we are creating frame stacks which only have memory of the value of n for them.
  // And while unwinding we are using the return value of the deeper recursion to multiply it with the current value of n.
  // We are doing so, till we reach to the original value of n and then finally multiply and return the value to the caller function.
  return n * factorial(n - 1);
}

// --- Output:
console.log(factorial(8));

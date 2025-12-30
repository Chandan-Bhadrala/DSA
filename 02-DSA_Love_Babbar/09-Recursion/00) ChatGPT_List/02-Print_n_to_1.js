/**
# Print n to 1.

## Question:
## Solution Approach:
*/
// -----------------------------

function print_N(n) {
  // Base case to terminate the recursive-loop.
  if (n == 0) {
    return;
  }

  // Print before creating the recursive call stack.
  console.log(n);
  print_N(n - 1); // Tail Recursion.
  // Upon unwinding the call stack do nothing.
}

// --- Output:
print_N(9);

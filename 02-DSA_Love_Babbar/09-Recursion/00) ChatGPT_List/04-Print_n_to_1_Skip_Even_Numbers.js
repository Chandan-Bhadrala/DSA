/**
# Print numbers from n to 1 skipping even numbers

## Question:
## Solution Approach:
*/
// -----------------------------

function print_n_skip_even(n) {
  // Base case, only to terminate the recursive-loop.
  if (n == 0) {
    return;
  }

  if (n % 2 == 1) {
    console.log(n);
  }

  // Tail Recursion to perform action before stacking "recursive function call stacks".
  print_n_skip_even(n - 1);
}

// --- Output:
print_n_skip_even(9);

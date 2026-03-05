/**
# Print numbers from 1 to n skipping odd numbers.

## Question:
## Solution Approach:
*/
// -----------------------------
/**
Improvement: In this Approach.
1. Base case is now only responsible for terminating the loop of recursive-call-stack.
2. Business logic is responsible for checking whether number is odd or even before printing.
3. No responsibility overlap.
 */
function print_n_skip_odd(n) {
  // Base case to terminate the recursive-loop.
  if (n == 0) {
    return;
  }

  // Head Recursion to perform action while unwinding recursive function call stack.
  print_n_skip_odd(n - 1);

  if (n % 2 == 0) {
    console.log(n);
  }
}

// --- Output:
print_n_skip_odd(9);

/**
## A comment from the ChatGPT.

## One line you should keep forever:
  - A good base case is boring.
  - If it is interesting, it’s doing too much.

Your base case here is perfectly boring — and that’s a compliment.
*/
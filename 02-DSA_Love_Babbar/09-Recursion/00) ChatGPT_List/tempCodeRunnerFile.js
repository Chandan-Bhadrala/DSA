/**
# Print 1 to n.

## Question:
## Solution Approach:
*/
// -----------------------------

function print_N(n) {
  // 01. Base Case: Recursive-loop termination condition.
  if (n == 1) {
    return 1;
  }

  // 02a. Recursive Case: Call main function with smaller argument value, till we reach to the base case condition value.

  // 02b. We will keep building stack till 9, 8, 7, 6, ..., 2 and finally 1 (via base case).
  print_N(n - 1);

  // 03. At the end of the base case, we will start printing the values of the n in the LIFO fashion. While unwinding the stack.
  console.log(n);
}
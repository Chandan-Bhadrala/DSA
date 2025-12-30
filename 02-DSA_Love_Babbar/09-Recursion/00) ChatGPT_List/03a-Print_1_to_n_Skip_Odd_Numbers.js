/**
# Print numbers from 1 to n skipping odd numbers.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
Error: In Approach.
1. Minor Error.
  1.1. Here problem is to print 1 to n and skip odd.
2. I've skipped odd number 1 separately in the base case.
  2.1. This is mixing of the responsibility.
  2.2. Base case shall only be used to terminate and handover the control to call stack for unwinding of the recursive functions call stacks.
3. However, I've given it additional responsibility to not print 1 as it is an odd number.
4. Rest of the responsibility to not print odd number is with if check in the body.
5. So, excluding odd number responsibility is mixed.
  5.1. Which is not a good coding practice.
  5.2. One Responsibility one code block.
 */
function print_n_skip_odd(n) {
  // Base case to terminate the recursive-loop.
  if (n == 1) {
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

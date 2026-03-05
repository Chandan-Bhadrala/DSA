/**
# Print sum of first n natural numbers.

## Question:
## Solution Approach:
*/
// -----------------------------

function sum_of_n_numbers(n) {
  let result = 0;
  // Base case, only to terminate the recursive-loop.
  if (n == 0) {
    return result;
  }

  result = sum_of_n_numbers(n - 1);

  // Head recursion will start adding numbers from 1 onwards till n (1 + 2 + 3 + 4 ... so on till n).

  // Returning result to the pending recursive call stacks.
  // Pending recursive call stacks are adding the n into the result.
  return (result += n);
}

// --- Output:
console.log(sum_of_n_numbers(4));

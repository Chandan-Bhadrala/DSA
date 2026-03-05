/**
# Sum of digits of a number.

## Question:
## Solution Approach:
*/
// -----------------------------

// Trial 1: ❌ Failed 
function sum_of_digits(n, sum = 0) {
  // Base Case: Terminate the recursive loop and seed initial value for sum-> 0.
  if (n <= 0) {
    return 0;
  }

  // In every recursion I should be getting trimmed out n
  sum += n % 10;

  // Recursive calls are returning nothing. But I need them to return trimmed out n.
  // And I need sum to act as a reference like an array and not get re-initialized in every recursion call.
  sum_of_digits(Math.floor(n / 10));

  // How to make recursion return sum and as well trimmed out n?
  return sum;
}

// --- Output: console.log(sum_of_digits(779));

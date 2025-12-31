/**
# Count number of digits in a number.

## Question:
## Solution Approach:
*/
// -----------------------------

function countDigits(n) {
  // Base Case: n < 0. Base case will stop recursion-loop and seed initial count value.
  if (n <= 0) return 0;

  return countDigits(Math.floor(n / 10)) + 1;
}

// --- Output:
console.log(countDigits(99));

/**
f(0) = 0
f(1) = return f(0) + 1;
f(2) = return f(1) + 1;
f(3) = return f(2) + 1;
*/

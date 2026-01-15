/**
# Print Fibonacci Series.

## Question:
## Solution Approach:
*/
// -----------------------------

// ## Printing Fibonacci series.
// - Previously, I've written fibonacci in a linear way.
// - Write now, I'm writing its code in the recursive way.
function fibonacciNthTerm(n) {
  // Base Case
  if (n == 0 || n == 1) return n;

  return fibonacciNthTerm(n - 1) + fibonacciNthTerm(n - 2);
}

// --- Output:
console.log(fibonacciNthTerm(9));

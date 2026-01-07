/**
# Print Fibonacci Series.

## Question:
## Solution Approach:
*/
// -----------------------------

// Printing Fibonacci series.
function printFibonacciSeries(n, n1 = 0, n2 = 1) {
  // Base Case: n == 0. Base case returns the accumulated value of the n1.
  if (n == 0) return n1;

  console.log(n1, n2);
  return printFibonacciSeries(n - 1, n2, n1 + n2);
}

// --- Output:
console.log(printFibonacciSeries(9));

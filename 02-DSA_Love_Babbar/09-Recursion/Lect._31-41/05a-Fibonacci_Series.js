/**
# Print Fibonacci Series.

## Question:
## Solution Approach:
*/
// -----------------------------

// Printing nth Fibonacci number.
function printFibonacciSeries(n, n1 = 0, n2 = 1) {
  // Base Case: n == 0. Base case returns the accumulated value of the n1.
  if (n == 0) return n1;

  // Accumulated value of the base case at the time of the base case keep getting bubbled up, till it reaches the caller function.
  return printFibonacciSeries(n - 1, n2, n1 + n2);
}

// --- Output:
console.log(printFibonacciSeries(3));

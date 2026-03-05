/**
# Print Fibonacci series till n terms.

## Question:
## Solution Approach:
*/
// -----------------------------

// Linear Search
function printFibonacciSeries(n, i = 0, n1 = 0, n2 = 1) {
  // Base Case: Terminates the recursive loop when iterator i == n.
  if (i == n) return n1;

  console.log(n1);
  // Return accumulated value of sum, at the time base case gets hits.
  return printFibonacciSeries(n, i + 1, n2, n1 + n2);
}

// --- Output:
console.log(printFibonacciSeries(9));

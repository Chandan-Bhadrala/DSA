/**
# Fibonacci number (nth term).

## Question:
## Solution Approach:
*/
// -----------------------------

// Linear Search
function FibonacciNumber(n, i = 0, n1 = 0, n2 = 1, sum = n1 + n2) {
  // Base Case: Terminates the recursive loop when iterator i == n.
  if (i == n) return n1;

  console.log(n1, n2, sum);
  // Return accumulated value of sum, at the time base case gets hits.
  return FibonacciNumber(n, i + 1, n2, sum, n1 + n2);
}

// --- Output:
console.log(FibonacciNumber(9));

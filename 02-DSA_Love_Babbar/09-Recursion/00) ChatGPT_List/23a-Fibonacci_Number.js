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

/**
## While Stacking
Frame Stack 1:
n=9, i=0, n1=0, n2=1, sum=1;

Frame Stack 2:
n=9, i=1, n1=1, n2=1, sum=prevn1 + prevn2; // Sum has previous value of n1 & n2 rather than new updated values of n1 & n2.
// That's why the error

Frame Stack 3:
n=9, i=0, n1=0, n2=1, sum=;

---
## While Unwinding
Frame Stack 3:
Frame Stack 2:
Frame Stack 1:

*/
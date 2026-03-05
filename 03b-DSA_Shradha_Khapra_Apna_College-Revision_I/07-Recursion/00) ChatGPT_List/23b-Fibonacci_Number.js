/**
# Fibonacci number (nth term).

## Question:
## Solution Approach:
*/
// -----------------------------

/**
Improvement in Code:
1. Every following recursive call gets the arguments value of the current stack.
2. Above single line has all the reasoning and thought process required to derive the answer.
3. Try solving this question again to re-learn the concept stated by the point 1.
*/
function FibonacciNumber(n, i = 0, n1 = 0, n2 = 1) {
  // Base Case: Terminates the recursive loop when iterator i == n.
  if (i == n) return n1;

  console.log(n1, n2);
  // Return accumulated value of sum, at the time base case gets hits.
  return FibonacciNumber(n, i + 1, n2, n1 + n2);
}

// --- Output:
console.log(FibonacciNumber(9));

/**
## While Stacking
Frame Stack 1:
n=9, i=0, n1=0, n2=1;

Frame Stack 2:
n=9, i=1, n1=n2=1, n2=1(n1+n2);

Frame Stack 3:
n=9, i=2, n1=n2=1, n2=2(n1+n2);

Frame Stack 4:
n=9, i=3, n1=n2=2, n2=3(n1+n2);
---
## While Unwinding
Frame Stack 3:
Frame Stack 2:
Frame Stack 1:

*/

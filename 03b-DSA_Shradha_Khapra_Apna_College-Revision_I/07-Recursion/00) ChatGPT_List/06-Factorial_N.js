/**
# Factorial of N.

## Question:
## Solution Approach:
*/
// -----------------------------

function factorial(n) {
  // Base case to seed a value and to terminate the recursion call stack loop.
  if (n == 1) return 1;


  // factorial(n-1) for the very first time, will be equal to 1 as returned by the factorial(1) (Our Base Case).
  // For next unwound recursion call factorial(n - 1) will be replaced by 1 and n will be 2.
  // And this way result will be built upon unwinding of the waiting recursion call stacks.
  return factorial(n - 1) * n;
}

// --- Output:
console.log(factorial(10));

/**
## Comment Improvement by ChatGPT.
---
## A more precise phrasing would be:
factorial(n-1) resolves to 1 only after the base case is reached, and then its return value is used while the call stack unwinds.
*/
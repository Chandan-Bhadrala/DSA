/**
# Sum of digits of a number.

## Question:
## Solution Approach:
Requirement: I need recursive call to either return sum or the digits.
1. If I make recursion call to return sum, then I can return that sum to the main calling function too.
*/
// -----------------------------

function sum_of_digits(n, sum = 0) {
  // Base Case: Terminate the recursive loop and seed initial value for sum-> 0.
  if (n <= 0) {
    return;
  }

  // Collect digits to add to the sum.
  let digits = sum_of_digits(Math.floor(n / 10));

  // Add last digit to the sum
  return (sum += digits % 10);
}

// --- Output:
console.log(sum_of_digits(779));

/**
Stacking
f(77)
f(7) 
f(0)
---
Unwinding
 
f(0) = Nan;
f(7) = f(0) + 
*/

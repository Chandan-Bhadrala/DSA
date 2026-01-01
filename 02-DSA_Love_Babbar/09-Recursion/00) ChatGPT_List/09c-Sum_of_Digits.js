/**
# Sum of digits of a number.

## Question:
## Solution Approach:
Requirement: I've to do three things:
1. Break n in every passing recursion.
2. Need to mod out last digit.
3. Need add the digits
4. Finally return the sum.
  4.1. As I've to finally return the sum then every recursion must be returning the same variable that is sum.
    4.1.1. So, one requirement sum is fixated on the return.
  4.2. Next I need to break the n.
    4.2.1. That I'll be doing within the passing argument of the recursion calls.
  4.3. Last I need to extract the last digit of the n.
    4.3.1. That I'll be doing in the business logic area.
*/
// -----------------------------

// Trial 3:
function sum_of_digits(n) {
  // Base Case: Terminate the recursive loop and seed initial value for sum-> 0.
  if (n <= 0) {
    return 0;
  }

  // Collect seed sum value to add to the sum.
  let lastSum = sum_of_digits(Math.floor(n / 10));

  // Extract last digit of the n.
  // let lastDigit = n % 10; // Will extract and add the last digit below in one go in the return statement.

  // Add last digit to the sum
  return lastSum + (n % 10);
}

// --- Output:
console.log(sum_of_digits(779));

/**
Stacking
f(779)
f(77) 
f(7)
f(0)
---
Unwinding
 
f(0) = 0;
f(7) = f(0) + 7;
f(77) = f(7) + 7;
f(779) = f(77) + 9; -> final return
*/

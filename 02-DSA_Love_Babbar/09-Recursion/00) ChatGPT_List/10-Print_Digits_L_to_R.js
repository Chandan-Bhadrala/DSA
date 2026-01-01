/**
# Print all digits of a number (left to right)

## Question:
## Solution Approach:
1. I need to extract digit.
    1.1. Print it.
2. Reduce n.
    2.1. Same like last question, will reduce n with in the function parameter.
3. Will deduce the last digit and will print it.
4. So, nothing is needed to be returned.
5. All I need to know whether to make it head or tail recursion to print n from the left to right.
*/

// -----------------------------

function printDigitLeftToRight(n) {
  // Base Case: return undefine, as no meaningful return value or seed value is required.
  if (n <= 0) {
    return;
  }

  printDigitLeftToRight(Math.floor(n / 10));

  // Extract n value from the recursive call and deduce the last digit in unwinding stage to print numbers left to right.
  // let lastDigit =
  // Simply print it rather than storing it in a variable.
  console.log(n % 10);

  // return nothing, simply close the function with empty return.
  return;
}

// --- Output:
printDigitLeftToRight(1234);

/**
Stacking
f(1234)
f(123) 
f(12)
f(1)
f(0)
---
Unwinding
 
f(0) = undefined;
f(1) = undefined, Simply take n and extract its last digit and print it: 1;
f(12) = undefined, Simply take n and extract its last digit and print it: 2;
f(123) = undefined, Simply take n and extract its last digit and print it: 3;
f(1234) = undefined, Simply take n and extract its last digit and print it: 4;
*/

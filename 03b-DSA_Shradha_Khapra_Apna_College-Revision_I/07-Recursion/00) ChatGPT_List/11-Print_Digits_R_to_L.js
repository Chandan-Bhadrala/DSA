/**
# Print all digits of a number (right to left)

## Question:
## Solution Approach:
*/
// -----------------------------

function printDigitRightToLeft(n) {
  // Base Case: return undefine, as no meaningful return value or seed value is required.
  if (n <= 0) {
    return;
  }

  console.log(n % 10);

  printDigitRightToLeft(Math.floor(n / 10));

  return;
}

// --- Output:
printDigitRightToLeft(1234);

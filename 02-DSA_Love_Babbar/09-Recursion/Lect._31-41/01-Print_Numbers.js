/**
# Print Numbers.

## Question:
## Solution Approach:
*/
// -----------------------------

function Euclid_GCD(a, b) {
  while (b != 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

// --- Output:
let a = 90;
let b = 100;

console.log(`GCD of two numbers ${a} and ${b} is:`, Euclid_GCD(a, b));

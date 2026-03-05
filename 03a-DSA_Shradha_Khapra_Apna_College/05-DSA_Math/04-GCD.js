/**
# GCD by Euclid's Theorem.
Tutorial Link:
https://youtu.be/yHwneN6zJmU?si=3MAJ89tOOor0nzFe

## Question:
## Solution Approach:
  1.  
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

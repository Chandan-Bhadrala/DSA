/**
# Say Digits in English Words.

## Question:
## Solution Approach:
*/
// -----------------------------

const digitsWordMap = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function sayDigits(n) {
  // Base Case: Let recursive calls build frame stack until n becomes 0 or less than 0.
  if (n <= 0) return;
}

// --- Output:
console.log(sayDigits(127));

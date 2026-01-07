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

/**
Error: In approach.
1. Minor error, rest the whole code is awesome.
2. For given n = 0, code is not printing anything.
  2.1. Handle given n = 0, separately.
*/
function sayDigits(n) {
  // Base Case: Let recursive calls build frame stack until n becomes 0 or less than 0.
  if (n <= 0) return;

  // Extract last digit and save it to the frame stack memory.
  let lastDigit = n % 10;
  // Shorten the n and pass it to the next recursive call.
  sayDigits(Math.floor(n / 10));

  // Print lastDigit from the frame stack memory while unwinding.
  console.log(digitsWordMap[lastDigit]);
}

// --- Output:
console.log(sayDigits(1270));

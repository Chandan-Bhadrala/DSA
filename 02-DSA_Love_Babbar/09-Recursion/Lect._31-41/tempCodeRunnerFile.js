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

// 01a) Main Function
function sayDigits(n) {
  if (n == 0) {
    console.log(digitsWordMap[0]);
    return;
  }

  // if(n > 0), call the helper function to print digits in words.
  helper(n);
}

// 02a) Helper Function
function helper(num) {
  // Base Case: Let recursive calls build frame stack until n becomes 0.
  if (num == 0) return;

  // Extract last digit and save it to the frame stack memory.
  let lastDigit = num % 10;
  // Shorten the n and pass it to the next recursive call.
  sayDigits(Math.floor(num / 10));

  // Print lastDigit from the frame stack memory while unwinding.
  console.log(digitsWordMap[lastDigit]);
}

// --- Output:
console.log(sayDigits(1270));

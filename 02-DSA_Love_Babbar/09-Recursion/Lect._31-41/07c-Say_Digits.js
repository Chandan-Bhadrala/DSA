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
  return helper(n).join(" ");
}

// Print words in a single series.
// 02a) Helper Function
function helper(num) {
  // Base Case: Let recursive calls build frame stack until n becomes 0 and then seed an empty array.
  if (num == 0) return [];

  // Extract last digit and save it to the frame stack memory.
  let lastDigit = num % 10;

  // Shorten the n and pass it to the next recursive call.
  let numberInEnglish = helper(Math.floor(num / 10));

  // Save the lastDigit from the frame stack memory while unwinding.
  let lastDigitInEnglish = digitsWordMap[lastDigit];

  // Push the digits into an array
  numberInEnglish.push(lastDigitInEnglish);

  // Return the number for printing.
  return numberInEnglish;
}

// --- Output:
console.log(sayDigits(1270));

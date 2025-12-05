// # Square root with precision up to 3 decimal points using binary search.
// Did this DSA question using Linear Search in 06a file.
// Will use Binary Search this time to compute Integer part of the square root.

// -----------------------------
import readline from "readline/promises";

// 00a. Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 00b. A generic helper function helps to take multiple user input using async/await.
async function ask(q) {
  return rl.question(q);
}
// -----------------------------

// 01a. A function to calculate the square root of the given number n.
function findSquareRoot(target) {
  let intPart = 0;

  let start = 0;
  let end = target - 1;

  // First we will search for the "integer part" of the square root, using Binary Search.
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid <= target) {
      intPart = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  let finalAnswer = intPart;

  // Now, we will find the decimal part of the square root answer.
  // i < 3, is kept to loop and calculate only upto 3 decimal values.
  let i = 1;
  while (i <= 3) {
    // Updating denominator place value from 10th -> 100th -> 1000th
    let denominator = 10 ** i;

    // Updating denominator value of 10th -> 100th -> 1000th
    for (let j = 1; j <= 9; j++) {
      if (
        (finalAnswer + 1 / denominator) * (finalAnswer + 1 / denominator) <=
        target
      ) {
        finalAnswer = finalAnswer + 1 / denominator;
      }
    }
    i++;
  }

  return Number(finalAnswer.toFixed(3));
}

// 01b. Taking and validating user input:

let inputN = await ask(
  "Provide a number for which you intend to know the square root: "
);

let n = Number(inputN);

while (isNaN(n)) {
  inputN = await ask("Please ONLY provide a NUMBER: ");
  n = Number(inputN);
}
// -----------------------------

// 01c. Displaying output:
const result = findSquareRoot(n);

console.log(result);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

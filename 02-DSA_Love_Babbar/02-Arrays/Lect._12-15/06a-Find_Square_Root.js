// # Square root with precision up to 3 decimal points using binary search.
// 00. Will be given a number and we will have to find the square root value of the given number with the precision upto three decimal points.
// 1. Will be using binary search for finding the integer part of the square root.
// 1.1. Will create a range of numbers to apply binary search.
// 1.2. Self created number line will lie from 1 to n.
// 1.3. n being the number for which square root has to find.
// 2. So, to find the square root of the n, we will use a number line range from 1 to n - 1.
// 3. I believe we can easily reduce the number line range from 1 to n - 1 to 1 to (n-1)/2.
// 3.1. Will check this number range to check its efficiency and correctness.
// 4. However we have to use linear search to calculate the decimal part of the square root value.

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

  // First we will search for the "integer part" of the square root.
  for (let i = 1; i <= target; i++) {
    // Checking whether current value of "i" is suitable candidate for the integer part of the square root answer.
    if (i * i <= target) {
      intPart = i;
    } else if (i * i > target) {
      break;
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
    for (let j = 0; j <= 9; j++) {
      if (
        (finalAnswer + 1 / denominator) * (finalAnswer + 1 / denominator) <=
        target
      ) {
        finalAnswer = finalAnswer + 1 / denominator;
      }
    }
    i++;
  }

  return Number(finalAnswer.toFixed(3));;
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

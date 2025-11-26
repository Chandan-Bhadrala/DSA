// # Find if occurrence of each number in the array has unique count.
// 1. We will have an array filled with numbers.
// 2. We have to find the count for each number.
// 2.1. Meaning, we have to check how many times a number is present in the array.
// 2.2. If the count for the each number is different or unique we have to return true otherwise false.

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

// 01a. A function to find unique element in an array.
function findUniqueNumber(arr) {
  let i = 1;
  let uniqueNumber = arr[0];

  while (i <= arr.length - 1) {
    uniqueNumber = uniqueNumber ^ arr[i];

    i++;
  }

  return uniqueNumber;
}

// -----------------------------

// 01b. Example Dynamic usage:
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);

const arr1 = inputArray.trim().split(" ").map(Number);

const uniqueNumber = findUniqueNumber(arr1);

console.log(`unique number in the given array is: ${uniqueNumber}`);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

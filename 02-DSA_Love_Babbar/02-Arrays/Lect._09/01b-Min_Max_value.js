// # Find the minimum and maximum values within the array.

import readline from "readline/promises";

// 00. Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 01. A generic helper function helps to take multiple user input using async/await.
async function ask(q) {
  return rl.question(q);
}

// 02. A function to find Max and Min values within the array.
function maxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return [max, min];
}

// -----------------------------

// Example Static usage:
const arr1 = [1, 2, 9, 6, 7];
const result1 = maxAndMin(arr1);
console.log("Maximum:", result1[0], "Minimum:", result1[1]);

// -----------------------------

// Example Dynamic usage (taking input from the user using "ask" function):
const userInput = await ask(
  "Enter an array elements separated by a single space: "
);
console.log(userInput);

const arr2 = userInput.split(" ").map(Number);
const result2 = maxAndMin(arr2);
console.log("Maximum:", result2[0], "Minimum:", result2[1]);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

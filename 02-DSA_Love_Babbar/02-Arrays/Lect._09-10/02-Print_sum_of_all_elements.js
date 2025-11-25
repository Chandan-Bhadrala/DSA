// # Find the sum of all the array elements.

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

// 02. A function to find the sum of all the array elements.
function arrSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// -----------------------------

// Example Dynamic usage:
const userInput = await ask(
  "Enter an array elements separated by a single space, to find their sum: "
);

const arr1 = userInput.split(" ").map(Number);
const result1 = arrSum(arr1);
console.log("Sum of the array elements is:", result1);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.
// Without closing, Node.js keeps waiting for more input.

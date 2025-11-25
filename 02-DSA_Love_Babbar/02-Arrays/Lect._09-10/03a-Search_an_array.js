// # Linear Search an array for the given number "n".

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

// 02. A function to search array for the given value of n.
function arrSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) return { bool: true, i };
  }

  return { bool: false, i: -1 };
}

// -----------------------------

// Example Dynamic usage (taking input from the user using "ask" function):
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);

const inputN = await ask("Enter an elements to search within the array: ");

const arr1 = inputArray.split(" ").map(Number);
const n = Number(inputN);

const { bool, i } = arrSearch(arr1, n);

if (bool)
  console.log(`Given element ${n} found in the array at array index ${i}`);
else console.log(`Given element ${n} not found in the array`);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

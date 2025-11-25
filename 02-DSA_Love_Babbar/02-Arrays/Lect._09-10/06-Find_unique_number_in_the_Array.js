// # Find unique number in the Array.
// 1. We will have an array, with all numbers present twice.
// 2. However, there will be only one number with its presence count = 1.
// 3. We have to find this unique number.
// 4. We will be using XOR to eliminate all the numbers which are present two times.
// 4.1. As 4 ^ 4 = 0.
// 4.2. So, we will be eliminating all the elements which are present twice and in this pursuit we will be left with the unique number only.
// 4.2.1. 5 ^ 5 ^ 3 ^ 4 ^ 4 ^ 9 ^ 9 = 3.

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

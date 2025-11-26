// # Find the single duplicate number in the given array.
// 1. We will sort the array and compare the number with its adjacent number.
// 2. For the two adjacent numbers which are equal, we will return that number as a duplicate number.

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

// 01a. A function to find count or frequency of an element in an array.
function findSingleDuplicateNumber(arr) {
  let i = 0;

  while (i < arr.length - 1) {
    if (arr[i] == arr[i + 1]) return arr[i];
    i++;
  }
}

// -----------------------------

// 01b. Example Dynamic usage:
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);

const arr1 = inputArray.trim().split(" ").map(Number);

const duplicateNumber =
  findSingleDuplicateNumber(arr1) ||
  "Found no duplicate number in the given array";

console.log("Duplicate number in the given array is:", duplicateNumber);

// if (hasUniqueFrequency) {
//   console.log("Thus, frequency of the numbers in the given array is Unique");
// } else {
//   console.log(
//     "Thus, frequency of the numbers in the given array is not Unique"
//   );
// }

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

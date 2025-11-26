// # Find Intersection elements between the two arrays sorted in ascending order.
// 1. We will have two arrays filled with numbers.
// 2. We have to find common elements among those two arrays.
// 3. To solve this, going to use **two pointers**.
// 3.1. As the array is sorted, and if it would have not we would have sorted the arrays.
// 3.2. Will be using two pointers, one "i" will traverse through one array and other "j" will traverse through the other array.
// 3.3. The pointer will only get an increment if the number is smaller and needs to move forward to check the following number is equal or greater than the number held by the other pointer.
// 4. Whenever we will find the numbers which are equal, we will push that number into an intersection array.

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
function findCommonElements(arr1, arr2) {
  let i = 0;
  const commonElements = [];

  return commonElements;
}

// -----------------------------

// 01b. Taking user input:
const inputArray1 = await ask(
  "Enter an array elements separated by a single space: "
);
const arr1 = inputArray1.trim().split(" ").map(Number);

const inputArray2 = await ask(
  "Enter an array elements separated by a single space: "
);
const arr2 = inputArray2.trim().split(" ").map(Number);
// -----------------------------

// 01c. Displaying output:
const commonElements = findCommonElements(arr1, arr2);

console.log(
  `Common elements between array-1: ${arr1} and array-2: ${arr2} are: ${[
    ...commonElements,
  ]}`
);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

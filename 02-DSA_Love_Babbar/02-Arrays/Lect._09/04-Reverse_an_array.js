// # Reverse the given Array.
// 1. Meaning last element should be the first one and second last element should be the second and so on.
// 2. We will be taking two pointers, i and j.
// 3. i will point to the starting elements of the array.
// 4. j will point to the ending elements of the array.
// 5. And at last we will keep swapping both element using i and j.
// 6. We will keep increment i and keep increment j till i > j.

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

// -----------------------------

// 02. A function to reverse an array.
function arrReverse(arr) {
  let i = 0;
  let j = arr.length - 1; // j is the pointer to the last index of the array.

  const reversedArray = [];

  while (i <= j) {
    let temp = arr[i];

    reversedArray[i] = arr[j];
    reversedArray[j] = temp;
    i++;
    j--;
  }

  return reversedArray;
}

// -----------------------------

// Example Dynamic usage (taking input from the user using "ask" function):
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);

const arr1 = inputArray.trim().split(" ").map(Number);

const reversedArray = arrReverse(arr1);

console.log(`Reversed Array: [${reversedArray}]`);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

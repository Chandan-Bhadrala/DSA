// # Find all duplicates in the array. 442 LeetCode. Homework
// 1. First I'm going to convert the array into an Object with array number as the object keys and number count as object key-value.
// 2. Then, for the key-value > 1, will print that number with its value and the count in the array.

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
function countArrayElements(arr) {
  let i = 0;
  const countObject = {};

  while (i <= arr.length - 1) {
    // Here, or operator is asking if the key exists and is initialized in the object, all good proceeds.
    // And if the key is not present and thus neither initialized, then this or operator will create the key with the value 1.

    // ChatGPT refinement on my above comment.
    // If countObject[arr[i]] exists, use its value.
    // If it does not exist (undefined), fallback to 0.
    // Then add 1 and assign, which creates/updates the key.
    countObject[arr[i]] = (countObject[arr[i]] || 0) + 1;

    i++;
  }

  return countObject;
}

// -----------------------------

// 01b. Taking user input:
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);

const arr1 = inputArray.trim().split(" ").map(Number);

// -----------------------------

// 01c. Displaying output:
const countObject = countArrayElements(arr1);

for (let key in countObject) {
  if (countObject[key] > 1) {
    console.log(
      `Frequency of the number ${key} in the given array is: ${countObject[key]}`
    );
  }
}

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

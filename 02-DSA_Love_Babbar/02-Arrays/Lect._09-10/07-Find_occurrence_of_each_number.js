// # Find if occurrence of each number in the array has unique count. 1207 Leetcode. Homework.
// 1. We will have an array filled with numbers.
// 2. We have to find the count for each number.
// 2.1. Meaning, we have to check how many times a number is present in the array.
// 2.2. If the count for the each number is different or unique we have to return true otherwise false.
// 3. This question can easily be done using a set and a sorted array.
// 3.1. So, will attempt this question once I know how to sort an array and how to use a set.
// 4. Till then Adios my friend.

// ## Read an O(n) solution on the LeetCode, will attempt that. Solution is:
// 1. Sort an given array.
// 1.1. Then, traverse through the array and save the count for each element in another array.
// 2. Sort that arrray too using a default sort function given by the programming language.
// 3. Check that count sorted array for any equal adjacent number.
// 3.1. If any adjacent number in the count array is same return false else return true.

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
function countElementFrequency(arr) {
  let i = 0;
  const countObject = {};
  arr.sort((a, b) => a - b); // sort first

  while (i < arr.length - 1) {
    if (arr[i] == arr[i + 1]) countObject[arr[i]] = countObject.arr[i] + 1;

    i++;
  }

  return countObject;
}

// -----------------------------

// 01b. Example Dynamic usage:
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);

const arr1 = inputArray.trim().split(" ").map(Number);

const uniqueNumber = countElementFrequency(arr1);

console.log(`unique number in the given array is: ${uniqueNumber}`);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

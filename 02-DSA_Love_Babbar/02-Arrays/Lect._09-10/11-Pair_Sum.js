// # Pair sum - You are given an array and an integer. You have to find a pair of numbers in the array whose sum is equal to the given integer "n".
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
// 2. Sort that array too using a default sort function given by the programming language.
// 3. Check that count sorted array for any equal adjacent number.
// 3.1. If any adjacent number in the count array is same return false else return true.

// ## In pursuit to implement logic read in the LeetCode, I rather figured to implement my own logic using objects.
// 1. Simply for every number in the array initialize the object with number as an object key and its count as object key-value.
// 2. This object use seems fair and easy.

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

  while (i <= arr.length - 1) {
    // Here, or operator is asking if the key exists in the object, all good proceeds.
    // And if the key is not already present in the object then initialize the key with 0 and add 1 to it.
    countObject[arr[i]] = (countObject[arr[i]] || 0) + 1;

    i++;
  }

  return countObject;
}

// -----------------------------
// 01b. A function to check all frequency values are unique or not.
function uniqueValues(obj) {
  let i = 0;
  const freqArray = [];

  // Pushing all keys into an array.
  for (let key in obj) {
    freqArray.push(obj[key]);
  }

  freqArray.sort((a, b) => a - b);

  while (i < freqArray.length - 1) {
    if (freqArray[i] == freqArray[i + 1]) {
      return false;
    }
    i++;
  }

  return true;
}

// -----------------------------

// 01c. Example Dynamic usage:
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);

const arr1 = inputArray.trim().split(" ").map(Number);

const countObject = countElementFrequency(arr1);

const hasUniqueFrequency = uniqueValues(countObject);

console.log("Frequency of the numbers in the given array is:", countObject);

if (hasUniqueFrequency) {
  console.log("Thus, frequency of the numbers in the given array is Unique");
} else {
  console.log(
    "Thus, frequency of the numbers in the given array is not Unique"
  );
}

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

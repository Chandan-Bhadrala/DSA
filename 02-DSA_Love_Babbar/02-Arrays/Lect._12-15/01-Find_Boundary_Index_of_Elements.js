// # Find the left most and right most index of the given number in the sorted array.
// 1. We will be given an sorted array with repeated duplicate numbers.
// 2. Further, we will be given a number which has duplicate occurrences in the array and we have find given numbers starting and ending index.
// 3. We will be using a binary search to find the starting and the end index of the given number in the sorted array filled with repeated numbers.
// 4. We will be looping the array in two different functions.
// 4.1. First we will find the the occurrence of the number for the first time in the given array and storing its index in a variable.
// 4.2. Then, in one loop scan of the array, we will be scanning the left side of that found number to find the given number starting index and then in the another function, we will be scanning right side of that found number to find the end index of that number.
// 5. So, will be writing one main function which will call multiple helper function which are written in different scope level for better readability and the scalability.
// 5.1. This cleanliness will also helps debug the code.
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

// 01. A main function, which will return the starting and the end index of the number under consideration using the helper functions.
function startEndIndex(arr, numberToSearch) {
  let result = searchN(arr, numberToSearch);
  if (result.status == "error") {
    return { status: "error", message: "Given number not found in the array" };
  }

  // Send the result to a helper function to find the starting index.
  numStartIndex(arr);
}

// 01a. A function to search an element in an arrays using Binary Search.
function searchN(arr, numberToSearch) {
  // Sort the given array
  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;
  let numberOfComparisons = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    numberOfComparisons++;

    if (numberToSearch > arr[mid]) {
      start = mid + 1;
    } else if (numberToSearch < arr[mid]) {
      end = mid - 1;
    } else if (numberToSearch == arr[mid]) {
      return {
        status: "success",
        data: { index: mid, searchedNumber: arr[mid], numberOfComparisons },
      };
    }
  }

  return {
    status: "error",
    message: "Given number not found in the array",
  };
}

// 01b. A function to scan the array to find the given number's starting index.
function numStartIndex(arr, n) {
  arr.sort((a, b) => a - b);

  let startIndex = null;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = (start + end) / 2;
  }

  return startIndex;
}

// -----------------------------

// 01b. Taking and validating user input:
const inputArray = await ask(
  "Provide an array filled only with 0s and 1s for sorting: "
);
const arr = inputArray.trim().split(" ").map(Number);

let isArrayValid = arr.every((x) => x == 0 || x == 1 || x == 2);

while (!isArrayValid) {
  const inputArray = await ask(
    "Please provide an array ONLY filled with 0s, 1s and 2s for sorting: "
  );

  const arr = inputArray.trim().split(" ").map(Number);

  isArrayValid = arr.every((x) => x == 0 || x == 1 || x == 2);
}

// -----------------------------

// 01c. Displaying output:
const sortedArray = sort012(arr);

console.log(`Here is your sorted array: [${[...sortedArray]}]`);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

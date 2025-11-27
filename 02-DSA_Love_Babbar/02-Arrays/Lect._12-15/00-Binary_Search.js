// # Basic Binary Search Implementation.
// 1. To apply Binary Search, we need a sorted array and 3 pointers.
// 1.1. i -> starting index.
// 1.2. j -> end index.
// 1.3. mid -> (i + j)/2.
// 2. We will use the mid pointer to locate the desired number in the array.
// 3. We will shift the pointer "i" = "mid + 1" or "j" = "mid - 1" depending on whether the desired number is smaller or larger than the element pointed to by the "mid" pointer.
// 4. Read below the Binary Search code implementation to gain further understanding of Binary Search.

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

// 01a. A function to sort arrays filled with 0s and 1s.
function sort01(arr) {
  let i = 0;
  const numObj = {};
  const sortedArray = [];

  while (i < arr.length) {
    if (arr[i] == 0) numObj[arr[i]] = (numObj[arr[i]] || 0) + 1;
    if (arr[i] == 1) numObj[arr[i]] = (numObj[arr[i]] || 0) + 1;
    i++;
  }

  let count0 = numObj[0];
  let count1 = numObj[1];

  let i0 = 0;
  let i1 = 0;

  while (i0 < count0) {
    sortedArray.push(0);
    i0++;
  }
  while (i1 < count1) {
    sortedArray.push(1);
    i1++;
  }

  return sortedArray;
}

// -----------------------------

// 01b. Taking and validating user input:
const inputArray = await ask(
  "Provide an array filled only with 0s and 1s for sorting: "
);
const arr = inputArray.trim().split(" ").map(Number);

let isArrayValid = arr.every((x) => x == 0 || x == 1);

while (!isArrayValid) {
  const inputArray = await ask(
    "Please provide an array ONLY filled with 0s and 1s for sorting: "
  );

  const arr = inputArray.trim().split(" ").map(Number);

  isArrayValid = arr.every((x) => x == 0 || x == 1);
}

// -----------------------------

// 01c. Displaying output:
const sortedArray = sort01(arr);

console.log(`Here is your sorted array: ${[...sortedArray]}`);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

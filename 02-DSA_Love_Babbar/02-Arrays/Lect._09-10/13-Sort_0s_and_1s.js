// # Sort 0s and 1s in the Array. An array is given filled with 0s and 1s, you have to sort that array in the ascending order.
// 1. I'll be creating an object out of the array.
// 2. Where object key will be the array number, which in this case would be 0 and 1.
// 3. And the object key value will be the numbers count.
// 4. Will create a new array and will loop the array in accordance to the number's count and will push the corresponding number into it.

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

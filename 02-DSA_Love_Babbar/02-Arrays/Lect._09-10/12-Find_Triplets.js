// # Triple sum - You are given an array and an integer. You have to find **three numbers** in the array whose sum is equal to the given integer "n".
// 1. We will have an array filled with numbers.
// 2. We have to find three numbers in the given **sorted array** whose sum is equal to the given number n.
// 3. Going to use three pointers in the given sorted array.
// 3.1. One "i" will traverse from the beginning of the array till the end, however "i" will stay fixed to the first array element, until
// 3.2. Other two pointers, "j" and "k" traverse the whole array.
// 3.3. j will traverse from the i+1 onwards and "k" will traverse from the last array element till to the point where j < k.
// 3.3. Will increment "i" only if:
// 3.3.1. "j" and "k" fails to find any suitable number, then only "i" will be incremented and then again pursuit of "j" and "k" will begin to find the suitable numbers which helps them to form sum equal to n.

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

// 01a. A function to find three numbers in the array whose sum is equal to n.
function tripletSum(arr, n) {
  let i = 0;
  let j = i + 1;
  let k = arr.length - 1;

  arr.sort((a, b) => a - b);

  const triplet = [];

  while (i <= arr.length - 2) {
    j = i + 1;
    k = arr.length - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] < n) {
        j++;
      } else if (arr[i] + arr[j] + arr[k] > n) {
        k--;
      } else if (arr[i] + arr[j] + arr[k] == n) {
        triplet.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
      }
    }
    i++;
  }

  return triplet;
}

// -----------------------------

// 01b. Taking user input:
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);
const arr = inputArray.trim().split(" ").map(Number);

const inputN = await ask(
  "Enter a number for whom you are looking for the three numbers in the array whose sum is equal to that number: "
);
let n = parseInt(inputN, 10);

while (isNaN(n)) {
  const inputN = await ask(
    "Please Enter ONLY an integer number for whom you are looking for the three numbers in the array whose sum is equal to that number: "
  );
  n = parseInt(inputN, 10);
}
// -----------------------------

// 01c. Displaying output:
const triplet = tripletSum(arr, n);

if (triplet.length > 0) {
  console.log(`Three numbers in the array of whose sum is equal to ${n} are: `);
  triplet.forEach((p) => console.log(p));
} else
  console.log(
    `Didn't found any three numbers in the given array whose sum is equal to the given number ${n}`
  );

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

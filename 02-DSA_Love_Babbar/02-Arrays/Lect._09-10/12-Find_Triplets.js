// # Pair sum - You are given an array and an integer. You have to find a pair of numbers in the array whose sum is equal to the given integer "n".
// 1. We will have an array filled with numbers.
// 2. We have to find two numbers in the given sorted array whose sum is equal to the given number n.
// 3. Going to use two pointers in the given sorted array.
// 3.1. One "i" will traverse from the beginning of the array and other "j" will traverse from the end of the array to look for the numbers whose sum could be equal to the given number n.
// 3.2. Will decrement j if the sum of the current pair is greater than the n.
// 3.3. Will increment i if the sum of the current pair is smaller than the n.

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

// 01a. A function to find a pair of numbers in the array whose sum is equal to n.
function pairSum(arr, n) {
  let i = 0;
  let j = arr.length - 1;

  arr.sort((a, b) => a - b);

  const pair = [];

  while (i < j) {
    if (arr[i] + arr[j] < n) {
      i++;
    } else if (arr[i] + arr[j] > n) {
      j--;
    } else if (arr[i] + arr[j] == n) {
      pair.push([arr[i], arr[j]]);

      // Try moving left pointer first to find another bigger number which can become a pair of numbers whose sum could be equal to the n.
      if (arr[i] + arr[j - 1] >= n) {
        j--; // Move right pointer to try a different match
      } else {
        i++; // Move left pointer to find another match
      }
    }
  }

  return pair;
}

// -----------------------------

// 01b. Taking user input:
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);
const arr = inputArray.trim().split(" ").map(Number);

const inputN = await ask(
  "Enter a number for whom you are looking for the pair of the numbers in the array whose sum is equal to that number: "
);
let n = parseInt(inputN, 10);

while (isNaN(n)) {
  const inputN = await ask(
    "Please Enter ONLY an integer number for whom you are looking for the pair of the numbers in the array whose sum is equal to that number: "
  );
  n = parseInt(inputN, 10);
}
// -----------------------------

// 01c. Displaying output:
const pair = pairSum(arr, n);

if (pair.length > 0) {
  console.log(
    `Pair of numbers in the array of whose sum is equal to ${n} are: `
  );
  pair.forEach((p) => console.log(p));
} else
  console.log(
    `Didn't found any pair of numbers in the given array whose sum is equal to the given number ${n}`
  );

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

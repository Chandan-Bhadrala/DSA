// # Swap the alternate elements in the Array.
// 1. Meaning first element should be swapped with the second one and then third element should be swapped by the fourth element and so on.
// 2. We will be taking two pointers, i and j.
// 3. i will point to the first elements of the array.
// 4. i + 1 will point to the next adjacent elements of the array.
// 5. And we will keep swapping both element using i and i + 1.
// 6. With upper bound on i + 1 < array.length.

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

// 01a. A function to swap alternate elements of an array.
function swapAlternateElements(arr) {
  let i = 0;
  const swappedArray = [...arr];

  // The condition is kept as "i < arr.length - 1" because if i reaches the second last index, then within the loop we are accessing i + 1, which will result in accessing an undefined element, i.e., an out-of-bound element for the special case of an array with odd indices.
  // "array.length - 1" gives the last index number, and thus we have kept the condition < and not <=, so that we never touch the last index in the loop.
  while (i < arr.length - 1) {
    let temp = arr[i];

    swappedArray[i] = arr[i + 1];
    swappedArray[i + 1] = temp;
    i += 2;
  }

  return swappedArray;
}

// -----------------------------

// 01b. Example Dynamic usage:
const inputArray = await ask(
  "Enter an array elements separated by a single space: "
);

const arr1 = inputArray.trim().split(" ").map(Number);

const swappedArray = swapAlternateElements(arr1);

console.log(`Swapped alternate elements of the array: [${swappedArray}]`);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

// # Find the pivot element in a rotated and sorted array.
// 1. In this problem, we are given an array with **unique** sorted elements which is rotated n times.
// 1.1. Rotating an array 1 time means, shifting the last element to first.
// 1.2. Thus, rotating an array n times means, shifting n elements from the rear of an array to the beginning of the array.
// 2. So, now as we understood what is an sorted and then a rotated array is.
// 2.1. The question, we have to find the element at which the rotation has happened.
// 3. Here's an example: Assume an sorted array: [1, 2, 4, 5, 6, 8, 9, 10, 12].
// 3.1. Let it be a 4 times rotated array, then the array would become: [8, 9, 10, 12, 1, 2, 4, 5, 6,].
// 3.2. Now, we have to reply with the answer as an index of either 12 or 1.
// 4. Now, as we have understood the problem statement clearly, we can approach towards a solution.
// 4.1. Approach is simple, we have two parts of the array both are sorted.
// 4.2. We either look for 12 or 1. We have to decide this from the beginning.
// 4.3. Let's say we are looking for number 1's index.
// 4.4. Then, we can easily say, previous number than our pivot element 1 will always be bigger.
// 5. Or if we are looking for the element 12, then we can easily say number ahead of our pivot number 12 will be a smaller number.
// 6. Thus, now we can begin scanning our rotated sorted array for the pivot element.
// 6.1. In my approach below, I'll be looking for the smallest number and will consider that number as a pivot element.
// 6.2. One can easily code for the other solution too.
// 7. Key in this question is **unique elements** and array is **sorted** before rotating.
// 7.1. And the solution is to move start and the end pointer towards the unsorted region, because that is the place where the pivot element resides.

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

// 01a. A function to find the pivot element in the rotated sorted array.
function pivotElement(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Updating mid-pointer value.
    let mid = Math.floor((start + end) / 2);

    // Applying multiple if-else conditions to search for the minimum value in the array which is our pivot value.

    // Success case, found our min value.
    if (mid - 1 >= 0 && arr[mid] < arr[mid - 1]) {
      return pivotElement;
    }

    // If our mid-pointer is at the right of our minimum value, shift end-pointer to the left.
    if (mid - 1 >= 0 && arr[mid] > arr[mid - 1]) {
      end = mid - 1;
    }

    // If our mid-pointer is at the left of our minimum value, shift start-pointer to the left.
    if (mid - 1 >= 0 && arr[mid] > arr[mid - 1]) {
      end = mid - 1;
    }
  }
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

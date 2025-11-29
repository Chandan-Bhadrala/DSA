// # Find the peak element in the mountain array.
// 1. We will be given an array which can be broken down into two parts.
// 1.1. In the first part of the array, we will be having line of ascending numbers and then in the second part of the array, we will be having a line of descending numbers.
// 1.2. This ascending and descending line of numbers is forming a mountain.
// 2. And we are supposed to find the peak/highest element in this array, called peak of the mountain using binary search.
// 3. The trick is to compare the mid value with the number behind it and ahead of it.
// 3.1. To evaluate whether the number is the peak or not, we can check whether **both numbers** which are **behind and ahead** of the mid value are **smaller than the mid value or not**.
// 3.2. However, we also need to evaluate, in which direction we need to move the mid pointer to scan for the peak element.
// 3.2.1. We will be doing so by checking the inclination of the numbers slope.

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

// 01a. A function to search an element in an arrays using Binary Search.
function searchPeakElement(arr) {
  let peakElement = null;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // Condition for success case, meaning condition for finding the peak element of the array.
    if (
      mid - 1 >= 0 &&
      mid + 1 < arr.length &&
      arr[mid - 1] < arr[mid] &&
      arr[mid] > arr[mid + 1]
    ) {
      return { status: "success", data: { peakElement: arr[mid] } };
    }
    // Condition for climbing up the number line.
    else if (mid - 1 >= 0 && mid + 1 < arr.length && arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    }
    // Condition for climbing down the number line.
    else if (mid - 1 >= 0 && mid + 1 < arr.length && arr[mid] > arr[mid + 1]) {
      end = mid;
    }
  }

  return {
    status: "error",
    message: "Error occurred while searching, please try again.",
  };
}

// -----------------------------

// 01b. Taking and validating user input:
let inputArray = await ask(
  "Provide an mountain array to search for its peak element: "
);
let arr = inputArray.trim().split(" ").map(Number);

let isInvalidArray = arr.some((x) => isNaN(x));

while (isInvalidArray) {
  inputArray = await ask(
    "Please provide an valid array ONLY filled with NUMBERS for Binary Search an element n: "
  );
  arr = inputArray.trim().split(" ").map(Number);

  isInvalidArray = arr.some((x) => isNaN(x));
}

// -----------------------------

// 01c. Displaying output:
const peakElementResult = searchPeakElement(arr);

if (peakElementResult.status == "success") {
  console.log(
    `Peak Element for the given array [${arr}] is: ${peakElementResult.data.peakElement}`
  );
} else if (peakElementResult.status == "error") {
  console.log(peakElementResult.message);
}

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

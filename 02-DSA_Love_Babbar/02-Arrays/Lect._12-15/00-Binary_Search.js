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

// -----------------------------

// 01b. Taking and validating user input:
let inputArray = await ask("Provide an array for Binary Search an element n: ");
let arr = inputArray.trim().split(" ").map(Number);

let isInvalidArray = arr.some((x) => isNaN(x));

while (isInvalidArray) {
  inputArray = await ask(
    "Please provide an valid array ONLY filled with NUMBERS for Binary Search an element n: "
  );
  arr = inputArray.trim().split(" ").map(Number);

  isInvalidArray = arr.some((x) => isNaN(x));
}

// -------

let inputN = await ask("Enter the number you want to search: ");
let searchTerm = Number(inputN);

while (isNaN(searchTerm)) {
  inputN = await ask("Enter ONLY a NUMBER you want to search: ");
  searchTerm = Number(inputN);
}
// -----------------------------

// 01c. Displaying output:
const searchNResult = searchN(arr, searchTerm);

if (searchNResult.status == "success") {
  console.log(
    `Given element ${searchTerm} is present at index: ${searchNResult.data.index}`
  );
} else if (searchNResult.status == "error") {
  console.log(`Given element ${searchTerm} is not present in the array.`);
}

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

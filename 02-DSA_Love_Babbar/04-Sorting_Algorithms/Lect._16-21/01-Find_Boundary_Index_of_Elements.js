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

// 01a. A main function, which will return the starting and the end index of the number under consideration using the helper functions.
function startEndIndex(arr, numberToSearch) {
  // Sort the given array
  arr.sort((a, b) => a - b);

  // Call a searchN helper function to check whether given number even exist in the array or not.
  let result = searchN(arr, numberToSearch);

  // Early return if number not found.
  if (result.status == "error")
    return { status: "error", message: result.message };

  let numInitialIndex = result.data.index;

  // Call a numStartIndex helper function to find the number's starting index.
  let startIndexResult = numStartIndex(arr, numberToSearch, numInitialIndex);

  // Call a helper function to find the number's end index.
  let endIndexResult = numEndIndex(arr, numberToSearch, numInitialIndex);

  // Final return value.
  if (
    startIndexResult.status == "success" &&
    endIndexResult.status == "success"
  ) {
    return {
      status: "success",
      data: {
        startIndex: startIndexResult.data.startIndex,
        endIndex: endIndexResult.data.endIndex,
        numberToSearch,
      },
    };
  } else
    return {
      status: "error",
      message:
        "Error while searching for the right and the left index for the given number.",
    };
}

// 01b. A function to search an element in an arrays using Binary Search.
function searchN(arr, numberToSearch) {
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

// 01c. A function to scan the array to find the given number's starting index.
function numStartIndex(arr, numberToSearch, numInitialIndex) {
  let startIndex = null;
  let start = 0;
  let end = numInitialIndex;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (numberToSearch > arr[mid]) {
      start = mid + 1;
    } else if (numberToSearch < arr[mid]) {
      end = mid - 1;
    } else if (
      numberToSearch == arr[mid] &&
      mid - 1 >= 0 &&
      numberToSearch == arr[mid - 1]
    ) {
      end = mid - 1;
    } else if (numberToSearch == arr[mid] && numberToSearch != arr[mid - 1]) {
      return {
        status: "success",
        data: { startIndex: mid, searchedNumber: arr[mid] },
      };
    }
  }

  return {
    status: "error",
    message:
      "Error occurred while searching the left most index for the given number",
  };
}
// 01d. A function to scan the array to find the given number's end index.
function numEndIndex(arr, numberToSearch, numInitialIndex) {
  let endIndex = null;
  let start = numInitialIndex;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (numberToSearch > arr[mid]) {
      start = mid + 1;
    } else if (numberToSearch < arr[mid]) {
      end = mid - 1;
    } else if (
      numberToSearch == arr[mid] &&
      mid + 1 < arr.length &&
      numberToSearch == arr[mid + 1]
    ) {
      start = mid + 1;
    } else if (numberToSearch == arr[mid] && numberToSearch != arr[mid + 1]) {
      return {
        status: "success",
        data: { endIndex: mid, searchedNumber: arr[mid] },
      };
    }
  }

  return {
    status: "error",
    message:
      "Error occurred while searching the right most index for the given number",
  };
}

// -----------------------------

// 01b. Taking and validating user input:
let inputArray = await ask(
  "Please provide an array only filled with numbers: "
);
let arr = inputArray.trim().split(" ").map(Number);

let isArrayValid = arr.every((x) => !isNaN(x));

while (!isArrayValid) {
  inputArray = await ask("Please provide an array ONLY filled with numbers: ");

  arr = inputArray.trim().split(" ").map(Number);

  isArrayValid = arr.every((x) => !isNaN(x));
}

let inputN = await ask(
  "Provide a number for which you intend to know leftmost and rightmost index:"
);

let n = Number(inputN);

while (isNaN(n)) {
  inputN = await ask("Please ONLY provide a NUMBER:");
  n = Number(inputN);
}
// -----------------------------

// 01c. Displaying output:
const result = startEndIndex(arr, n);

if (result.status == "success") {
  console.log(
    `Leftmost and the rightmost index for the given number ${n} are: ${result.data.startIndex} and ${result.data.endIndex}`
  );
} else {
  console.log(result.message);
}

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.

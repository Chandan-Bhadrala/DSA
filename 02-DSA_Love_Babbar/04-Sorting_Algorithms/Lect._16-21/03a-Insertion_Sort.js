/**
# Insertion Sort Implementation.
## In this sorting method, we will be using two pointers:
1. Pointer i -> pointing to the target element.
  1.1. Target element is an element which needs to be placed at the correct location.
  1.2. Using pointer j, we will be storing the target element into a temp variable.
2. Pointer j -> pointing to the element immediate left to the target element.
  2.1. Pointer j, will be used to traverse from the target immediate left towards the index 0.
  2.2. Using pointer j, we will check whether the array element left to the target element is bigger or smaller than the target element.
  2.3. The moment using pointer j, we find that the element to the left is smaller than the target element, we will insert the target element to the "j + 1" location.
  2.4. Otherwise we will keep shifting the elements pointed by pointer j towards the right.
3. This method, inherently **start sorting** the array element from the **first scan** onwards.
  3.1. This way we get the two sections of the array:
    3.1.1. Left is a sorted section of an array.
    3.1.2. Right is an unsorted section of an array.
*/

//-----------------

// 01. A function implementation of the **Insertion Sort**.
// 1. Insertion sort swap only once similar to the selection sort to save on CPU cycles.
function insertionSort(arr) {
  // Preserving Original Array.
  let sortArr = [...arr];

  // Looping through all array elements.
  for (let i = 1; i < sortArr.length; i++) {
    // Temporarily storing the **target value** using pointer i.
    let targetValue = sortArr[i];

    // A pointer "j" is created to start its journey from one place **left** of the target value to find/scan an element smaller than the target element.
    let j = i - 1;

    // The moment pointer "j" finds an element smaller than the **target element**, we insert the target element at location "j + 1".

    // This loop will run till **pointer j** reaches to the index 0 in pursuit to find the element smaller than the **target value**.
    while (j >= 0) {
      // Shift bigger elements to the right.
      if (sortArr[j] > targetValue) {
        sortArr[j + 1] = sortArr[j];
      }
      // If an element **smaller** than the **target element** is found by the "pointer j", then store the target element to the right of the smaller element, i.e., "j + 1".
      else {
        sortArr[j + 1] = targetValue;
        break;
      }

      j--;
    }

    // ## Edge Case:
    // If j became -1, it means targetValue is the smallest so far
    // Insert at position 0 (only if not already inserted by break)
    if (j < 0) {
      sortArr[0] = targetValue;
    }
  }
  return sortArr;
}

/**
## ChatGPT reply with the refined comments.
# A function implementation of the **Insertion Sort**.
1. Insertion Sort splits the array into two sections: sorted (left) and unsorted (right).
2. It picks one element from the unsorted section and inserts it into the correct position inside the sorted section.
3. It does this by shifting larger elements to the right and placing the target element at the correct location.
  3.1. Instead of swapping repeatedly (like Bubble Sort), we shift elements to the right until the correct position for the key is found. This saves CPU cycles.

function insertionSort(arr) {
  let sortArr = [...arr]; // Copy so original array remains unchanged.

  // Start from index 1 because a single element at index 0 is already sorted.
  for (let i = 1; i < sortArr.length; i++) {
    let key = sortArr[i];     // The element we want to insert in the sorted portion.
    let j = i - 1;            // Pointer to scan the sorted section.

    // **Shift** elements to the right if they are larger than the key.
    while (j >= 0 && sortArr[j] > key) {
      sortArr[j + 1] = sortArr[j];
      j--;
    }

    // Insert the key at correct sorted position.
    sortArr[j + 1] = key;
  }

  return sortArr;
}
*/

// ----------------

/**
## Issue 1: Too many swaps.
1. This approach swaps multiple times, we should swap only once like in selection sort to save on CPU cycles.
// 01. A function implementation of the **Insertion Sort**.
function insertionSort(arr) {
  let sortArr = [...arr];

  for (let i = 1; i < sortArr.length; i++) {
    let j = i;

    while (j >= 1) {
      // If the element at left is greater than the element at right, then do the swap.
      if (sortArr[j - 1] > sortArr[j]) {
        // Left-shifting the smaller values.
        [sortArr[j - 1], sortArr[j]] = [sortArr[j], sortArr[j - 1]];
      }
      j--;
    }
    // This will make sure while loop runs only for the times which doesn't loop into the sorted array section unnecessarily, saving CPU cycles.
  }

  return sortArr;
}
*/

// ----------------

/**
## Issue 2: Failed Approach.
// 01. A function implementation of the **Insertion Sort**.
// 1. Insertion sort swap only once similar to the selection sort to save on CPU cycles.
function insertionSort(arr) {
  let sortArr = [...arr];

  // i is used to select the **target or current value**.
  for (let i = 1; i < sortArr.length; i++) {
    // j will be used to compare current value with the value at left for shifting.
    let j = i;

    // Will be storing the current-value in the currentValue variable  temporarily.
    let currentValue = null;

    // If in the current index, a smaller value is placed in comparison to the values at the **left**, then store current value in the currentValue variable.
    if (sortArr[j] < sortArr[j - 1]) {
      currentValue = sortArr[j];
    }

    // Start Shifting.
    while (j >= 1) {
      // If the element at left is greater than the element at right, then store the minimum value index in the minimumIndex and start in-place shifting.
      // As **in-place shifting** is less expensive than **swapping** in regard to CPU cycles.

      // 01a. Shifting bigger values on the right.
      if (sortArr[j] < sortArr[j - 1] && sortArr[j]>minimumValue) {
        sortArr[j] = sortArr[j - 1];
      }
      // 01b. If left value is not greater than the right value than insert the minimum value.
      else {
        sortArr[j] = minimumValue;
      }
      j--;
    }
  }

  return sortArr;
}
 */

// ## Code regarding user-input via. Terminal.
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

// 01a. Taking and validating user input:
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

// -----------------------------

// 01b. Displaying output:
const result = insertionSort(arr);

console.log(result);

rl.close(); // This will close the CLI for the user input.
// This closes the readline interface and ends the user input session.
// -----------------------------

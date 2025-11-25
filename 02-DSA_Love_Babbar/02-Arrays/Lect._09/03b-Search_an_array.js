// # By ChatGPT: Search Array for the given value of n with full validation, retry loops, and error handling.

// ## Here is the full, polished version that includes all three improvements:
// 1. Input retry loops (keep asking until valid input is provided)
// 2. Validation using helper functions
// 3. try/catch error handling for complete safety

import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function ask(q) {
  return rl.question(q);
}

// -----------------------------
// Validation Helpers

function isValidArray(arr) {
  if (!arr.trim()) return false;
  const nums = arr.split(" ").map(Number);
  if (nums.some((x) => Number.isNaN(x))) return false;
  return true;
}

function parseArray(arr) {
  return arr.split(" ").map(Number);
}

function isValidNumber(value) {
  if (!value.trim()) return false;
  return !Number.isNaN(Number(value));
}

function parseNumber(value) {
  return Number(value);
}

// -----------------------------
// Search Function

function arrSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return { bool: true, i };
  }
  return { bool: false, i: -1 };
}

// -----------------------------
// Main Logic With Retry + Try/Catch

async function main() {
  try {
    // --- Get Valid Array Input ---
    let inputArray = "";
    while (true) {
      inputArray = await ask("Enter array elements separated by a single space: ");

      if (isValidArray(inputArray)) break;

      console.log("Invalid input. Please enter only numbers separated by a space.");
    }

    const arr1 = parseArray(inputArray);

    // --- Get Valid Search Value ---
    let inputN = "";
    while (true) {
      inputN = await ask("Enter an element to search within the array: ");

      if (isValidNumber(inputN)) break;

      console.log("Invalid number. Please enter a valid numeric value.");
    }

    const n = parseNumber(inputN);

    // --- Search ---
    const { bool, i } = arrSearch(arr1, n);

    if (bool) {
      console.log(`Given element ${n} found in the array at index ${i}`);
    } else {
      console.log(`Given element ${n} not found in the array`);
    }

  } catch (err) {
    console.log("An unexpected error occurred:", err.message);
  } finally {
    rl.close();
  }
}

// Start Program
await main();

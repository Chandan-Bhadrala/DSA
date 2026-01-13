/**
# Merge Sort.

## Question:
## Solution Approach:
1. 
*/
// -----------------------------

// ## Code provided by the ChatGPT with console.log to see how code is working.
function merge(left, right, depth) {
  console.log(`${"  ".repeat(depth)}merge called with`, left, right);

  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  console.log(`${"  ".repeat(depth)}merge returns`, result);
  return result;
}

function mergeSort(arr, depth = 0) {
  console.log(`${"  ".repeat(depth)}mergeSort called with`, arr);

  if (arr.length <= 1) {
    console.log(`${"  ".repeat(depth)}base case return`, arr);
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left, depth + 1);
  let sortedRight = mergeSort(right, depth + 1);

  return merge(sortedLeft, sortedRight, depth);
}

// Run
let arr = [4, 1, 3, 2, 12, 5, 0, 7, 9];
let sorted = mergeSort(arr);
console.log("Final sorted array:", sorted);

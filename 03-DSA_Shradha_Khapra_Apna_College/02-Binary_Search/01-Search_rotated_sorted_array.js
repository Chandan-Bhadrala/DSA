/**
# Find target in a rotated sorted array.

## Question:

## Solution Approach:

*/

// -----------------------------

function searchTarget(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Return for the success case.
    if (arr[mid] == target) {
      return { message: "Target found", index: mid, target };
    }

    if (arr[mid] > target && arr[mid]>arr[start]) {
    }
  }

  return -1;
}

// --- Output:
console.log(searchTarget([7, 9, 12, 1, 2, 4], 2));

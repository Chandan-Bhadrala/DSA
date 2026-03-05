/**
# Find target in a rotated sorted array.

## Question:

## Solution Approach:
*/

// -----------------------------

/**
## Improvement: In approach.
1. Will write clean inner if-else to just check whether the sorted known half has the target or not.
2. That's all.
*/

function searchTarget(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Return for the success case.
    if (arr[mid] == target) {
      return { message: "Target found", index: mid, target };
    }

    // We are going to use nested if-else.
    // 1.1. Let's first check using mid value that which bound is sorted start-mid or mid-end.
    if (arr[mid] >= arr[start]) {
      // 1.1a. We've start-mid sorted bound.

      // 1.2a. Now, as we're in the left-sorted bound, let's check whether target lies in the sorted space or the unsorted space.

      // Let's use another-if-else
      if (target < arr[mid] && target >= arr[start]) {
        // Target is in the **known left sorted half**.
        end = mid - 1;
      } else {
        // Target is in the known unsorted half.
        start = mid + 1;
      }
    } else {
      // 1.1b. We've mid-end sorted bound.
      // 1.2b. Now, as we're in the right-sorted bound, let's check whether target lies in the sorted space or the unsorted space.
      // Let's use another-if-else.
      if (target <= arr[end] && target > arr[mid]) {
        // Target is in the **known right sorted half**.
        start = mid + 1;
      } else {
        // Target is in the known left unsorted half.
        end = mid - 1;
      }
    }
  }

  // While-loop exhausted and target was not found.
  return -1;
}
// --- Output:
console.log(searchTarget([7, 8, 9, 10, 12, 1, 2, 3, 4, 5], 5));

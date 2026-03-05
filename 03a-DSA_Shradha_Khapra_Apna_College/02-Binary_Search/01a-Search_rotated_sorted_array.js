/**
# Find target in a rotated sorted array.

## Question:

## Solution Approach:

*/

// -----------------------------

/**
## Error: In approach.
1. Wrote too complex of an inner if-else conditions.
2. Suggestion simply check whether the target lies in the sorted half.
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
      if (target > arr[mid]) {
        // Then target is in the right unsorted half.
        start = mid + 1;
      } else if (target < arr[mid] && target >= arr[start]) {
        // Then target is in the left sorted half.
        end = mid - 1;
      } else if (target < arr[start]) {
        // Then target is again in the right unsorted half.
        start = mid + 1;
      }
    } else {
      // 1.1b. We've mid-end sorted bound.
      // 1.2b. Now, as we're in the right-sorted bound, let's check whether target lies in the sorted space or the unsorted space.
      // Let's use another-if-else.
      if (target > arr[end]) {
        // Then target is in the left-unsorted half.
        end = mid - 1;
      } else if (target < arr[end] && target > arr[mid]) {
        start = mid + 1;
      }
    }
  }

  // While-loop exhausted and target was not found.
  return -1;
}
// --- Output:
console.log(searchTarget([7, 8, 9, 10, 12, 1, 2, 3, 4, 5], 2));

/**
# Search for an element in a rotated and sorted array.
- Trying solution one last time to deduce and write the steps to find the target in the rotated sorted array in a conclusive and succinct manner.


## Question:
## Solution Approach:
*/

//-----------------

// 01. A function to search for a given element in the rotated sorted array.
function searchTarget(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = null;

  // Running a while to exhaust the search space in search of the target element in the rotated sorted array.
  while (start <= end) {
    // Updating mid-pointer value.
    mid = Math.floor((start + end) / 2);

    // Early return if mid pointer is having our target value.
    if (arr[mid] == target) return mid;

    // Now, let's check the bounds of the start pointer and the mid pointer.
    if (arr[mid] >= arr[start]) {
      // ## Then we have left sorted half.
    } else if (arr[mid] < arr[end]) {
      // ## Then we have right sorted half.
    }
  }

  // Leaving solution just here, so that my future self knows at a glance what we intend to do to search the target in the rotated sorted half.

  // Didn't found the target value within the array.
  return -1;
}

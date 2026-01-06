/**
# Search for an element in a rotated and sorted array.
- Trying solution one last time to deduce and write the steps to find the target in the rotated sorted array in a conclusive and succinct manner.


## Question:
## Solution Approach:
00. Early return if arr[mid] == target. 
01. Decide the bounds of the "start and the mid pointer" and of the "mid and the end pointer".
02. Use mid-pointer to decide which half is sorted.
  02.1. Once you know which bound (start-mid or mid-end) is sorted, use this knowledge within the nested if-else to deduce which pointer needs to be shifted (start or end).
    02.1.1. Use target comparison with the boundary (start, mid or end) pointers to deduce which bounds (start or end) needs to be shifted.
*/

//-----------------
/**
Error: In Approach.
1. Approach and explanation is all solid and good.
2. I just tried to be over-smart and used only one bound to check which boundary needs to be shifted.
3. However, I need to make a check with two boundaries using && operator to decide which bound needs to be shifted.
*/

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
      // ### Now, let's search the target in the left sorted half and shrink the boundaries.
      if (target > arr[mid]) {
        // Target is in the right-hand side.
        // So, shift start-pointer accordingly.
        start = mid + 1;
      } else {
        // else-if (target < arr[mid])
        // Shift end-pointer accordingly.
        end = mid - 1;
      }
    } else {
      // else-if (arr[mid] < arr[end])
      // ## Then we have right sorted half.
      // ### Now, let's search the target in the right sorted half and shrink the boundaries.
      if (target > arr[end]) {
        // Target is in the left-hand side.
        // So, shift end-pointer accordingly.
        end = mid - 1;
      } else {
        // else-if (target < arr[end])
        // Shift start-pointer accordingly.
        start = mid + 1;
      }
    }
  }

  // Didn't found the target value within the array.
  return -1;
}

// ---
// Output:
console.log(searchTarget([7, 9, 12, 1, 2, 3, 5], 7));

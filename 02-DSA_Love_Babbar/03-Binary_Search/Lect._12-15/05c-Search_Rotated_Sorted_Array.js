// # Search for an element in a rotated and sorted array.
// 1. So, rewriting the code again, it is **not mandatory** to use binary search only in the sorted half. We could encounter a situation where the target element is in the unsorted half of the array.
// 1.1. And we might need to shift our pointers towards the unsorted half to find the target element.
// 1.1.1. Thus, from this situation, we can conclude that it is good to apply binary search in the sorted half, but we could arrive at a situation where we have to apply binary search in the unsorted half of the array.

//-----------------

// Approach to the problem:
// 1. Compare the mid-pointer with the "start or the end pointer" to determine the bounds of the **start and mid pointer** and the bounds of the **mid and end pointer**.
// 1.1. After that, keeping the **target element value** in mind, move the "start or the end pointer" to tighten or shrink the "search bounds" within the array.
// 2. Keep repeating this process in a while loop until the while loop exhausts.

//-----------------

// 01. A function to search for a given element in the rotated sorted array.
function searchTarget(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = null;

  while (start <= end) {
    // Updating mid-pointer value.
    mid = Math.floor((start + end) / 2);

    //00. Check and return, if the element is found at mid.
    if (arr[mid] === target) return mid;

    // 00a. Accessing and evaluating the bounds of the **start and mid pointers** and the bounds of the **mid and end pointers**.
    // 00b. Keeping the target value in mind, shrinking our search bound space by either shifting the **start or the end pointer**.

    // 1. Below condition tell us about the bounds covered by the **start and the mid** pointer.

    if (arr[start] <= arr[mid]) {
      // 1a. If this condition is true, then our the our **start and the mid** pointer covers the range or bounds of the **left sorted half** of the array.

      // 1a.1. Now, we will check whether the target lies in the left sorted bound or in the right unsorted bound and will shrink the search space using start and the end pointers accordingly.
      if (target < arr[mid] && target >= arr[start]) {
        // If this condition succeeds, this will mean that target lies in the left bound, so will update the search boundaries accordingly.
        end = mid - 1;
      } else {
        // else, target lies in the right unsorted bound.
        start = mid + 1;
      }
    } else {
      // 1b. else "start > mid" and now bounds covered by our **start and the mid** pointers are the "left unsorted bounds". So, we will check our target element value with the **right sorted boundary** (which is given by the **mid-pointer** and the **end-pointer**), to make certain shift or shrink of the search boundary space.

      // Below conditions, will ensure we check for the target element in the right search space.
      if (target <= arr[end] && target > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  // Didn't found the target value within the array.
  return -1;
}

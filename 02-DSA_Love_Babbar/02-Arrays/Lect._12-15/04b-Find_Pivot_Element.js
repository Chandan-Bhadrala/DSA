// # Find the pivot element in a rotated and sorted array.
// 1. Will create a solution using a new mindset regarding Binary Search, i.e., only shrink the boundaries using the start and end pointers.
// 1.1. Only use the mid-pointer for comparison purposes, comparing the start/end pointer to the mid-pointer to evaluate which pointer (start or end) needs to be moved.
// 1.2. The mid-pointer will converge towards the final answer automatically.

//-----------------

// 01. A function to find the pivot element in the rotated sorted array.
function pivotElement(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Updating mid-pointer value.
    let mid = Math.floor((start + end) / 2);

    // We will be shifting start and the end pointer towards the unsorted section of the array, in pursuit to find the minimum value, which is our pivot value.

    // Shifting start-pointer towards the right.
    if (arr[mid] > arr[start]) {
      start = mid + 1;
    }

    // Shifting end-pointer towards the left.
    else if (arr[mid] < arr[start]) {
      end = mid;
    }

    // Our Pivot Element value (i.e., minimum value in the array), will be
    if (mid - 1 >= 0 && arr[mid] < arr[mid - 1]) {
      return arr[mid];
    } else if (arr[mid] > arr[mid - 1]) {
      end = mid - 1;
    }
  }
}

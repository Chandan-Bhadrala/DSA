// # Find the peak element's index in the mountain array.
// 1. Will create a solution using a new mindset regarding Binary Search, i.e., only shrink the boundaries using the start and end pointers.
// 1.1. Only use the mid-pointer for comparison purposes, comparing the start/end pointer to the mid-pointer to evaluate which pointer (start or end) needs to be moved.
// 1.2. The mid-pointer will converge towards the final answer automatically.

// 01. A function to search a peak element's index in a mountain arrays using Binary Search.
function searchPeakElement(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = null;

  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (mid + 1 < arr.length && arr[mid] > arr[mid + 1]) {
      end = mid;
    } else if (mid + 1 < arr.length && arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    }
  }
  return mid;
}

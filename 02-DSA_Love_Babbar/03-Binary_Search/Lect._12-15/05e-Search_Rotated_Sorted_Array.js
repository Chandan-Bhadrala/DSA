// # Search for an element in a rotated and sorted array.
// 1. Will be calculating pivot value first in this approach.
// 1.1. And then will confirm at which side the target value lies and will scan for the target value in that range later using binary search.

// Didn't tried this approach.
// Happily learned about the fact that:
// 1. Compare the start and the end pointer with the **mid pointer**.
// 1.1. Role of the **mid-pointer**, is only of the comparison with the start or the end pointer, to make the right decision of shrinking the boundaries.
// 2. In the unsorted array, always first find which half is sorted and only use the boundary pointer of the sorted half of the array to compare with it with the mid pointer, to come to the decision of shifting the start or the end pointer.
// 2.1. Start and the end pointers are considered as the boundary pointers.
// 2.1.1. Because they define the search space boundary.
//-----------------

// 01. A function to search for a given element in the rotated sorted array.
function pivotElement(arr, searchN) {
  let start = 0;
  let end = arr.length - 1;
  let mid = null;

  while (start <= end) {
    // Updating mid-pointer value.
    mid = Math.floor((start + end) / 2);

     //00. If the element is found at mid.
    if (arr[mid] === searchN) return mid;

    // 1. Selecting either of the sorted side of the array for searching the target value.

    // 1.1. Below condition assures us, the target element is in the left sorted array half.
    if (searchN > arr[end]) {
      // Selecting the new index values to point, for the start and the end index.
      if (arr[mid] > arr[end] && searchN > arr[mid]) start = mid + 1;
      else if (arr[mid] < arr[end]) end = mid - 1;

      // Returning the target index, if found.
      if (searchN == arr[start]) return start;
      if (searchN == arr[end]) return end;
    }
    // 1.2. Below condition assures us, the target element is in the right sorted array half.
    else {
      // Selecting the new index values to point, for the start and the end index.
      if (arr[mid] > arr[end]) start = mid + 1;
      else if (arr[mid] < arr[end] && arr[mid] < searchN) start = mid + 1;
      else if (arr[mid] < arr[end] && arr[mid] > searchN) end = mid - 1;

      // Returning the target index, if found.
      if (searchN == arr[start]) return start;
      if (searchN == arr[end]) return end;
    }
  }

  // Didn't found the target value within the array.
  return -1;
}

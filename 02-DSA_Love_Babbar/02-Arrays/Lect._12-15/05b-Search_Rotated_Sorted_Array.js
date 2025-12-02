// # Search for an element in a rotated and sorted array.
// 1. Will be calculating pivot value first and then will confirm at which side the target value lies and will scan for the target value in that range later using binary search.

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

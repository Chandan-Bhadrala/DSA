/**
# Binary Search.

## Question:
## Solution:
*/
// -----------------------------

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // Base Case:
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] == target) return mid;
  
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  else return binarySearch(arr, target, start, mid - 1);
}

// --- Output:
console.log(binarySearch([3, 4, 5, 7, 9, 13], 9));

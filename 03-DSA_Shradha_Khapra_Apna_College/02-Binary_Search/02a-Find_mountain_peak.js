/**
# Find peak index in the mountain array.

## Question:
1. 

## Solution Approach:

*/

// -----------------------------

/**
## Error: In approach
1. If mid = 0 or mid = arr.length - 1, then I'm trying to access the out-of-bound indices in the very first if-check by using mid + 1 && mid - 1.
2. So, I should use a simple thought, I should move towards the inclining slope of the mountain.
*/
function mountainPeak(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Return for the success case, found the peak element.
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1])
      return { index: mid, value: arr[mid] };

    // Shrink boundaries.
    if (arr[mid] > arr[mid - 1]) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

// --- Output:
console.log(mountainPeak([1, 2, 3, 5, 4, 2, 1]));

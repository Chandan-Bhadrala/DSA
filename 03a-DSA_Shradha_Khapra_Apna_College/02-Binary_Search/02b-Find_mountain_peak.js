/**
# Find peak index in the mountain array.

## Question:
1. 

## Solution Approach:

*/

// -----------------------------

/**
## Improvement: In approach
1. Will only check whether, I'm in ascending slope or not.

## Error: In approach
1. We are stuck in an infinite loop in the else case.
2. So, in the else case we must always changing/shrinking the boundaries.
3. Issue, was not the point 2, issue was mountain peak was found at the convergence point (convergence of the start == end).
  3.1. And I was using start <= end in the while loop, which caused the infinite loop.
*/
function mountainPeak(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[mid + 1]) {
      // Then let's move onwards in the search of the mountain peak.
      start = mid + 1;
    } else {
      // Halt to check whether the current value is a peak or not, as we are in a case of the mid + 1 < mid.
      end = mid;
    }
  }

  if (start <= end) return { stIndex: start, endIndex: end, value: arr[start] };
  else {
    // If start > end, peak was not found.
    return -1;
  }
}

// --- Output:
console.log(mountainPeak([1, 2, 3, 5, 4, 2, 1]));

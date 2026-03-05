/**
# Check if an array is sorted or not.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
1. Minor Code Improvement by the ChatGPT.
2. It is minor but still a cool improvement.
3. Base case will be hit for the i > = arr.length -1, no need to check the boundary condition in the every recursive call in the below if-condition as I've did in the earlier code.
  3.1. However, this minor condition can save a loads of the CPU cycles for a bigger array.
*/

function isArraySorted(arr, i = 0) {
  if (i >= arr.length - 1) return 1;
  if (arr[i] > arr[i + 1]) return -1;
  return isArraySorted(arr, i + 1);
}

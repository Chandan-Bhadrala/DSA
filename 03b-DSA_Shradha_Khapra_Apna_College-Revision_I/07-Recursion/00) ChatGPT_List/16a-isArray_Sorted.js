/**
# Check if an array is sorted or not.

## Question:
## Solution Approach:
1. I only need one variable count, to count the break in the ascending order of the array elements.
    1.1. The moment count > 1, return -1 to indicate array is not sorted.
2. Use break case to return 1 stating that, end of the array has been reached without any break in the ascending order of the array elements.
*/
// -----------------------------


/**
Code Improvement: I thought early return is not possible in the recursion, but ChatGPT stated that early returns are possible in the ChatGPT and has prepared an update improved code which is stored in the 17b file.
*/

function isArraySorted(arr, i = 0, count = 0) {
  // Break Case: To terminate the recursive loop and to return a value 1, to indicate that, array is sorted.
  if (i >= arr.length) return count;

  // Boundary Check before checking adjacent array elements.
  if (i < arr.length - 1 && arr[i] > arr[i + 1]) {
    count++;
  }

  // No scop of the early return in the recursion, so have to change the code and has to consider a value of count > 0 means array is not sorted.

  // i+1 instead of i++ to avoid updating the value of i for the current frame stack.
  return isArraySorted(arr, i + 1, count);
}

// --- Output:
console.log(isArraySorted([1, 2, 3, 0]));

/**
1. While Stacking recursive call stacks, count variable is being updated upon success of the if condition.

2. While unwinding only return value is being carried over from the base case to the calling function.
*/

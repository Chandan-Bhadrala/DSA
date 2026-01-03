/**
# Check if an array is sorted or not.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
Code Improvement:
1. Has introduced early return in the recursion.
2. Thus, no need for the count variable.
*/

function isArraySorted(arr, i = 0) {
  // Break Case: To terminate the recursive loop and to return a value 1, to indicate that, array is sorted.
  if (i >= arr.length) return 1;

  // Below is the early return condition, this will stop recursive loops and will terminate recursion preemptively.
  // Boundary Check before checking adjacent array elements.
  if (i < arr.length - 1 && arr[i] > arr[i + 1]) {
    return -1;
  }

  // Below code line will start returning only when base case is hit and will propagate the return value provided by the base case.
  // i+1 instead of i++ to avoid updating the value of i for the current frame stack.
  return isArraySorted(arr, i + 1);
}

// --- Output:
console.log(isArraySorted([1, 2, 3, 0]));

/**
1. While Stacking recursive call stacks and reach the base case only if the array is sorted.
  1.1. If array is not sorted then, if-condition will make recursion stop preemptively without let recursion ever reach towards the base case.

2. Base case will only be reached if the array is sorted and in this case unwinding of the recursive calls will lead to the propagation of the return value seeded by the base case.
*/


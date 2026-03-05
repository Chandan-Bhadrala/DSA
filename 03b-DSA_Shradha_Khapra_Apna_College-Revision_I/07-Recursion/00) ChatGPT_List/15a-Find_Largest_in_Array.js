/**
# Find maximum element in an array

## Question:
## Solution Approach:
*/
// -----------------------------

// Linear Search.
function largestElement(arr, i = 0, max = arr[0]) {
  // Base case: Will terminate the recursive loop and will return back the max value from the function argument received or one may say the last final value stored in the max will be returned upon the base case being hit.
  if (i >= arr.length) return max;

  i++;

  if (arr[i] > max) max = arr[i];

  // Below code line will simply propagate the return value "max" sent by the **base case** from its function parameter to the caller function.
  return largestElement(arr, i, max);
}

// --- Output:
console.log(largestElement([1, 3, 5, 7]));

/**
## Recursive Call Frame Stacking
f(i=0) -> max is set to 1.
f(i=1) -> max is set to 3.
f(i=2) -> max is set to 5.
f(i=3) -> max is set to 7.
f(i=4) -> Hit the base case, so terminate the recursive loop and return max as 7.
// So return value is **set** only once in this whole code and that too by the base case from its received function arguments.

## Unwinding Phase
f(i=4) -> Base Case: Just return max=7 from its received function arguments.
f(i=3) -> Just propagate the return value received by the base case.
f(i=2) -> Just propagate the return value received by the base case.
f(i=1) -> Just propagate the return value received by the base case.
f(i=0) -> Just propagate the return value received by the base case to the calling function.
*/

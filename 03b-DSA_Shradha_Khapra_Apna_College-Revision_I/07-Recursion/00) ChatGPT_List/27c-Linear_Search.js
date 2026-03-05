/**
# Find target element in an array.

## Question:
## Solution Approach:
*/
// -----------------------------
/**
## New Approach:
- capturing the result of the deeper recursion.
- deciding whether to override it or preserve it.
*/

// Linear Search: Head Recursion
function searchTarget(arr, target, i = 0) {
  // Base case to terminate the recursive loop and let the initial answer be -1;
  if (i === arr.length) return -1;

  // Initially store the result from the base case.
  let prevRes = searchTarget(arr, target, i + 1);

  // Change the res value upon the execution of the if condition.

  // If the target is previously found, don't change the result value and pass the index of the target from the rear end of the array to the caller function.
  if (prevRes != -1) return prevRes;

  // If the target is present at the i index of the current frame and was not found earlier. Then update the index value.
  if (arr[i] == target) return i;

  // If target was neither found earlier neither in this frame stack arguments then keep passing the res as -1 to indicate that target is not found yet in the array.
  return prevRes;
}

// --- Output:
console.log(searchTarget([1, 2, 2, 2, 3, 3, 4, 4, 7, 7, 7, 9, 9], 7));

/**
# Search target in the given array.

## Question:
## Solution Approach:
*/
// -----------------------------

// Linear Search:
function searchTarget(arr, target, i = 0) {
  // Base Case: If base case is reached it means the target was not found in the array.
  // So, return -1, to indicate the calling function that target is not present.
  if (i == arr.length) return -1;

  // Build the frame stack with the memory.
  let res = searchTarget(arr, target, i + 1);

  // If target found in the unwinding stage, change the result value.
  // This "i" will indicate the last occurrence of the target in the array.
  // The "i" will get modified if there is another repeated value at the left most of the array.
  if (arr[i] == target) return (res = i);

  // If the target is found in the deeper recursion call, then bubble up the result without modification.
  if (res != -1) return res;

  // If the target is neither found in the deeper recursion call and neither in this recursion call then let the base result bubble up.
  return res;
}

// --- Output:
console.log(searchTarget([1, 2, 3, 4, 5], 4));

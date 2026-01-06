/**
# Find target element in an array.

## Question:
## Solution Approach:
*/
// -----------------------------
/**
## Error in Approach:
1. However, for the lower indices where target is not present and return value will again change from i to -1.
2. So, I'm not preserving the result of the deeper call upon target found.
3. Thus, need a different improved approach.
*/

// Linear Search: Head Recursion
function searchTarget(arr, target, i = 0) {
  // Base case to terminate the recursive loop once the end of the array is reached.
  if (i === arr.length) return;

  // Below function is simply providing the passed arguments to the frame stack while stacking to the lower if-code block to return the value as per the if-condition execution.
  searchTarget(arr, target, i + 1);

  // If target is found return the index or let the lower return value keep returning -1 to indicate that target is not found.
  // This will return the first presence/index from the last of the target value.
  if (arr[i] == target) return i;
  else {
    return -1;
  }

  // ## Error in Approach.
  // However, for the lower indices where target is not present return value will again change from i to -1.
}

// --- Output:
console.log(searchTarget([1, 2, 2, 2, 3, 3, 4, 4, 7, 7, 7, 9, 9], 7));

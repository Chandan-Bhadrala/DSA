/**
# Find unique element in the array.

## Question:
## Solution Approach:
1. Use XoR to filter out the duplicates and the answer will be your unique element in the array.
*/
// -----------------------------

function uniqueElement(arr) {
  let ans = null;
  for (let x of arr) ans ^= x;
  return ans;
}

// --- Output:
console.log(uniqueElement([1, 2, 2, 3, 4, 3, 1, 5, 4]));

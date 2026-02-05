/**
# 2 Sum (O(n^2))

## Question:

## Solution Approach:
*/

// -----------------------------

// ## Time Complexity (O(n^2)):
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) return true;
    }
  }
  return false;
}

// --- Output:
console.log(twoSum([1, 3, 5, 6, 7, 8, 9, 11, 15], 9));

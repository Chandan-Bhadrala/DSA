/**
# 2 Sum (O(n log n))

## Question:

## Solution Approach:
*/

// -----------------------------

// ## Time Complexity (O(n log n)): For Sorted array.
function twoSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    // Early return upon finding the success case.
    if (arr[i] + arr[j] == target) return true;

    if (arr[i] + arr[j] > target) j--;
    if (arr[i] + arr[j] < target) i++;
  }

  return false;
}

// --- Output:
console.log(twoSum([1, 3, 5, 6, 7, 8, 9, 11, 15], 9));

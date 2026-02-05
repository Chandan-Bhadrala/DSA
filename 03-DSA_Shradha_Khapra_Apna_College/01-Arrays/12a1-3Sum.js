/**
# Three Sum.


## LeetCode Link: https://leetcode.com/problems/3sum/ 

## Question:
1. We'll be given an array and we've to find the triplets at unique indices whose sum is equal to zero.

## Solution Approach: O(n^3)
*/

// -----------------------------

/**
Error: In approach.
1. As of now, below code is adding all the triplets whose sum is equal to the zero.
  1.1. However, I'm supposed to add and return only unique triplets.
2. Set variable is unable to filter out the repeating triplets.
  2.1. As set can only distinguish between the primitives like numbers and strings.
  2.2. And I'm adding arrays into the set.
  2.3. Each array has its own unique address in the memory.
  2.4. Though they may have same elements but to set these all arrays are unique as they have unique addresses.
3. So, to make set recognize the repeated triplet, I need to convert the array elements into a sorted string.
  3.1. And set will compare the sorted strings to identify whether the same string has been added previously into the set or not.
*/

function threeSum(arr) {
  let ansSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          ansSet.add([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return ansSet;
}

// --- Output:
console.log(threeSum([0, -1, 1, -2, 2, 3, 2, 1]));

/**
# Three Sum.


## LeetCode Link: https://leetcode.com/problems/3sum/ 

## Question:
1. We'll be given an array and we've to find the triplets at unique indices whose sum is equal to zero.

## Solution Approach: O(n^3)
*/

// -----------------------------

function threeSum(arr) {
  let ansSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          let triplets = [arr[i], arr[j], arr[k]];

          // Sort the triplets for the comparisons.
          triplets.sort((a, b) => a - b);

          // Stringify the triplets using arrays join method.
          let stringifyTriplets = triplets.join(","); // store as a string.
          // Above added comma will help later in building back the original numbers array.

          // console.log(stringifyTriplets);

          ansSet.add(stringifyTriplets);

          // console.log(ansSet);
        }
      }
    }
  }

  // up till now, result is in the strings within the ansSet.
  // Need to convert it back into the pure array form.
  return Array.from(ansSet).map((item) => item.split(",").map(Number));

  // Above last .map is converting the strings array elements into the Number form.
  // Above last .map is a shorthand and same can be written as below.
  // May read the following corresponding MD file to better understand working and need for the last .map(Number).
  // return Array.from(ansSet).map((item) => item.split(",").map(value => Number(value))
}

// --- Output:
console.log(threeSum([0, -1, 1, -2, 2, 3, 2, 1]));

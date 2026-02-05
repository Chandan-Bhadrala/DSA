/**
# Three Sum.


## LeetCode Link: https://leetcode.com/problems/3sum/ 

## Question:
1. We'll be given an array and we've to find the triplets at unique indices whose sum is equal to zero.

## Solution Approach: O(n^2)
*/

// -----------------------------

function threeSum(arr) {
  let ansSet = new Set();

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      // 1. Success Case.
      if (arr[j] + arr[k] == -arr[i]) {
        let triplets = [arr[i], arr[j], arr[k]];

        // Sort the triplets for the comparisons.
        triplets.sort((a, b) => a - b);

        // Stringify the triplets using arrays join method.
        let stringifyTriplets = triplets.join(","); // store as a string.
        // Above added comma will help later in building back the original numbers array.

        // console.log(stringifyTriplets);

        // Set Data type can differentiate between the same string and different strings.
        // With the help of this differentiation, set will make sure only unique values gets added to ansSet.
        ansSet.add(stringifyTriplets);

        // console.log(ansSet);

        j++; // To find the next triplet.
      }

      if (arr[j] + arr[k] > -arr[i]) k--;
      if (arr[j] + arr[k] < -arr[i]) j++;
    }
  }

  return Array.from(ansSet).map((item) => item.split(",").map(Number));
}

// --- Output:
console.log(threeSum([0, -1, 1, -2, 2, 3, 2, 1]));

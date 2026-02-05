/**
# Find missing and the repeated values in the given 2D array.

## Return: [repeatedValue, missingValue]

## LeetCode Link: https://leetcode.com/problems/find-missing-and-repeated-values/description/

## Question:
1. In a given 2D array of row size n.
  1.1. We'll be given the range of numbers 1 to n^2.
2. We've to find the missing and the duplicate number.

## Solution Approach:
1. We'll iterate over the array and store its value in a map.
2. Before inserting the value, we'll check whether the currentNum already present in the map or not.
  2.1. If the currentNum already exists in the map then we got our repeated value.

### To find the missing values, we've two ways.
1. We can use an array of size n^2 and mark each value of the index to be 0.
  1.1. Here, index value represent the number and it value represents the frequency.
  1.2. This frequency array can be used to find the missing value as well as the repeated value by looking at the frequency of the value in the frequency array.

2. Second we can compute the sum of n natural numbers using arithmetic progression and then add the repeated found value to it.
  2.1. This way we can find the missing number.
  Sum of n natural numbers - current sum of numbers + repeatedValue = missingNum
*/

// -----------------------------

// ## Time Complexity (O(n)):
function findMissingAndRepeatedValue(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  let biggestNum = rows * rows;

  let map = new Map();
  let ans = [];

  // Find repeated value.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Checking whether map has the current value as a key already stored in it.
      if (map.has(arr[i][j])) {
        // Pushing repeated value into the ans variable.
        ans.push(arr[i][j]);

        // Break out of inner loop upon finding the answer.
        break;
      }

      // Save the current value into the map.
      // Saving value as a key and the indices as a value.
      map.set(arr[i][j], [i, j]);
    }

    // Break out of the outer loop upon finding the answer.
    if (ans.length > 0) break;
  }

  // Find Missing Value using a frequency array.
  let freqArray = new Array(biggestNum + 1).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Extracting the arr value and updating the freqArray corresponding index.
      freqArray[arr[i][j]]++;
    }
  }

  // Traverse the freqArray to find the missing value.
  for (let i = 1; i < freqArray.length; i++) {
    if (freqArray[i] == 0) ans.push(i);
  }

  return ans;
}

// --- Output:
console.log(
  findMissingAndRepeatedValue([
    [1, 3, 5],
    [6, 7, 9],
    [9, 8, 4],
  ]),
);

// 2 is missing and 9 is repeating.

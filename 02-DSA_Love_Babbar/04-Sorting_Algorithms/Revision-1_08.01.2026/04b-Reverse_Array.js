/**
# Reverse an Array.
## Question:
  1. We will be given an array and we have to reverse all of its elements.
## Solution Approach:
  1. Take two pointers:
    1.1. i -> starts from the start-index of the array.
    1.2. j -> starts from the end-index of the array.
  2. Keep swapping the elements of the both indices and keep pushing both the pointers towards each other.
*/

/**
Improved: Approach.
1. Restricted i to iterate only till the middle of the array length.
*/

function reverseArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // Swap the elements to reverse.
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }
  return arr;
}

console.log(reverseArray([2, 4, 1, 5]));

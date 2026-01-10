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
Error: In Approach.
1. Code lets i iterate till the end, this way array is rotated twice.
2. I'm supposed to let i iterate only till the middle.
3. As I'm using one exclusive pointer and one derived pointer to iterate over the array from the **front and the rear**.
  3.1. I'm supposed to stop i before it reaches the middle length of the array.
*/

function reverseArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Swap the elements to reverse.
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }
  return arr;
}

console.log(reverseArray([2, 4, 1, 5]));

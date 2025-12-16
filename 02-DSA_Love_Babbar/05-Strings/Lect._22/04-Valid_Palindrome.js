/**
# Valid Palindrome.
Link:
https://leetcode.com/problems/valid-palindrome/description/

## Question:
1. Need to check given string is a valid palindrome or not.
2. Has to remove the alphanumeric characters from the string and perform the palindrome check.
## Solution Approach:
  1. Use replace and regex function to remove the alphanumeric characters from the string.
  2. Then make the palindrome check. 
*/

// -----------------------------

// 01. A function implementation of the Selection Sort.
// 1. Selection Sort, swaps array elements only once.
function selectionSort(arr) {
  let sortArr = [...arr];

  // Take first element of the array and then compare it with other array elements of the array using inner-loop.
  // If any other array element of the inner-loop found bigger than the array element selected by the outer-loop then, save its index and swap those elements **ONLY ONCE** at the end of the inner-loop only, to save CPU cycles on swapping.
  for (let i = 0; i < sortArr.length; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (sortArr[minimumIndex] > sortArr[j]) {
        // Way to swap array elements in JS.
        minimumIndex = j;
      }
    }
    // Swap Once.
    // Swap the found minimum index with the help of the inner-loop, with the outer-loop index value.
    [sortArr[i], sortArr[minimumIndex]] = [sortArr[minimumIndex], sortArr[i]];
  }

  return sortArr;
}
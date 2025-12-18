/**
# Replace Spaces. URL-ify a given string (Replace spaces with %20).
Link:
https://www.geeksforgeeks.org/problems/urlify-a-given-string--141625/1

**Input:** "Hi there, how are you."
**Output:** "Hi%20there,%20how%20are%20you."

## Question:
1. Find the number of characters in the string.
## Solution Approach:
  1. In C++ or C, this question has significance, as in C or C++, we will be using "Null Character (\0)" to locate the end of the string and count the number of characters before the null-character.
  2. In JS, we could simply use array.length or string.length to see the length of the string.  
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

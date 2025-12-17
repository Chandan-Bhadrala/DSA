/**
# Reverse words.
Link:
https://leetcode.com/problems/reverse-words-in-a-string/description/

**Example 1:**
**Input:** s = "the sky is blue"
**Output:** "blue is sky the"

**Example 2:**
**Input:** s = "  hello world  "
**Output:** "world hello"
**Explanation:** Your reversed string should not contain leading or trailing spaces.

**Example 3:**
**Input:** s = "a good   example"
**Output:** "example good a"
**Explanation:** You need to reduce multiple spaces between two words to a single space in the reversed string.



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

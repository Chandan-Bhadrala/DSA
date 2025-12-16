/**
# Reverse a String.

## Question:
1. Reverse a string.
  1.1. String given as an array elements.

## Solution Approach:
  1. Strings are stored in an array similar to the numbers stored in the array.
  2. So simply use two pointers to reverse the string.
    2.1. One pointer holds the first element.
    2.2. Second pointer holds the last element.
  3. Both pointers keep on swapping elements and keep converging towards each other incrementally.
*/

// -----------------------------

// 01. A function to reverse a string given as array elements in-place using two-pointers.
function reverseString(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
}

let s = ["a", "b", "c"];
console.log("output", reverseString(s));

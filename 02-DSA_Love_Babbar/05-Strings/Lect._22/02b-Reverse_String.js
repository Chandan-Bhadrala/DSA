/**
# Reverse a String.
let s = "abc";

## Question:
1. Reverse a string.
  1.1. String given as a word.

## Solution Approach:
  1. Strings are stored in an array similar to the numbers stored in the array.
  2. So simply use two pointers to reverse the string.
    2.1. One pointer holds the first element.
    2.2. Second pointer holds the last element.
  3. Both pointers keep on swapping elements and keep converging towards each other incrementally.
*/

// -----------------------------

// 01. A function to reverse a string in-place using two-pointers.
function reverseString(s) {
  let sCopy = s.split("");

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    [sCopy[i], sCopy[j]] = [sCopy[j], sCopy[i]];
    i++;
    j--;
  }
  // return sCopy = sCopy; // output: [ 'c', 'b', 'a' ]
  // return sCopy = sCopy.join(); // output: c,b,a
  // return sCopy = sCopy.join(" "); // output: c b a
  return sCopy = sCopy.join(""); // output: cba
}

let s = "abc";
console.log("output", reverseString(s));

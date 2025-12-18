/**
# Remove all occurrences of a substring.

Link:
https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/

## Question:
1. Find the number of characters in the string.
## Solution Approach:

*/

// -----------------------------

// 01. A function implementation to remove all occurrences of a substring - w/o using replace helper function.
function removeAllSubstrings(s, part) {
 
}

//------------

let s = "daabcbaabcbc"
let substring = "abc" // Output: "dab"
// let s1 = "Hi there, how are you.";
// let substring1 = "there,";
console.log(
  "Given string after removing the substring:",
  removeAllSubstrings(s, substring)
);
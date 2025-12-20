/**
# Remove all occurrences of a substring.

Link:
https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/

## Question:
1. 
## Solution Approach:
1. Will create a window of substring length.
2. Will only scan for the substring once match for the first instance/character of the substring is found.
3. Scan only for the "Full string length - substring length". 
  3.1. To avoid pushing **scan/read pointer** beyond full string length.
*/

// -----------------------------
/**
## New approach:
 1. Use split and join to create a solution.
 2. And remove substring upon only finding the full part to avoid pointer rollback.
* /


// 01. A function implementation to remove all occurrences of a substring - w/o using replace helper function.
function removeAllSubstrings(s, part) {
  let windowSize = part.length; // Accessing total number of substring characters.
  let stringLastIndex = s.length - 1;
  let newString = ""; // String value after every iteration.
  let finalString = ""; // String value after last scan.

  let i = 0;
  while (i <= stringLastIndex - windowSize) {
    // Try to remove the substring upon finding its first character match.
    if (s[i] == part[0]) {
      // Check for i, i + 1, i + 2, max till part.length for rest of the character matching.
      let scanLimit = i + windowSize;
      let iPointerValueBeforeRemovingSubstring = i;
      for (let j = 0; i <= scanLimit; ) {
        if (s[i] == part[j]) {
          // let the pointer increment for the next check.
          i++;
          j++;
        } else {
          i = iPointerValueBeforeRemovingSubstring;
        }
      }
    }
    newString += s[i];
    i++;
  }

  // Add the last remaining characters avoided by the while loop and the window size.
  for (; i <= stringLastIndex; i++) {
    newString += s[i];
  }

  return newString;
}

//------------

let s = "daabcbaabcbc";
let substring = "abc"; // Output: "dab"
// let s1 = "Hi there, how are you.";
// let substring1 = "there,";
console.log(
  "Given string after removing the substring:",
  removeAllSubstrings(s, substring)
);

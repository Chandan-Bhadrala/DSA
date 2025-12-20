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

## Left the problem.
  1. It is too difficult for me to create even array based solution.
    1.1. Or I just don't want to spend anymore time on it.
    1.2. As I will never be doing this code in real life.
  2. I'm most likely going to be a fullstack in some average company and not in the MAANG ever or building compilers or DOM.
    2.1. So, I can leave to try to solve this question with bare minimum helpers and start moving forward.
  3. Might solve this problem if I ever needed in the future.
*/


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

// ChatGPT Solution.
// Solution 1:
function removeAllSubstrings1(s, part) {
  let result = [];
  let partLen = part.length;

  for (let ch of s) {
    result.push(ch);

    // Check only when enough characters exist
    if (result.length >= partLen) {
      let match = true;

      for (let i = 0; i < partLen; i++) {
        if (result[result.length - partLen + i] !== part[i]) {
          match = false;
          break;
        }
      }

      // Remove substring if matched
      if (match) {
        result.length -= partLen;
      }
    }
  }

  return result.join("");
}

//--------------

// Solution 2:
function removeAllSubstrings2(s, part) {
  let result = "";
  let partLen = part.length;

  for (let i = 0; i < s.length; i++) {
    result += s[i];

    // Only check when result is long enough
    if (result.length >= partLen) {
      let match = true;

      for (let j = 0; j < partLen; j++) {
        if (result[result.length - partLen + j] !== part[j]) {
          match = false;
          break;
        }
      }

      // Remove the substring if matched
      if (match) {
        result = result.slice(0, result.length - partLen);
      }
    }
  }

  return result;
}

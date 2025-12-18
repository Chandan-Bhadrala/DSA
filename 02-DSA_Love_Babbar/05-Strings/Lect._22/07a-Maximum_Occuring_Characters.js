/**
# Find maximum occurring characters.

Link:
https://www.geeksforgeeks.org/problems/maximum-occuring-character-1587115620/1

**Input String:** "abcdeapapqarr"
**Expected Output:** 'a'
**Explanation:** Since 'a' has appeared four times in the string which happens to be the highest frequency character, the answer would be 'a'.

## Question:
1. Find characters which has maximum occurrence in the given string in the string.
## Solution Approach:
 1. Create an object and push character and its count as a key value pair.
 2. Find the maximum key-value pair and return it.
*/

// -----------------------------

// 01. A function to find and return the maximum or most frequent character in the string.
function maxCharacter(s) {
  s = s.toLowerCase(); // normalize string letter casing.

  let charObject = {};

  for (let i = 0; i < s.length; i++) {
    // L.H.S. is the read location for the value of the object key.
    // R.H.S. is the write operation that need to be performed on the object value.
    // Here, or "||" operator, R.H.S. takes the previous value, if no previous value exists consider it 0 rather than undefined.
    // If the key wouldn't exist it will create the key without the cry of undefined issue.
    charObject[s[i]] = (charObject[s[i]] || 0) + 1;
  }

  let maximumOccurredChar = "";
  let maximumOccurredCharCount = 0;

  // Search for the maximum occurred character.
  for (key in charObject) {
    // This pattern is universal:
    // Primary condition OR
    // Secondary tie-break condition
    if (
      charObject[key] > maximumOccurredCharCount ||
      (charObject[key] === maximumOccurredCharCount && key < maximumOccurredChar)
    ) {
      maximumOccurredCharCount = charObject[key];
      maximumOccurredChar = key;
    }
  }

  return { maximumOccurredChar, maximumOccurredCharCount };
}

//------------
let s = "Output";
console.log("Max character in a string:", maxCharacter(s));

// Just a proof that string is stored as an character array.
// console.log(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);

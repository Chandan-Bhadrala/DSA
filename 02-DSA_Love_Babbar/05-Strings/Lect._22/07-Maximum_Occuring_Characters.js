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
 1. Create an array 0 to 25 index and push the corresponding character into the array accordingly.
 2. Find the maximum array element and its index in the array and return the corresponding character.
*/

// -----------------------------

// 01. A function to find and return the maximum or most frequent character in the string.
function maxCharacter(s) {
  let characterArray = [0];

  // Scan through array and push their number count in the corresponding array position.
  for (let i = 0; i < s.length; i++) {
    let index = s[i] - "a";
    characterArray[index] += 1;
  }
  let max = Math.max(...characterArray) + "a";
  return max;
}

//------------
let s = "Output";
// let s = "A man, a plan, a canal: Panama";

console.log("Reverse Words:", maxCharacter(s));

// Just a proof that string is stored as an character array.
// console.log(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);

/**
# Reverse words.

Link:
https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

**Example 1:**
**Input:** s = "Let's take LeetCode contest"
**Output:** "s'teL ekat edoCteeL tsetnoc"

**Example 2:**
**Input**: s = "Mr Ding"
**Output:** "rM gniD"

## Question:
1. Keep words in the string in their places, only mirror them.
## Solution Approach:
 
*/

// -----------------------------

// 01. A function to mirror words - Using JS helper function "split and join".
function mirrorSentenceWords(s) {
  // Normalize the white spaces in the given string.
  let normalizedString = s.trim().replace(/\s+/g, " ");

  // Split the normalized string character array on the basis of the single white spaces and let a word array form.
  let wordsArray = normalizedString.split(" ");

  // Loop through array using map method and return the word after applying split, reverse and join method.
  let mirroredSentence = wordsArray.map((w) => w.split("").reverse().join(""));

  return mirroredSentence.join(" ");
}

//------------
let s = "the sky is blue";
// let s = "A man, a plan, a canal: Panama";

console.log("Reverse Words:", mirrorSentenceWords(s));

// Just a proof that string is stored as an character array.
console.log(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);

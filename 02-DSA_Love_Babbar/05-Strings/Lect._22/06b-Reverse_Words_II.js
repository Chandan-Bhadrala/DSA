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

// 00. A helper function for trimming leading, trailing and more than one white space between the words.
function normalizeSpaces(s) {
  let res = [];
  let i = 0;
  let spaceAllowed = false;

  // skip leading spaces
  while (i < s.length && s[i] === " ") {
    i++;
  }

  for (; i < s.length; i++) {
    if (s[i] === " ") {
      if (spaceAllowed) {
        res.push(" ");
        spaceAllowed = false; // block further spaces
      }
    } else {
      res.push(s[i]);
      spaceAllowed = true; // a space may follow a word
    }
  }

  // remove trailing space if any
  if (res.length > 0 && res[res.length - 1] === " ") {
    res.pop();
  }

  return res.join("");
}

// 01. A function to reverse words - w/o JS split or join methods. Will consider string as an character array and will loop around to get the answer.
function reverseSentence(s) {
  // Trim the leading, trailing and in between words white spaces.
  let normalizedString = normalizeSpaces(s);
  let mirroredSentence = "";
  let word = "";

  // Let's consider string a stream of characters rather than array of words for the rotation purpose.
  let i = normalizedString.length - 1;
  while (i >= 0) {
    if (normalizedString[i] != " ") {
      // Building words in reverse, mirror fashion.
      word = word + normalizedString[i];
    } else {
      mirroredSentence = word + " " + mirroredSentence;
      word = "";
    }
    i--;
  }
  // Adding last boundary word.
  mirroredSentence = word + " " + mirroredSentence;

  return mirroredSentence;
}

//------------
let s = "the sky is blue";
// let s = "A man, a plan, a canal: Panama";

console.log("Reverse Words:", reverseSentence(s));

// Just a proof that string is stored as an character array.
// console.log(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);

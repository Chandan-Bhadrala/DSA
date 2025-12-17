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
  let reversedSentence = "";
  let word = "";

  // Let's consider string a stream of characters rather than array of words for the rotation purpose.
  let i = normalizedString.length - 1;
  while (i >= 0) {
    if (normalizedString[i] != " ") {
      word = normalizedString[i] + word;
    } else {
      reversedSentence = reversedSentence + word + " ";
      word = "";
    }
    i--;
  }
  // Adding last boundary word.
  reversedSentence = reversedSentence + word;

  return reversedSentence;
}

//------------
let s = "the sky is blue";
// let s = "A man, a plan, a canal: Panama";

console.log("Reverse Words:", reverseSentence(s));

// Just a proof that string is stored as an character array.
// console.log(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);

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
1. Normalize white-spaces in the string and reverse it.
## Solution Approach:
 
*/

// -----------------------------

// 01. A function to reverse words - Using JS helper function "split and join".
function reverseWords(s) {
  // Split is used to turn string characters array into a word array based on the delimiter.
  // Below I've used a single white space as delimiter to covert the characters array into a word array.
  let wordsArray = s.trim().replace(/\s+/g, " ").split(" ");

  // Now, we have a string words as an array elements, thus now we can play around with them in anyway we like.

  let i = 0;
  let j = wordsArray.length - 1;

  while (i < j) {
    [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];

    i++;
    j--;
  }
  // Convert array back to a string using join method.
  wordsArray = wordsArray.join(" ");
  return wordsArray;
}

//------------
let s = "the sky is blue";
// let s = "A man, a plan, a canal: Panama";

console.log("Reverse Words:", reverseWords(s));

// Just a proof that string is stored as an character array.
console.log(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
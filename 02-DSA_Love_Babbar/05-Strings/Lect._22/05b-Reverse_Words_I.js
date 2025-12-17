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

// 01. A function to reverse words - w/o JS split or join methods. Will consider string as an character array and will loop around to get the answer.
function reverseWords(s) {
  // Trim the white spaces between the words and leading and trailing white-spaces too.
  let k = 0;
  while (k < s.length) {
    if (s[k] >= "a") {
    }
    k++;
  }
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

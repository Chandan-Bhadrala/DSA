/**
# Replace Spaces. URL-ify a given string (Replace spaces with %20).
Link:
https://www.geeksforgeeks.org/problems/urlify-a-given-string--141625/1

**Input:** "Hi there, how are you."
**Output:** "Hi%20there,%20how%20are%20you."

## Question:
1. 
## Solution Approach:
 
*/

// -----------------------------
// ## There is error in below approach. I've tried to **edit** the string. Strings are immutable in every language for safety reasons.

// 01. A function implementation of the URL-IFY a given string - w/o using JS helper function.
function url_ifyString(s) {
  for (let i = 0; i < s.length; i++) {
    // ## This below code didn't worked because, strings are **immutable**.
    if (s[i] == " ") {
      s[i] = "%20";
    }
  }

  return s;
}

//------------
let s = "Hi there, how are you.";
console.log("URL-fy string:", url_ifyString(s));

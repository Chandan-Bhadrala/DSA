/**
# Replace Spaces. URL-ify a given string (Replace spaces with %20).
Link:
https://www.geeksforgeeks.org/problems/urlify-a-given-string--141625/1

**Input:** "Hi there, how are you."
**Output:** "Hi%20there,%20how%20are%20you."

## Question:
1. Find the number of characters in the string.
## Solution Approach:
  1. Use regex and JS replace function to complete. 
*/

// -----------------------------

// 01. A function implementation of the URL-IFY a given string.
function url_ifyString(s) {
  return s.replace(/\s+/g, "%20");
}

//------------
let s = "Hi there, how are you.";
console.log("Max character in a string:", url_ifyString(s));

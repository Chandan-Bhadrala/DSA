/**
# Check Palindrome.

## Question:
1. Check whether reversing a string yield a same string or not.
2. Return a boolean.
## Solution Approach:
  1. Reverse a string and make a comparison of original and reversed string.
  2. Return a boolean
*/

// -----------------------------

// 01. A function to check for the palindrome.
function checkPalindrome(s) {
  console.log(s)
  let sCopy = s;
  let i = 0;
  let j = sCopy.length - 1;
  
  while (i < j) {
    [sCopy[i], sCopy[j]] = [sCopy[j], sCopy[i]];
    i++;
    j--;
  }
  console.log(sCopy)
  return s == sCopy;
}

console.log("Check Palindrome:", checkPalindrome("Asmi"));

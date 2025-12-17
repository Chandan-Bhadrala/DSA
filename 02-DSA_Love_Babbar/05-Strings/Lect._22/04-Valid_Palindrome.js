/**
# Valid Palindrome.
Link:
https://leetcode.com/problems/valid-palindrome/description/

## Question:
1. Need to check given string is a valid palindrome or not.
2. Has to remove the non-alphanumeric characters from the string and perform the palindrome check.
## Solution Approach:
  1. Use replace and regex function to remove the non-alphanumeric characters from the string.
    1.1. Or use if-condition to push only **a-z or A-Z or 1-9** in the new array and **ignore** all other non-alphanumeric characters.
  2. Then make the palindrome check. 
*/

// -----------------------------

// 00. A helper function to remove all the non-alphanumeric character array elements from the passed characters-array.
function removeNonAlphanumericChar(s) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] >= "a" && s[i] <= "z") ||
      (s[i] >= "A" && s[i] <= "Z") ||
      (s[i] >= "0" && s[i] <= "9")
    ) {
      newString = newString + s[i];
    }
  }
  console.log(newString);
  return newString;
}

// 01. A function to check for the palindrome.
function validPalindrome(s) {
  // Converting "s" into a lowercase and further Splitting string "s" into an array elements.
  s = s.toLowerCase().split("");

  // Calling helper function to remove non-alphanumeric characters.
  s = removeNonAlphanumericChar(s);

  let sCopy = s.split("");

  let i = 0;
  let j = sCopy.length - 1;

  while (i < j) {
    [sCopy[i], sCopy[j]] = [sCopy[j], sCopy[i]];
    i++;
    j--;
  }

  // Joining/Converting sCopy as an array elements back to a string.
  sCopy = sCopy.join("");

  return s == sCopy;
}

//------------
let s = "A man, a plan, a canal: Panama";

console.log("Check Palindrome:", validPalindrome(s));

/**
# Reverse a string using recursion

## Question:
## Solution Approach:
*/
// -----------------------------

function reverseString(str, i = 0) {
  // Base case to terminate the recursive loop and to seed an empty string for further building up of the string.
  if (i === str.length) return "";

  // Accumulate the strings from the deeper recursive calls. Initially, we will receive an empty string from the base case for further building up.
  let reversedStr = reverseString(str, i + 1);

  return reversedStr + str[i];
}

// --- Output:
console.log(reverseString("abc"));

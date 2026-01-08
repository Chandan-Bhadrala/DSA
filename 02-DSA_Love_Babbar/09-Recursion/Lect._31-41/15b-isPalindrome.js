/**
# Reverse a String (Used two functions).
1. One for reversing the string.
2. One for checking whether the reversed string and the original string are same or not.

## Question:
## Solution Approach:
1. Will create a copy of a string in reverse and will return back its comparison result.
*/
// -----------------------------

/**
1. Need two functions, one for reversing string and one for boolean check that whether the two strings are palindrome or not.
*/

function reverseString(str, i = 0) {
  // Base Case: Terminate recursion and to seed a base value.
  if (i == str.length) return "";

  // Build frame stack with the memory of iterator i and str.
  // In unwinding phase modify and return the build up string, considering seed string returned from the base case.
  let prev = reverseString(str, i + 1);

  // Now, in unwinding phase we have memory of the last character first add it to the base string returned from the base case and return it further to the following unwinding recursive stacks.
  return prev + str[i];
}

function isPalindrome(str) {
  let reversedStr = reverseString(str);
  return reversedStr == str;
}

// --- Output:
console.log(isPalindrome("aba"));

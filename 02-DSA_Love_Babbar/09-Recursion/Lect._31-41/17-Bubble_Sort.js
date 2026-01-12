/**
# Reverse a String.

## Question:
## Solution Approach:
1. Will create a copy of a string in reverse and will return back its comparison result.
*/
// -----------------------------

/**
Error: In approach.
1. Need two pointers to return boolean value or
2. Need two functions, one for reversing string and one for boolean check that whether the two strings are palindrome or not.
*/

function isPalindrome(str, i = 0) {
  // Base Case: Terminate recursion and to seed a base value.
  if (i == str.length) return "";

  // Build frame stack with the memory of iterator i and str.
  // In unwinding phase modify and return the build up string, considering seed string returned from the base case.
  let prev = isPalindrome(str, i + 1);

  // Now, in unwinding phase we have memory of the last character first add it to the base string returned from the base case and return it further to the following unwinding recursive stacks.
  return prev + str[i];
}

// --- Output:
console.log(isPalindrome("aba"));

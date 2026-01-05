/**
# Remove all occurrences of a character from a string.

## Question:
## Solution Approach:
1. Strings are immutable, however string can be iterated over using an iterator.
2. So, will be creating a newString while iterating the original string.
3. I'll append one character after another into a new empty string.
    3.1. I'll only append those characters which are not asked to be removed.
*/
// -----------------------------

function removeOccurrences(str, target, newString = "", i = 0) {
  // Base case for terminating the recursive loop as well returning the newString variable up the recursive frame stacks till to the calling function.
  if (i == str.length) return newString;

  // Tail recursion.
  if (str[i] != target) newString += str[i]; // Append new character at the back of the newString variable.

  // Passing i + 1 rather than i = i + 1, to preserve the value of i for the current frame stack.
  return removeOccurrences(str, target, newString, i + 1);
}

// --- Output:
console.log(removeOccurrences("aabbddcdeffxxfzzzzgdfldf", "x"));

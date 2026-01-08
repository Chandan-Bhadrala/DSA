/**
# Reverse a String (Use two iterators).
- One Exclusive and one derived pointer.

## Question:
## Solution Approach:
1. Will use one explicit and one derived pointer to yield a result for the isPalindrome.
*/
// -----------------------------

/**
Correction in previous approach.
1. Base case terminates the recursive loops once the exclusive iterator reaches the middle of the str length.
*/

function isPalindrome(str, i = 0) {
  // Base Case: Terminate recursion.
  // If the base is reached that means all the intermediary comparisons were true, so str is a palindrome.
  if (i >= Math.floor(str.length / 2)) return true;

  // Build frame stack with memory of iterator i and hold the result of the deeper frame stacks.
  let prevRes = isPalindrome(str, i + 1);

  // Avoid another string check below, if the result has already proven to be negative.
  if(!prevRes) return false;

  // Modify the result if the condition doesn't match.
  if (str[i] !== str[str.length - 1 - i]) return false;

  // Or keep on propagating the previous result.
  // This third return is redundant and will never be used. As above two return statements will handle all the string check comparisons and return.
  return prevRes;
}

// --- Output:
console.log(isPalindrome("aba"));

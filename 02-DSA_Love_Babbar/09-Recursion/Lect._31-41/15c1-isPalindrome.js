/**
# Reverse a String (Use two iterators).
- One Exclusive and one derived pointer.

## Question:
## Solution Approach:
1. Will use one explicit and one derived pointer to yield a result for the isPalindrome.
*/
// -----------------------------

/**
Error: In approach.
1. I used two pointers one exclusive and one derived which is starting from the rear of the string.
2. So, the base case to stop the recursion should have, when the exclusive pointer reaches the middle length of the str.
*/


function isPalindrome(str, i = 0) {
  // Base Case: Terminate recursion.
  // If the base is reached that means all the intermediary comparisons were true, so str is a palindrome.
  if (i == str.length) return true;

  // Build frame stack with memory of iterator i and hold the result of the deeper frame stacks.
  let prevRes = isPalindrome(str, i + 1);

  // Modify the result if the condition doesn't match.
  if (str[i] !== str[str.length - 1 - i]) return false;

  // Or keep on propagating the previous result.
  return prevRes;
}

// --- Output:
console.log(isPalindrome("aba"));

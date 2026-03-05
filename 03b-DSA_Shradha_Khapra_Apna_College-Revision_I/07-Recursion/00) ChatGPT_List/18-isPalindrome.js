/**
# Check if a string is palindrome.

## Question:
## Solution Approach:
*/
// -----------------------------

// Linear Search
function isPalindrome(str, start = 0, end = str.length - 1) {
  // Base Case: Terminates the recursive loop and returns true as base case will be made reach only if the scan is complete.
  if (start >= end) return 1;

  // Below if-condition return will only start propagating upon hitting the base case with the success as an answer.
  if (str[start] == str[end]) {
    return isPalindrome(str, start + 1, end - 1);
  }
  // Else case will be triggered for the early return for a fail case of the above if-condition only and it'll propagate the recursion frame stacks.
  else return -1;
}

// --- Output:
console.log(isPalindrome("WOW"));

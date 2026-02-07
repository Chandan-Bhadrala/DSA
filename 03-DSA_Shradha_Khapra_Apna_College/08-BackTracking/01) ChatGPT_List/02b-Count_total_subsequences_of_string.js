/**
# Count total subsequences of a string

## Question:
## Solution:
*/
// -----------------------------

/**
Error: In Approach.
1. I never accumulated the return values.
*/

function countSubsequences(str, i = 0, count = 0, ans = "") {
  if (i == str.length) {
    return count;
  }

  count = countSubsequences(str, i + 1, count, ans + str[i]); // Reached the leave of the recursion tree.
  // So, count++.
  count++;

  count = countSubsequences(str, i + 1, count, ans); // Starting to branch out.
  count++;

  // Returning the last count value.
  return count;

  // Can I make this code work.
  // I'm updating the count value every time a recursive call gets terminated at the leaf node/base case.
  // So, I'm updating the count value at the right instance of time (at the end of recursive call upon hitting the base case.)
}

// --- Output:
console.log(countSubsequences("abc")); // 8

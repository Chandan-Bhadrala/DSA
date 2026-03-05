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

 countSubsequences(str, i + 1, count, ans + str[i]); // Reached the leave of the recursion tree.
  // So, count++.
  count++;

  countSubsequences(str, i + 1, count, ans); // Starting to branch out.

  // Returning the last count value.
  return count;
}

// --- Output:
console.log(countSubsequences("abc")); // 8

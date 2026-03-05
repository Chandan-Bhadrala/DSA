/**
# Count total subsequences of a string

## Question:
## Solution:
*/
// -----------------------------

/**
Improvement: In Approach.
1. Line 284 of the correponding Q&A MD file explains a lot.
2. May read the Q&A discussion in the corresponding MD file.
*/

function countSubsequences(str, i = 0, ans = "") {
  if (i == str.length) {
    // Base case only gets hit once the leaf node is reached.
    return 1;
  }

  let take = countSubsequences(str, i + 1, ans + str[i]);

  let notTake = countSubsequences(str, i + 1, ans);

  return take + notTake;
}

// --- Output:
console.log(countSubsequences("abc")); // 8

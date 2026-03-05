/**
# Remove empty subsequence from count.

## Question:
## Solution:
*/
// -----------------------------

function countDistinctSubsequences(str) {
  let n = str.length;
  let dp = new Array(n + 1).fill(0);
  let lastIndex = new Map();

  dp[0] = 1; // empty subsequence

  for (let i = 1; i <= n; i++) {
    let ch = str[i - 1];

    dp[i] = 2 * dp[i - 1];

    if (lastIndex.has(ch)) {
      let prev = lastIndex.get(ch);
      dp[i] -= dp[prev - 1];
    }

    lastIndex.set(ch, i);
  }

  return dp[n] - 1; // remove empty subsequence
}

// --- Output:
console.log(countDistinctSubsequences("abc")); // 7
console.log(countDistinctSubsequences("aaa")); // 3
console.log(countDistinctSubsequences("abab")); // 10

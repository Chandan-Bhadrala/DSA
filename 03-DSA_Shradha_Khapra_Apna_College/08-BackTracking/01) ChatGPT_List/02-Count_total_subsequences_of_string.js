/**
# Count total subsequences of a string

## Question:
## Solution:
*/
// -----------------------------

function countSubsequences(str, index = 0) {
  // Base case: one subsequence formed
  if (index === str.length) return 1;

  // include + exclude
  let include = countSubsequences(str, index + 1);
  let exclude = countSubsequences(str, index + 1);

  return include + exclude;
}

// --- Output:
console.log(countSubsequences("abc")); // 8

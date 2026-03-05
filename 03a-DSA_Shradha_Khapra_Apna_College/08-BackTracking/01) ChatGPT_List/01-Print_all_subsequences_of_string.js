/**
# Print all subsequences of a string.

## Question:
## Solution:
*/
// -----------------------------

function printSubsequences(str, index = 0, current = "") {
  // Base case
  if (index === str.length) {
    console.log(current);
    return;
  }

  // Choice 1: include current character
  printSubsequences(str, index + 1, current + str[index]);

  // Choice 2: exclude current character
  printSubsequences(str, index + 1, current);
}

// --- Output:
printSubsequences("abc");

/**
# Print all subsequences of a string.

## Question:
## Solution:
*/
// -----------------------------

/**
## Improvement: In Approach.
1. Now, I'll **not** modify the 'ans' permanently for the current call stack.
2. Rather I'll modify the 'ans' value only in the function parameter of the 1st recursive call to maintain the current 'ans' value for the 2nd recursive call.
  2.1. So, that my code can branch into the recursion tree smoothly.
*/

function printSubsequences(str, ans = "", i = 0) {
  // Need not to return clg all the way down in the recursion calls.
  // if (i == str.length) return console.log(ans);

  // Simply return nothing.
  if (i == str.length) {
    console.log(ans);
    return;
  }

  printSubsequences(str, ans + str[i], i + 1); // made the string ready to print.

  // Now, I've to try different combinations. For that I've to remove the last added letter.
  // How to remove the last letter from the string.
  // Shall I use split.

  // Now, I need not to remove the last inserted letter manually.
  // As doing so would've been possible using ans.slice(0,-1).
  // But mutating immutable variables like the strings is not an appropriate way.
  // When you've a clean way around of not modifying the string for the current call stack.
  // Thus, only modify the current string within the 1st recursive function call parameter itself.

  printSubsequences(str, ans, i + 1);
}

// --- Output:
printSubsequences("abc");

/**
# Print all subsequences of a string.

## Question:
## Solution:
*/
// -----------------------------

/**
## Error: In Approach.
1. All I could've done is to keep the current value of the ans maintained in the current call-stack for the second recursive call.
2. However, I've changed the ans permanently for the current call stack.
  2.1. By changing ans value exclusively.
3. To maintain the current value of the ans as it is in the current call stack.
  3.1. I shall modify the ans value within the first recursive call function parameter.
  3.2. So, that the 2nd recursive call gets the chance to explore the recursion tree with older string value.
4. If I'd a clean way to remove the last letter from the string, before passing the 'ans' to the second recursive call.
  4.1. Then my this code would've worked cleanly.
*/

function printSubsequences(str, ans = "", i = 0) {
  if (i == str.length) return console.log(ans);

  ans+=str[i];
  printSubsequences(str, ans, i + 1); // made the string ready to print.

  // Now, I've to try different combinations. For that I've to remove the last added letter.
  // How to remove the last letter from the string.
  // Shall I use split.

  printSubsequences(str, ans, i + 1);
}

// --- Output:
printSubsequences("abc");

/**
# Generate all binary strings of length `n`.

## Question:
## Solution:
*/
// -----------------------------

function generateParentheses(n, open = 0, close = 0, current = "") {
  // Base case
  if (current.length === 2 * n) {
    console.log(current);
    return;
  }

  // Add opening bracket
  if (open < n) {
    generateParentheses(n, open + 1, close, current + "(");
  }

  // Add closing bracket
  if (close < open) {
    generateParentheses(n, open, close + 1, current + ")");
  }
}

// --- Output:
generateParentheses(3);

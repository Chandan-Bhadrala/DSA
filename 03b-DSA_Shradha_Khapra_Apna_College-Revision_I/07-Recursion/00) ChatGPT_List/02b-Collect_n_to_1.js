/**
# Collect n to 1.

## Question:
## Solution Approach:
*/
// -----------------------------

function collect_n(n, arr = []) {
  // Base case to terminate the recursive-loop.
  if (n == 0) {
    return arr; // Returns the resultant arr to the waiting recursive calls.
  }

  arr.push(n);

  // First pass arguments to the next recursion calls.
  // And at the time of the unwinding return the built up arr at the time of the base-case to the next waiting recursive calls.
  return collect_n(n - 1, arr);
}

// --- Output:
console.log(collect_n(9));

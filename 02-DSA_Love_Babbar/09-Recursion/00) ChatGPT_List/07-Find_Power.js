/**
# Find power (a^b) using recursion

## Question:
## Solution Approach:
*/
// -----------------------------

function exp_power(n, exp) {
  // Base case to seed a value and to terminate the recursion call stack loop.
  if (exp <= 0) {
    return 1;
  }

  // Base case will return 1 and waiting recursive calls will multiply their value of n's with base-case provided seed value.
  return exp_power(n, exp - 1) * n;
}

// --- Output:
console.log(exp_power(10, 4));

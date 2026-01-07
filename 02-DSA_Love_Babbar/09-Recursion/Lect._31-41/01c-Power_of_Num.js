/**
# Power of Num.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
Improvement in code.
1. Proper code will be to seed return value of 1 for exp == 0. 
2. And there is no base case for the exp == 1.
*/

function powerN(n, exp) {
  // Base Case: exp reduced to 0.
  if (exp == 0) return 1;

  // Till now, we have only accumulated frame stack as many as count of exp.

  // Calling the recursive function as many as exp times.
  // In the return phase multiplying the n with the return value to compute the desired answer.
  return n * powerN(n, exp - 1);
}

// --- Output:
let n = 4;
let exp = 4;

console.log(powerN(n, exp));

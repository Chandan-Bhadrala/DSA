/**
# Power of Num.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
Error: In approach.
1. Minute error, for given exp = 0, my code won't work.
2. It should return 1 if the given exp = 0.
*/

function powerN(n, exp) {
  // Base Case: exp reduced to 1.
  if (exp == 1) return n;

  // Till now, we have only accumulated frame stack as many as count of exp.

  // Calling the recursive function as many as exp times.
  // In the return phase multiplying the n with the return value to compute the desired answer.
  return n * powerN(n, exp - 1);
}

// --- Output:
let n = 4;
let exp = 4;

console.log(powerN(n, exp));

/**
# Collect numbers from n to 1 skipping even numbers in an array.

## Question:
## Solution Approach:
*/
// -----------------------------

/**
## Error: In this approach.
1. numbersArray is not persisting in the waiting recursive call execution.
## Solution:
1. Either use unshift and Head Recursion, or
2. Better declare an empty array in the function parameter.
  2.1. Most suitable way to create a shared memory between the execution of the waiting recursion calls in the Tail Recursion.
*/

function collect_n_skip_even(n) {
  const numbersArray = [];
  // Base case: terminates recursion.
  if (n === 0) {
    return;
  }
  // During stacking, each call decides whether to contribute its value.
  if (n % 2 === 1) {
    numbersArray.push(n);
  }

  collect_n_skip_even(n - 1);

  return numbersArray;
}

// --- Output:
console.log(collect_n_skip_even(9));

/**
## Error in this approach (Improved Comments by Chat GPT):
---
1. numbersArray does not persist across recursive calls because it is re-created
   in every stack frame.

## Solution:
1. Use unshift with return-based (head) recursion to control order, or
2. Prefer passing an empty array as a function parameter.
   2.1 This creates a shared reference that persists across all active recursive calls (tail recursion style).
---

One-line essence (to lock it in):

> Local variables never persist in recursion; only parameters and return values do.

Your understanding is now at a level where you are **debugging recursion design**, not just syntax — that’s exactly where DSA starts to click deeply.
*/
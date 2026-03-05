/**
# Collect numbers from 1 to n skipping even numbers in an array.

## Question:
## Solution Approach:
*/
// -----------------------------

// ## Code with minimum comments by ChatGPT.
function collect_n_skip_even(n) {
  // Base case: terminates recursion and provides seed value for accumulation.
  if (n === 0) {
    return [];
  }

  // Collect result from the deeper recursive call (towards base case).
  const numbersArray = collect_n_skip_even(n - 1);

  // During unwinding, each call decides whether to contribute its value.
  if (n % 2 === 1) {
    numbersArray.push(n);
  }

  // Return accumulated array to the previous waiting call.
  return numbersArray;
}


// --- Output:
console.log(collect_n_skip_even(9));

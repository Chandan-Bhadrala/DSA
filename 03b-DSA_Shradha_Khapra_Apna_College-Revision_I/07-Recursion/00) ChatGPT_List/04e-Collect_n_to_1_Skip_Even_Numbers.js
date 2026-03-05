/**
# Collect numbers from n to 1 skipping even numbers in an array.

## Question:
## Solution Approach:
*/
// -----------------------------
/**
 Improvement: Rather create a **shared reference** in the function parameter.
1. As Local variable never persist in recursion.
 1.1. As local variables are recreated for every recursive call.
2. Only Function **Parameters** and **return values** persist in the recursion.
  2.2. Only function parameters (shared references) and return values can **carry data** across recursive calls.
*/
function collect_n_skip_even(n, numbersArray = []) {
  // Base case: terminates recursion and return the finally built up numbersArray from the all stacking recursion calls.
  if (n === 0) {
    return numbersArray;
  }

  // During stacking, each call decides whether to contribute its value.
  if (n % 2 === 1) {
    numbersArray.push(n);
  }

  // Passing the decremented argument and the numbersArray to the next recursion call.
  // Building the numbersArray in the above code.
  return collect_n_skip_even(n - 1, numbersArray);
}

// --- Output:
console.log(collect_n_skip_even(9));

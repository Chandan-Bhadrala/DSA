/**
# Collect numbers from n to 1 skipping even numbers in an array.

## Question:
## Solution Approach:
*/
// -----------------------------

function collect_n_skip_even(n) {
  // Base case, only to terminate the recursive-loop.
  if (n == 0) {
    return [];
  }

  // This code line will collect the result from the last (ultimate/deepest) executed recursive call.
  // Which is base case in our case and base is returning an empty array as a seed value.
  // So, we will collect an empty array from the base-case.
  // And call the next recursive call with decremented n.
  const numbersArray = collect_n_skip_even(n - 1);

  // Only upon unwinding we would've collected the seed value from the base case.
  // And now we are pushing the values from each recursive call upon checking their n value.
  // We are performing actionable code in last only after the base case has been triggered.
  // Now every recursive case is executing below code line.
  // And we are entering the if block depending upon the argument n of the recursive function call.

  if (n % 2 == 1) {
    // Returning updated array to next recursive function call which is about to be unwound.
    return numbersArray.push(n);
  }

  // Returning untouched value (an array) from the previous recursive call.
  // This return statement is for the recursive cases which couldn't returned anything from the if block.
  return numbersArray;
}

// --- Output:
console.log(collect_n_skip_even(9));

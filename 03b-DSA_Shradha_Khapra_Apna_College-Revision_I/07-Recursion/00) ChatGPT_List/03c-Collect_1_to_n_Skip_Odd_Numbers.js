/**
# Collect numbers from 1 to n skipping odd numbers.

## Question:
## Solution Approach:
*/
// -----------------------------

function collect_n_skip_odd(n) {
  // Base case to terminate the recursive-loop.
  if (n == 0) {
    return []; // Return an empty array to act as a seed value for the waiting recursive calls in the stack.
  }

  // Hold the return value sent/returned by the previously executed recursive calls.
  // The first value stored in the numbersArray will be of the recursive call which will be executed first.
  // In our case it'll be a base-case.
  // And it's returning an empty array.

  // Improve comment by the ChatGPT.
  // Hold the return value from the deeper recursive call (towards the base case).
  // The deepest call (base case) executes first and returns an empty array.
  // That same array reference is then passed upward and populated during unwinding.
  const numbersArray = collect_n_skip_odd(n - 1);

  // Let's use received empty array from the final execution of the base case.
  if (n % 2 == 0) {
    numbersArray.push(n);
    return numbersArray;
  }

  // Return array for the recursive calls which have odd n as an argument.
  return numbersArray;
}

// --- Output:
console.log(collect_n_skip_odd(9));

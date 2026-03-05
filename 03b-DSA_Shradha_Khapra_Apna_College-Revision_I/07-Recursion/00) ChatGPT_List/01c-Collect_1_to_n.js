/**
# Collect 1 to n.

## Question:
## Solution Approach:
*/
// -----------------------------

function collect_n(n) {
  // 01. Base Case: Recursive-loop termination condition.
  if (n == 0) {
    return [];
  }

  // Collected an empty array at the time of unwind from the base-case.
  const numbersArray = collect_n(n - 1);

  // Start pushing n into the received empty array from the base-case.
  numbersArray.push(n);

  return numbersArray; // return modified numbersArray to the waiting recursion calls.
}

// --- Output:
console.log(collect_n(9));

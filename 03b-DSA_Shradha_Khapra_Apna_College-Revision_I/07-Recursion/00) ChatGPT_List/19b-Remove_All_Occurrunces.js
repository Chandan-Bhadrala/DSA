/**
# Remove all occurrences of a character from a string.

## Question:
## Solution Approach:
*/
// -----------------------------

// Minor Improvement: Using Head recursion to avoid using newString variable and let the base case return a seed value to help build or append the eligible characters to the empty string provided by the base case.
// And will finally return that built up string to the caller function.
function removeOccurrences(str, target, i = 0) {
  // Base case for terminating the recursive loop as well for seeding an empty string for building up the answer while unwinding phase of the recursion.
  if (i == str.length) return "";

  // Head recursion

  // String received from the deeper recursive calls for further modifications.
  let stringReceivedFromDeeperRecursionCalls = removeOccurrences(
    str,
    target,
    i + 1
  );

  // Prepending eligible characters to received string from the deeper recursive calls.
  return str[i] != target
    ? str[i] + stringReceivedFromDeeperRecursionCalls
    : stringReceivedFromDeeperRecursionCalls;
}

// --- Output:
console.log(removeOccurrences("aabbddcdeffxxfzzzzgdfldf", "x"));

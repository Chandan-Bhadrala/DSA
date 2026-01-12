/**
# Bubble Sort: Pushes the largest element to the last.

## Question:
## Solution Approach:
1. Will create a copy of a string in reverse and will return back its comparison result.
*/
// -----------------------------

function bubbleSort(arr) {
  // Base Case: Terminate recursion and to seed a base value.
  if (i == str.length) return "";

  // Build frame stack with the memory of iterator i and str.
  // In unwinding phase modify and return the build up string, considering seed string returned from the base case.
  let prev = isPalindrome(str, i + 1);

  // Now, in unwinding phase we have memory of the last character first add it to the base string returned from the base case and return it further to the following unwinding recursive stacks.
  return prev + str[i];
}

// --- Output:
console.log(selectionSort([5, 3, 1, 5, 2, 0]));

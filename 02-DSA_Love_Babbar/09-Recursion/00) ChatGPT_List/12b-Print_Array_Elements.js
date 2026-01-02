/**
# Print all elements of an array

## Question:
## Solution Approach:
1. Pop an element and return that element.
*/
// -----------------------------

/**
1. New Approach with a mindset that array reference is being shared in the recursive calls.
  1.1. Not a copy of the array.
 */

function printArrayElements(n) {
  // Base Case:
  if (n.length == 0) {
    return;
  }

  // Grab the last popped element.
  let lastElement = n.pop();

  // Call recursive function, with reduced array.
  printArrayElements(n);

  // Upon unwinding print the array elements.
  console.log(lastElement);
  return;
}

// --- Output:
printArrayElements([1, 2, 3]);

/**
## Stacking recursive functions
f([1, 2, 3])
f([1, 2])
f([1])
f([])

## Unwinding recursive functions
f([]) return -> nothing from the base case. Just terminate the loop.
f([])
f([]) and so on.

Imp. Note: Array had been emptied while stacking recursive calls.
So, in the unwind phase, we will have nothing but an simple empty array.
*/

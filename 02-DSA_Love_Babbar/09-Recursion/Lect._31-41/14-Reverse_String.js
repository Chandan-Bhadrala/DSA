/**
# Reverse a String.

## Question:
## Solution Approach:
*/
// -----------------------------

function reverseString(str, i = 0) {
  // Base Case: Terminate recursion and seed a value to build up answer upon.
  if (i == str.length) return "";

  // Make recursive function calls with the arguments which are tending towards the base case condition in the frame stacking phase.
  // While unwinding phase carry on the received return value to build the answer further.
  let prev = reverseString(str, i + 1);

  // Now, we have built up the frame stacks with memory of the iterator i w.r.t. each recursive function call.
  // Use the recursive call arguments memory to build the answer.

  return (prev += str[i]);
}

// --- Output:
console.log(reverseString("abc"));

/**
# Print all elements of an array

## Question:
## Solution Approach:
1. Pop an element and return that element.
*/
// -----------------------------


/**
Error: In approach.
1. I was thinking that array copy is being shared in every recursive call.
  1.1. Well that is completely wrong thinking.
2. In actual as usual an array was being passed.
3. So, the moment the recursive call stack started to unwind.
  3.1. The array was already dried up due to the continuous pop method calls during the recursive call stack build up.
4. So, there was nothing to pop anymore, the moment the array was unwinding.
  4.1. So, I had to grab the popped value in the very first moment as there was nothing left in the array while recursive call stacks were unwinding.
Note:
1. Array is not a shared copy.
2. Array is a shared reference to an array stored in a heap.

Read the error re-explained by the ChatGPT in the following Md file.
*/

function printArrayElements(n) {
  // Base Case:
  if (n.length == 0) {
    return;
  }

  // Call recursive function, with reduced array.
  n.pop();
  printArrayElements(n);

  // Upon unwinding print the array elements.
  console.log(n.pop());
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
f([1]) -> returns -> 1 upon pop execution on the given array.
f([1, 2]) -> returns -> 2 upon the pop and so on.
*/

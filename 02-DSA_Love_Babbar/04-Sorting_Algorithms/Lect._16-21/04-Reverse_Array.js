/**
# Reverse an Array.
## Question:
  1. We will be given an array and we have to reverse all of its elements.
## Solution Approach:
  1. Take two pointers:
    1.1. i -> starts from the start-index of the array.
    1.2. j -> starts from the end-index of the array.
  2. Keep swapping the elements of the both indices and keep pushing both the pointers towards each other.
*/

function reverseArray(arr) {
  // Preserve original array.
  let reverseArr = [...arr];

  // Declaring and initializing two pointers.
  let i = 0;
  let j = reverseArr.length - 1;

  while (i <= j) {

    // Below code seems like values are being interchanged rather than indices, actually:
    // RHS: -> value.
    // LHS: -> indices where these values need to be placed.

    // This is -> JS array destructure syntax.
    [reverseArr[i], reverseArr[j]] = [reverseArr[j], reverseArr[i]];
    i++;
    j--;
  }

  return reverseArr;
}

/**
## Explanation by ChatGPT.
Here is a clean and correct explanation of your comment — short, clear, accurate:

1. In the RHS, we are **reading values** from the array.
2. In the LHS, we are **writing those values** back into the array positions.

// Even though reverseArr[i] and reverseArr[j] look like values,
// on the LEFT SIDE they act as **targets (memory locations)**.
//
// So the RHS provides:   [ value_at_j , value_at_i ]
// And the LHS assigns:   write value_at_j -> index i
//                        write value_at_i -> index j
//
// This is JavaScript’s destructuring syntax for swapping array elements.

[reverseArr[i], reverseArr[j]] = [reverseArr[j], reverseArr[i]];


Let me know if you want an even more visual explanation (like memory-box diagrams).
*/
/**
# Selection Sort Implementation.

## Question:
## Solution Approach:
1. Bring the smallest element in the front.
*/

// -----------------------------

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimumElementIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minimumElementIndex]) {
        // Update the minimum element value index
        minimumElementIndex = j;
      }
    }

    // Swap
    [arr[i], arr[minimumElementIndex]] = [arr[minimumElementIndex], arr[i]];
  }

  return arr;
}

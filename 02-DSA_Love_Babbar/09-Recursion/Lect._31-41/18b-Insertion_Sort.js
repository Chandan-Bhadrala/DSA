/**
# Insertion Sort.

## Question:
## Solution Approach:
1. Outer loop controlled by recursion to recurse till n times (array length times).
2. Inner loop to do the real work of shifting the elements to bring forth the smaller elements.
  2.1. It was also the inner loop in the selection and bubble sort too which was doing the real work.
3. So, here too inner loop controlled by the for-loop will do the work of shifting to bring forth the smaller array elements.

1. Insertion sort uses two pointers:
  1.1. i -> to save the target value.
  1.2. j -> to traverse starting from the immediate left of the i till 0th index to find the suitable spot for the target value selected by the i pointer.
2. Insertion sort starts to create a left sorted sub-array from the very beginning of the code/algorithm execution.
*/
// -----------------------------

// ## Purely Recursion Based.
function InsertionSort(arr, i = 1) {
  // Base Case: Terminate recursion and to return back fully sorted array (arr).
  if (i == arr.length) return arr;

  // Hold the current target value in a temp variable to place it rightly/correctly later.
  let targetValue = arr[i];

  arr = shiftElements(arr, i, targetValue);

  arr = InsertionSort(arr, i + 1);
  return arr;
}

// Helper function: Inner recursive code.

function shiftElements(arr, i, targetValue, j = i - 1) {
  // Base Case:
  if (j == -1) return arr;

  if (arr[j] > targetValue) {
    arr[j + 1] = arr[j];
  } else if (arr[j] <= targetValue) {
    arr[j + 1] = targetValue;

    return arr;
  }

  // Handling the edge case:
  if (j == 0) {
    arr[j] = targetValue;
  }

  arr = shiftElements(arr, i, targetValue, j - 1);
  return arr;
}

// --- Output:
console.log(InsertionSort([5, 3, 1, 5, 2, 0]));

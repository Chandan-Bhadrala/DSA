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

function InsertionSort(arr, i = 1) {
  // Base Case: Terminate recursion and to return back fully sorted array (arr).
  if (i == arr.length) return arr;

  // Hold the current target value in a temp variable to place it rightly/correctly later.
  let targetValue = arr[i];

  for (let j = i - 1; j >= 0; j--) {
    // Note: Close the loop code upon hitting the success case to avoid further mutation in the array via. this loop running.

    if (arr[j] > targetValue) {
      // Shift the neighbor to the right.
      // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // This code line is correct but Insertion sort is based on shifting and not on swapping as swapping is costlier than shifting in CPU cycle terms. As CPU has to do 3 assignments for the swapping and 1 assignment for the shifting.

      // So, shifting neighbor to the right via. Shifting and not via. swapping.
      arr[j + 1] = arr[j];
    } else if (arr[j] <= targetValue) {
      // This is the only other pending case than the primary if-case.
      // Place the target value to the right of the found smaller value.
      arr[j + 1] = targetValue;

      // Stopping the loop execution upon hitting the success case to avoid further mutation of the array by letting the loop run.
      break;
    }

    // Handling the edge case:
    if (j == 0) {
      // It means the target value is the smallest number and no rightful comparison were found via. the upper loop conditions.
      arr[j] = targetValue;
    }
  }

  arr = InsertionSort(arr, i + 1);
  return arr;
}

// --- Output:
console.log(InsertionSort([5, 3, 1, 5, 2, 0]));

/**
# Selection Sort: Bring forth the smallest elements.

## Question:
## Solution Approach:
1. Bring the smallest array elements to the front one by one.
2. Use Recursion to loop through the array and the inner for-loop to compare, select and finalize the smallest array element.
3. Selection Sort creates left sorted sub-section of the array and right sub-section is an unsorted array.
4. The sorting will be happening in-place within the original given array.
*/
// -----------------------------

function selectionSort(arr, i = 0) {
  // Base Case: Terminate recursion and to return back the final arr value.
  if (i == arr.length) return arr;

  // Right now I've access to the i = 0 in the recursive call stack building phase.
  // Let's use it.
  let minimumElementIndex = i;

  let j = i + 1;
  for (j; j < arr.length; j++) {
    // Scan the whole array to bring forth the smallest element to the 0th index.

    // Take the help of the j to find the minimum array element and store its index in the minimumElementIndex.
    if (arr[j] < arr[minimumElementIndex]) {
      minimumElementIndex = j;
    }
  }

  // Perform a single swap.
  [arr[i], arr[minimumElementIndex]] = [arr[minimumElementIndex], arr[i]];

  arr = selectionSort(arr, i + 1);

  return arr;
}

// --- Output:
console.log(selectionSort([5, 3, 1, 5, 2, 0]));

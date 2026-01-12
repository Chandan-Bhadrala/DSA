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

/**
## Improvement: In approach.
1. Now, I'm simply passing all the values forward to the recursive calls in the helper recursive function.
*/

// ### Replaces the inner loop with the recursion.
function selectionSort(arr, i = 0) {
  // Base Case: Terminate recursion and to return back the final arr value.
  if (i == arr.length) return arr;

  // Right now I've access to the i = 0 in the recursive call stack building phase.
  // Let's use it.
  let minimumElementIndex = i;

  // Calling helper inner recursion function with incremented value of the i to find the minimum value index.
  minimumElementIndex = findMinimumIndex(arr, i);

  // Perform a single swap.
  [arr[i], arr[minimumElementIndex]] = [arr[minimumElementIndex], arr[i]];

  arr = selectionSort(arr, i + 1);

  return arr;
}

// Inner recursive function.
function findMinimumIndex(arr, i, j = i + 1, minimumElementIndex = i) {
  // Base Case
  if (j == arr.length) return minimumElementIndex;

  if (arr[j] < arr[minimumElementIndex]) {
    minimumElementIndex = j;
  }

  minimumElementIndex = findMinimumIndex(arr, i, j + 1, minimumElementIndex);
  return minimumElementIndex;
}

// --- Output:
console.log(selectionSort([5, 3, 1, 5, 2, 0]));

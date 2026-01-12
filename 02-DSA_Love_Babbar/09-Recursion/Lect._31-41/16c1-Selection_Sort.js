/**
# Selection Sort.

## Question:
## Solution Approach:
1. Bring the smallest array elements to the front one by one.
2. Use Recursion to loop through the array and the inner for-loop to compare, select and finalize the smallest array element.
3. Selection Sort creates left sorted sub-section of the array and right sub-section is an unsorted array.
4. The sorting will be happening in-place within the original given array.
*/
// -----------------------------

/**
## Error: In approach.
1. It was small but had a considerable amount of impact.
2. I am breaking the function contract in the inner helper recursive function.
  2.1. I'm not passing all the states as it was required by the recursive function.
  2.2. I'm below passing forward only the partial parameters to the recursive call.
  2.3. That's why the code break.
3. In recursion, I must pass all the values in the function parameters that are needed in the next recursive call.
  3.1. No implicit passing happens in the recursion.
  3.2. Every function parameter that needs in the consecutive recursion calls must be passed exclusively.
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
function findMinimumIndex({ arr, i, j = i + 1, minimumElementIndex = i }) {
  // Base Case
  if (j == arr.length) return minimumElementIndex;

  if (arr[j] < arr[minimumElementIndex]) {
    minimumElementIndex = j;
  }

  minimumElementIndex = findMinimumIndex(arr, j + 1);
  return minimumElementIndex;

  // A one mistake I can easily spot, in every recursion call minimumElementIndex value is being re-assigned as i.
  // So, updating it inside the recursion is not letting this value propagate.
  // Next, I can't understand the reason for call stack max value reached for this function. It should reach its EOL at the base case.
}

// --- Output:
console.log(selectionSort([5, 3, 1, 5, 2, 0]));

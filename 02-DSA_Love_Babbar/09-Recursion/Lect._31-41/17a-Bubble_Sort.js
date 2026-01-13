/**
# Bubble Sort: Pushes the largest element to the last.

## Question:
## Solution Approach:
1. It'll be doing continuous swap and pushing the larger number to the last.
2. In every whole pass of the array, one large element would have been pushed correctly to its position in the last.
3. In bubble sort, we get right-sorted sub-array sub-section from the very beginning similar to the selection sort where we get sorted left sub-section of the array from the very start.

1. Main outer recursive function will loop through the array elements one by one.
2. Meanwhile inner for-loop will scan the whole array at once to place the bigger number correctly in the last position of the array.
*/
// -----------------------------

function bubbleSort(arr, i = 0) {
  // Base Case: Terminate recursion and to return back fully sorted array (arr).
  if (i == arr.length) return arr;


  // -1 added to avoid boundary crossing by arr[j + 1] comparisons.
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swap
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  arr = bubbleSort(arr, i + 1);

  return arr;
}

// --- Output:
console.log(bubbleSort([5, 3, 1, 5, 2, 0]));

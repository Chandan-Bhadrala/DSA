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

/**
Improvement: Last Code is good enough and correct. However, that code can be optimized.
1. As we know the right side of the array starts to get sorted in every single pass. So, we need not to go till the end of the array in the inner loop.
2. Outer loop controlled by the recursion also need not to go till the last array element. ❌ This is wrong though and its reasoning is discussed in detail in the corresponding MD file.
3. If no swap happened in the inner loop, then we can preemptively close our code, considering that array is already sorted.
*/
function bubbleSort(arr, i = 0, pass = 0) {
  // Base Case: Terminate recursion and to return back fully sorted array (arr).
  //02. 2nd Improvement. ❌
  // if (i == arr.length - pass) return arr;
  if (i == arr.length) return arr;

  // 03. 3rd Improvement (To make an early return if no swap happened in the array in the inner loop).
  let isSwapped = false;

  // 01. 1st Improvement (Pass is introduced to stop iterating into the sorted RHS of the array).
  for (let j = 0; j < arr.length - 1 - pass; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swap
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

      isSwapped = true;
    }
  }

  if (isSwapped == false) {
    return arr;
  }

  arr = bubbleSort(arr, i + 1, pass + 1);

  return arr;
}

// --- Output:
console.log(bubbleSort([5, 3, 1, 5, 2, 0]));

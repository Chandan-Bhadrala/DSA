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
Error: In Approach.
1. I used iterator "i" of the recursive call stack in the for-loop.
  1.1. To begin scanning from the i + 1, every time new recursive call stack is formed.
2. However, the moment for-loop incremented the value of the iterator i, the original value of i, on which the recursion depends also gets modified.
  2.1. So, recursion call stacks are now corrupted as the i on which recursion depends has been changed/modified by the inner function (for-loop).
  2.2. So, use different iterator for the for-loop and different one for the recursion.
3. And answer to the question. No, while unwinding no code above the recursive call will run.
  3.1. Recursive call stack unwinding will only return the arr value.
  3.2. Only the code written **below** the **recursive call** gets executed in the unwinding phase.
*/

function selectionSort(arr, i = 0) {
  // Base Case: Terminate recursion and to return back the final arr value.
  if (i == arr.length) return arr;

  // Right now I've access to the i = 0 in the recursive call stack building phase.
  // Let's use it.
  let minimumElementIndex = i;

  for (i; i < arr.length; i++) {
    // Scan the whole array to bring forth the smallest element to the 0th index.
    if (arr[i] < arr[minimumElementIndex]) {
      minimumElementIndex = i;
    }
  }

  // Perform a single swap.
  [arr[i], arr[minimumElementIndex]] = [arr[minimumElementIndex], arr[i]];

  // Call the above function again with the next value of the i.
  // Now, the question arises will the above code will run again while the unwinding phase of the recursion or it'll simply return the arr?
  arr = selectionSort(arr, i + 1);

  return arr;
}

// --- Output:
console.log(selectionSort([5, 3, 1, 5, 2, 0]));

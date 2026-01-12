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

function selectionSort(arr, i = 0) {
  // Base Case: Terminate recursion and to seed a base value.
  if (i == arr.length) return arr;

  arr = selectionSort(arr, i + 1);


  
  return arr;
}

// --- Output:
console.log(selectionSort([5, 3, 1, 5, 2, 0]));

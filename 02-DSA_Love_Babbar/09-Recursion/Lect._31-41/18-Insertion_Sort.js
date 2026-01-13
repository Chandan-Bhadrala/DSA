/**
# Insertion Sort.

## Question:
## Solution Approach:
1. Will create a copy of a string in reverse and will return back its comparison result.
*/
// -----------------------------

function InsertionSort(arr, i = 0) {
  // Base Case: Terminate recursion and to return back fully sorted array (arr).
  if (i == arr.length) return arr;


  
  arr = InsertionSort(arr, i + 1);
  return arr;
}

// --- Output:
console.log(InsertionSort([5, 3, 1, 5, 2, 0]));

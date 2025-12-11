/**
# Selection Sort Implementation.
1. Selection sort takes an unsorted array and break that into two sections:
  1.1. One Section of sorted sub-array and other section of the unsorted sub-array.
2. Selection Sort takes one smallest element from the unsorted sub-array and stores the element correctly into the sorted sub-array.
3. Selection Sort, keep repeating step 2 until all elements from an unsorted sub-array is shifted towards the sorted sub-array.
*/
// -----------------------------

// 01. A function implementation of the Selection Sort.
// 1. Selection Sort, swaps array elements only once.
function selectionSort(arr) {
  let sortArr = [...arr];

  // Take first element of the array and then compare it with other array elements of the array using inner-loop.
  // If any other array element of the inner-loop found bigger than the array element selected by the outer-loop then, save its index and swap those elements **ONLY ONCE** at the end of the inner-loop only, to save CPU cycles on swapping.
  for (let i = 0; i < sortArr.length; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (sortArr[minimumIndex] > sortArr[j]) {
        // Way to swap array elements in JS.
        minimumIndex = j;
      }
    }
    // Swap Once.
    // Swap the found minimum index with the help of the inner-loop, with the outer-loop index value.
    [sortArr[i], sortArr[minimumIndex]] = [sortArr[minimumIndex], sortArr[i]];
  }

  return sortArr;
}

/**
## ChatGPT reply with the refined comments.
// 01. A function implementation of the Selection Sort.
1. Selection Sort divides the array into two parts:
  - a sorted sub-array (on the left)
  - an unsorted sub-array (on the right)
2. In each iteration, it finds the smallest element in the unsorted section 
   and moves it to the end of the sorted section.
3. Only one swap occurs per iteration to place the minimum element in the correct position.
4. This reduces unnecessary swapping and saves CPU cycles.
//-----------------

function selectionSort(arr) {
  let sortArr = [...arr];

  // Take the first element and compare it with all elements to its right.
  // If a smaller element is found, store its index.
  // After finishing the inner loop, swap only once to save CPU cycles.
  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (sortArr[j] < sortArr[minimumIndex]) {
        minimumIndex = j;
      }
    }

    // Swap only once after scanning the unsorted part.
    [sortArr[i], sortArr[minimumIndex]] = [sortArr[minimumIndex], sortArr[i]];
  }

  return sortArr;
}

 */

/** 
// ## Issue in this Approach:
// 01. A function implementation of the Selection Sort.
// 1. This approach swaps the element at multiple times which wastes CPU cycles.
// 1.1. Original Selection Sort, swaps elements only once and saves CPU cycles on multiple swapping.
function selectionSort(arr) {
  let sortArr = [...arr];

  // Take first element of the array and then compare it with other array elements of the array using inner-loop.
  // If any other array element of the inner-loop found bigger than the array element selected by the outer-loop then swap those elements.
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sortArr[i] > sortArr[j]) {
        // Way to swap array elements in JS.
        [sortArr[i], sortArr[j]] = [sortArr[j], sortArr[i]];
      }
    }
  }

  return sortArr;
}
 */

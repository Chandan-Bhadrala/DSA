/**
# Insertion Sort.
1. In this method we will again break the array into sub-array sections.
2. One sub-array section will represent the sorted sub-array elements and the other sub-array element section will represent the unsorted sub-array elements.
3. We will pick a target value and will compare and push it to the left to create a proper sorted array with array elements sorted in the ascending order. 
  3.1. We will push the array element to the left, if the target array element is smaller than the left placed array elements.
4. Insertion Sort is more efficient than the Bubble sort as bubble sort may do lesser comparisons than the **Insertion Sort**, but the bubble sort does more swapping.
  4.1. Swapping consumes more CPU cycles than the comparisons.
*/
//-----------------

// 01. A function implementation of the **Insertion Sort**.
// 1. Insertion sort swap only once similar to the selection sort to save on CPU cycles.
function insertionSort(arr) {
  let sortArr = [...arr];

  for (let i = 1; i < sortArr.length; i++) {
    let j = i;
    let minimumIndex = 0;

    while (j >= 1) {
      // If the element at left is greater than the element at right, then store the minimum value index in the minimumIndex.
      if (sortArr[j - 1] > sortArr[j]) {
        // Left-shifting the smaller values.
        minimumIndex = j;
      }
      j--;
    }

    // Swap only once the inner-loop has finalized the minimumIndexValue.
    [sortArr[i - 1], sortArr[minimumIndex]] = [
      sortArr[minimumIndex],
      sortArr[i - 1],
    ];
  }

  return sortArr;
}

/**
## ChatGPT reply with the refined comments.
# A function implementation of the **Insertion Sort**.
1. Insertion Sort splits the array into two sections: sorted (left) and unsorted (right).
2. It picks one element from the unsorted section and inserts it into the correct position inside the sorted section.
3. It does this by shifting larger elements to the right and placing the target element at the correct location.
  3.1. Instead of swapping repeatedly (like Bubble Sort), we shift elements to the right until the correct position for the key is found. This saves CPU cycles.

function insertionSort(arr) {
  let sortArr = [...arr]; // Copy so original array remains unchanged.

  // Start from index 1 because a single element at index 0 is already sorted.
  for (let i = 1; i < sortArr.length; i++) {
    let key = sortArr[i];     // The element we want to insert in the sorted portion.
    let j = i - 1;            // Pointer to scan the sorted section.

    // **Shift** elements to the right if they are larger than the key.
    while (j >= 0 && sortArr[j] > key) {
      sortArr[j + 1] = sortArr[j];
      j--;
    }

    // Insert the key at correct sorted position.
    sortArr[j + 1] = key;
  }

  return sortArr;
}

 */

/**
## Issue:
1. This approach swaps multiple times, we should swap only once like in selection sort to save on CPU cycles.
// 01. A function implementation of the **Insertion Sort**.
function insertionSort(arr) {
  let sortArr = [...arr];

  for (let i = 1; i < sortArr.length; i++) {
    let j = i;

    while (j >= 1) {
      // If the element at left is greater than the element at right, then do the swap.
      if (sortArr[j - 1] > sortArr[j]) {
        // Left-shifting the smaller values.
        [sortArr[j - 1], sortArr[j]] = [sortArr[j], sortArr[j - 1]];
      }
      j--;
    }
    // This will make sure while loop runs only for the times which doesn't loop into the sorted array section unnecessarily, saving CPU cycles.
  }

  return sortArr;
}
 */

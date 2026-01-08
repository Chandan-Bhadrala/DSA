/**
Insertion Sort Implementation.

In this sorting method, we will be using two pointers:

1. Pointer i → points to the target element.
   1.1. The target element is the value that needs to be inserted at its correct location.
   1.2. The target element is stored temporarily for safe shifting of other elements.

2. Pointer j → points to the element immediately left of the target element.
   2.1. Pointer j will traverse from (i - 1) towards index 0.
   2.2. Pointer j compares its current element with the target value.
   2.3. If pointer j finds a smaller element, we insert the target value at index (j + 1).
   2.4. If pointer j finds a bigger element, that bigger element is shifted right by 1 step.

3. This method inherently starts sorting the array from the very first scan.
   3.1. Thus, during the process:
        3.1.1. The left side forms a sorted section.
        3.1.2. The right side remains unsorted.
*/

//-----------------

// Insertion Sort implementation.
// Insertion sort performs only one final write for the target value, saving CPU cycles.
function insertionSort(arr) {
  let sortArr = [...arr]; // Preserve original array

  for (let i = 1; i < sortArr.length; i++) {
    let targetValue = sortArr[i]; // Storing target element
    let j = i - 1; // Pointer to the left of target

    // Move pointer j leftwards until a smaller element is found
    while (j >= 0) {
      // If left element is bigger, shift it to the right
      if (sortArr[j] > targetValue) {
        sortArr[j + 1] = sortArr[j];
      }
      // If left element is smaller, insert the target value at (j + 1)
      else {
        sortArr[j + 1] = targetValue;
        break;
      }
      j--;
    }

    // If j became -1, it means targetValue is the smallest so far
    // Insert at position 0 (only if not already inserted by break)
    if (j < 0) {
      sortArr[0] = targetValue;
    }
  }

  return sortArr;
}

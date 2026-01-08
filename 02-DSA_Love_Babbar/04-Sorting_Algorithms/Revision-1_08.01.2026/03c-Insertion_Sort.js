/* 
## ChatGPT Solution with comments.
# An Implementation of the **Insertion Sort**.
1. In insertion sort, we pick a target element (key) and insert it into the correct position inside the sorted left section.
2. We do not swap repeatedly. We shift bigger elements to the right to make space.
3. Shifting costs fewer CPU cycles than swapping.
**/

function insertionSort(arr) {
  let sortArr = [...arr]; // no mutation of original array

  // i = current target element
  for (let i = 1; i < sortArr.length; i++) {

    // Step 01: store target element temporarily
    let currentValue = sortArr[i];

    // j = pointer used to shift elements on the left side
    let j = i - 1;

    // Step 02: shift all bigger elements to the right
    // until we find the correct position for currentValue
    while (j >= 0 && sortArr[j] > currentValue) {
      sortArr[j + 1] = sortArr[j];   // shift right
      j--;                            // keep going left
    }

    // Step 03: insert the currentValue in its correct position
    sortArr[j + 1] = currentValue;
  }

  return sortArr;
}

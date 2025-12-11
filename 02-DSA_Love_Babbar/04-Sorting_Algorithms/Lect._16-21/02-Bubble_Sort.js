/**
# Bubble Sort.
1. In this method, we will keep comparing the adjacent elements of the array and will keep swapping the bigger element with the smaller elements to create an array of the ascending array elements.
  1.1. This will also create two sub-array, one with sorted elements at the end as we have bubbled up the bigger element at the last, with the help of continuous right-adjacent comparisons.
  1.2. And the left unsorted sub-array which yet has to bubble up the bigger elements to the right.
2. We will loop step 2 continuously, till we swap no two-elements in a loop.
  2.1. Will declare and re-initialize a boolean variable in every loop with false value.
  2.2. Will only update the boolean variable to true once there is any swap occurs in a loop.
3. If no swap occurs in a loop and we terminate a loop with the boolean variable as false, then that will indicate the array has been sorted.
*/
//-----------------

// 01. A function implementation of the **Bubble Sort**.
function bubbleSort(arr) {
  let sortArr = [...arr];
  let isUnsorted = true;
  let pass = 0;

  while (isUnsorted) {
    isUnsorted = false;

    // Subtracted pass value from the array iterations, to reduce the looping iterations of the array in every consecutive pass to reduce CPU cycle wastages.
    for (let i = 0; i < sortArr.length - 1 - pass; i++) {
      // Pushing the current selected element to the right, if it is found to be bigger than the right-adjacent element of the array.
      if (sortArr[i] > sortArr[i + 1]) {
        [sortArr[i], sortArr[i + 1]] = [sortArr[i + 1], sortArr[i]];
        isUnsorted = true;
      }
    }
    pass++;
  }

  return sortArr;
}

/**
## ChatGPT reply with the refined comments.
# A function implementation of the **Bubble Sort**.
1. Bubble Sort compares adjacent elements and pushes the larger element toward the end.
2. After every complete pass, the largest unsorted element reaches its correct position.
3. Bubble Sort keeps repeating passes until no swaps happen, meaning the array is fully sorted.

//-----------------

function bubbleSort(arr) {
  // Creating a copy of the array so the original array stays unchanged.
  let sortArr = [...arr];

  // A flag to track whether any swap happened in the current pass.
  // If no swaps occur during a full pass, the array is already sorted.
  let isUnsorted = true;

  // This variable keeps track of how many passes are completed.
  // After each pass, the last elements are already sorted, so
  // we can reduce the inner loop range to avoid unnecessary comparisons.
  let pass = 0;

  // Keep running passes until no swap happens in one complete pass.
  while (isUnsorted) {
    isUnsorted = false;

    // Loop only till the last unsorted element (reduce work every pass).
    for (let i = 0; i < sortArr.length - 1 - pass; i++) {
      // If the current element is bigger than the next element,
      // swap them to push the bigger element toward the right side.
      if (sortArr[i] > sortArr[i + 1]) {
        [sortArr[i], sortArr[i + 1]] = [sortArr[i + 1], sortArr[i]];
        isUnsorted = true; // A swap occurred → array wasn't fully sorted.
      }
    }

    // Increment pass because the last element of this pass
    // is now placed correctly at the end.
    pass++;
  }

  return sortArr;
}

 */

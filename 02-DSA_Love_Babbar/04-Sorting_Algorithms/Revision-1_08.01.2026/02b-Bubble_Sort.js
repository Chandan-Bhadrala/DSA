/**
# Bubble Sort Implementation.

## Question:
## Solution Approach:
1. In **selection sort** we were bringing smallest array elements to the front.
2. Similarly, in the **Bubble sort** we are pushing largest element to the back of the array.
  2.1. Selection sort swaps once.
  2.2. However, bubble sort swaps continuously.
    2.3. Thus, bubble sort is application is acceptable only when swapping is cheaper than checking/scanning the whole array.
3. Bubble sort simply moves a pointer and check its next adjacent element and swaps both if the current element is bigger.
  3.1. It repeatedly do till whole array is sorted.
  3.2. It creates the sub-section of the sorted array at the right and keep on taking element from the left unsorted sub-section to push it rightly to its position in the right sorted sub-section.
*/

//-----------------

/**
## Written code in bottom up approach.
1. First written the core code of swapping then for-loop wrappers to do the core action for all the array elements.
2. Then further added more and more conditions.
*/

function bubbleSort(arr) {
  // 03. Introduced pass variable to avoid pushing iterator "i" to the right sorted sub-section of the array.
  // To avoid wasting CPU cycles.
  let pass = 0;

  // 04. Introduced this variable to exit the while loop when the desired condition of the sorted array is achieved.
  let unsorted = true;

  // 03. Below for-loop would have iterated the array only once, but we need to keep on iterating till whole array is sorted.
  while (unsorted) {
    // 05. Made it false in the beginning to assume array is sorted before starting the scanning.
    unsorted = false;

    // 02. Do, the core action for every array elements.
    // 07. Introduced -1 to the condition, as in a loop we are comparing arr[i] with arr[i+1]
    for (let i = 0; i < arr.length - pass - 1; i++) {
      // 01. Swap if the current element is bigger than next neighbor element.
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        // 06. Only if the scan made any swap then only we will change the flag value.
        unsorted = true;
      }
    }
    pass++;
  }
}

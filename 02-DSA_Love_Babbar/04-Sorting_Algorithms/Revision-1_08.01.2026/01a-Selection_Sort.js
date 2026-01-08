/**
# Selection Sort Implementation.

## Question:
## Solution Approach:
1. Find smallest from the array and swap it.
2. Assume first element is the smallest, then scan the whole array for the minimum value and swap it with the first element.
  2.1. This way we will build up sorted sub-section and unsorted sub-section of the array.
  2.2. Swap only once, only upon finding the final minimum value index.
*/

// -----------------------------

/**
Error: In approach.
1. In the nested loop, I'm comparing the continuously the first element with the rest of the array elements.
  1.1. Whereas, next array element could be smaller than the first element but not the smallest array element in the array.
2. So, I need to compare the next found minimum array element with the rest of the array element in the nested array for finding the minimum size array element.
3. So, this algo expects to bring the smallest array element to the front.
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimumElementIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        // Update the minimum element value index
        minimumElementIndex = j;
      }
    }

    // Swap
    [arr[i], arr[minimumElementIndex]] = [arr[minimumElementIndex], arr[i]];
  }

  return arr;
}

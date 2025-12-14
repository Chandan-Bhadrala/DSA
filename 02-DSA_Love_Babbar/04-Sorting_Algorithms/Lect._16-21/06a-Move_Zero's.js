/**
# Move Zero's
## Question:
  1. We will be given an array filled with numbers along with the 0's.
  2. We will have to move all the 0's to the end.
  3. Keeping the rest of the numbers orders intact.
## Solution Approach:
  1. Using i pointer to locate the 0's while traversing.
  2. Using j pointer to find an array element to swap with.
 */
function moveZeroes(nums) {
  // Preserve original array.
  let arrCopy = [...nums];

  for (let i = 0; i < arrCopy.length; i++) {
    let j = i + 1; // use to j to scan for non-zero number.

    if (arrCopy[i] == 0 && j < arrCopy.length) {
      while (true) {
        if (arrCopy[j] != 0) {
          // swap.
          [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
          break;
        } else {
          j++;
        }
        if (j >= arrCopy.length) break;
      }
      if (j >= arrCopy.length) break;
    }
  }
  return arrCopy;
}

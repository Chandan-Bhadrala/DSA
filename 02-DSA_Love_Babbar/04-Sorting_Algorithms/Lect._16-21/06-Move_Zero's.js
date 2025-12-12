/**
# Move Zero's
## Question:
  1. We will be given an array filled with numbers along with the 0's.
  2. We will have to move all the 0's to the end.
  3. Keeping the rest of the numbers orders intact.
## Solution Approach:
  1. 
 */
function moveZeroes(arr) {
  // Preserve original array.
  let arrCopy = [...arr];

  let i = 0;
  while (i < arrCopy.length) {
   
    if(arr[i])
   
    i++;
  }
  return arrCopy;
}

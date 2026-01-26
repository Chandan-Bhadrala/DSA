/**
# Sort 0s, 1s, and 2s.

## Question:

## Solution Approach:
1. Count the 0s, 1s, and 2s in the array in a single pass.
2. Place them into the array according to the count in the next pass.

### Time Complexity: O(4n)
*/

// -----------------------------

/**
## Improvement: In approach.
1. Will be using a separate index variable to keep track of the index places which has been overwritten previously by 0s for 1 and then for 2s by 1.
*/

function sort012(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  // Collecting count of the 0s, 1s, and 2s.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) count0++;
    else if (arr[i] == 1) count1++;
    else if (arr[i] == 2) count2++;
  }

  // Overwrite the original array.
  let index = 0; // Tracking variable.

  for (index; index <= count0; index++) {
    arr[index] = 0;
  }

  for (index; index <= count0 + count1; index++) {
    arr[index] = 1;
  }

  for (index; index <= count0 + count1 + count2; index++) {
    arr[index] = 2;
  }

  return arr;
}

// --- Output:
console.log(sort012([1, 1, 0, 0, 2, 1, 2, 1, 0, 1]));

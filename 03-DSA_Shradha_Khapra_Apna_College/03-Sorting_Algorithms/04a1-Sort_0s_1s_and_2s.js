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
## Error: In approach.
1. I pushed new sorted 0s, 1s, and 2s into the original array.
2. I was supposed to overwrite the original array.
3. Instead I kept the original array as it is and pushed the new sorted 0s, 1s, and 2s in the end.
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

  for (let i = 0; i <= count0; i++) {
    arr.push(0);
  }

  for (let i = 0; i < count1; i++) {
    arr.push(1);
  }

  for (let i = 0; i < count2; i++) {
    arr.push(2);
  }

  return arr;
}

// --- Output:
console.log(sort012([1, 1, 0, 0, 2, 1, 2, 1, 0, 1]));

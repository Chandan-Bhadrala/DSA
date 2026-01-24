/**
# Container with most water.

## Question:
1. Here an array is given and array elements represents the height of the container bounds.
  1.1. Essentially, array heights are forming a container.
2. We need to found an array bounds which can hold the maximum area for the water to hold.
3. Area will be calculated as the Height * Width.
  3.1. Height = Math.min(ltHeight, rtHeight).
  3.2. Width = rtHeightIndexValue - ltHeightIndexValue

## Solution Approach - O(n):
1. I'll be using two pointers:
  i -> To track the left bound.
  j -> To find the right bigger bound.
2. But the issue is, the moment I'll shift the left bound in thought that the next left bound could yield a better result, then I may loose a better left bound option in search of the better left bound.

## Revised Approach:
1. We are supposed to take two pointers starting from the each end.
2. Upon shifting any pointer from either side we are definitely reducing the width, so in pursuit to find the bigger container, we must shift the pointer to find the bigger length (bigger array element bound).
3. Thus, we'll be shifting the bound whose length is smaller in pursuit to find the bigger length which in return may yield a bigger container area.
4. Will keep shrinking it till our bounds cross each other and we'll be storing the max. container area on the way.

One-line summary (perfect for quick revision):
Since width always decreases, we discard the shorter boundary because only a taller height can compensate and increase the area.
*/

// -----------------------------

// ## Answer is found in a single pass.
function containerWithMostWater(arr) {
  let maxWaterArea = 0;

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let currentWaterArea = Math.min(arr[i], arr[j]) * (j - i);

    // Updating the maxWaterArea value upon finding the next best candidate.
    maxWaterArea = Math.max(maxWaterArea, currentWaterArea);

    // Shifting bounds
    if (arr[i] < arr[j]) i++;
    else j--;
  }

  return maxWaterArea;
}

// --- Output:
console.log(containerWithMostWater([9, 7, 5, 12, 0.5, 20, 3, 2, 20]));

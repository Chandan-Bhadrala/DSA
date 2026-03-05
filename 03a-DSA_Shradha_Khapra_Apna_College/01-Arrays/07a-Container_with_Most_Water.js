/**
# Container with most water.

## Question:
1. Here an array is given and array elements represents the height of the container bounds.
  1.1. Essentially, array heights are forming a container.
2. We need to found an array bounds which can hold the maximum area for the water to hold.
3. Area will be calculated as the Height * Width.
  3.1. Height = Math.min(ltHeight, rtHeight).
  3.2. Width = rtHeightIndexValue - ltHeightIndexValue

## Solution Approach - O(n^2):
1. Let's find the water that can be contained by all the array elements pair and let's return the global max value.
*/

// -----------------------------

function containerWithMostWater(arr) {
  let maxWaterArea = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let currWaterArea = Math.min(arr[i], arr[j]) * (j - i); // Area = height*width

      maxWaterArea = Math.max(maxWaterArea, currWaterArea); // Update the max value if found a better answer.
    }
  }

  return maxWaterArea;
}

// --- Output:
console.log(containerWithMostWater([9, 7, 5, 12, 0.5, 20, 3, 2, 20]));

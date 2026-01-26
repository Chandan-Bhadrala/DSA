/**
# Insertion Sort.

## Question:

## Solution Approach:
1. Bring the smaller element to the front.
2. Hold the smaller element in a temp variable.
3. Use shifting to shift the bigger element to the right.
    3.1. We use shifting, as shifting is less CPU cycles intensive.
4. Once the right spot is found for the held smaller array element in the temp variable, just place that smaller element to that found spot.
*/

// -----------------------------

function insertionSort(arr) {}
// --- Output:
console.log(insertionSort([7, 8, 9, 10, 12, 1, 2, 3, 4, 5]));

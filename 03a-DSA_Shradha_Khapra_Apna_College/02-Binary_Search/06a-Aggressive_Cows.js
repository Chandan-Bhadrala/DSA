/**
# Aggressive Cows.

## Question:

## Solution Approach:
*/

// -----------------------------

// Primary function.
function allocateSpace(arr, cows) {
  // Edge case:
  if (cows > arr.length) return -1; // Cows are more than the given number of the stalls.

  // Sort the stall number in the arr.
  arr.sort((a, b) => a - b);

  let start = 1; // Minimum space between the two cows needs to be at least 1.
  let end = arr[arr.length - 1] - arr[0]; // Maximum space between the two cows: one in the first stall and the other in the last stall.

  let answer = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isPossible(arr, cows, mid)) {
      answer = mid;
      // Try higher mid value in pursuit to check higher viable distance between the cows.
      start = mid + 1;
    } else {
      // Need to find a viable distance: Need to check for the smaller distance.
      end = mid - 1;
    }
  }

  // Final maximum possible distance between the cows has been found upon the while-loop exhaustion.
  return answer;
}

// Helper function.
function isPossible(arr, cows, mid) {
  let cowsCount = 1;
  let minDistance = 0;

  for (let i = 0; i < arr.length; i++) {
    if (minDistance + arr[i] <= mid) {
      // We can increase the distance between the two cows.
      minDistance += arr[i];
    } else {
      // Place the next cow in the current stall
      minDistance = arr[i];
      cowsCount++;
    }
    if (cowsCount > cows) return false;
  }

  // The given mid is qualified as a viable min distance between the given number of cows.
  return true;
}

// --- Output:
console.log(allocateSpace([1, 2, 3, 4, 5, 9], 3));

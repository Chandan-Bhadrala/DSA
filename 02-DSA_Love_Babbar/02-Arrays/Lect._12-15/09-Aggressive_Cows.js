// # Aggressive Cows.
// 1. We have to assign stalls to the cows such that minimum distance between the cows is maximum.
// 1.1. We will be given an array representing the stall numbers, we have to assign stalls two cows such that minimum distance between the two cows stalls is maximum possible.

//-----------------

// 01a. A function to allocate the stalls to the cows with minimum distance between the two cows being maximum.
function allocateStalls(arr, cows) {
  // Early return.
  if (cows > arr.length || cows <= 0) {
    return -1; // As number of cows can't be greater than number of available stalls or a negative number.
  }

  // Sorting stalls distance.
  arr.sort((a, b) => a - b);

  // Keeping start value equal to stall 1.
  let start = 1;
  // Keeping end value equal to stall co-ordinate of the last stall - coordinate of the first stall.
  let end = arr[arr.length - 1] - arr[0];
  let finalResult = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Calling the isPossible function to check whether the given mid value represents the maximum distance between the two cows stalls or not.
    if (isPossible(arr, mid, cows)) {
      // If true, then store the recent possible answer given by the mid in a variable.
      finalResult = mid;

      // Now, further reduce the search space to the right, to check for another bigger possible mid value.
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // Returning the found answer for the maximum possible stall distance between the two cows.
  return finalResult;
}

// 01b. isPossible, a helper function to validate the viability of the mid value for a possible answer.
function isPossible(arr, mid, cows) {
  let cowsCount = 1;
  let lastStall = arr[0];
  let i = 0;

  // Traversing the whole array.
  while (i < arr.length) {
    if (arr[i] - lastStall >= mid) {
      lastStall = arr[i];
      cowsCount++;
      if (cowsCount == cows) return true;
    }
    i++;
  }
  return false;
}

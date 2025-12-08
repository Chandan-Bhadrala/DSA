// # Aggressive Cows.
// 1. We have to assign stalls to the cows such that minimum distance between the cows is maximum.

//-----------------

// 01a. A function to search for a mid value that can represent the maximum possible book pages that can be allotted to a student, which in contrast is the minimum possible book pages that have to be allotted to a student.
function allocateStalls(arr, cows) {
  // Early return.
  if (students > arr.length || students <= 0) {
    return -1; // As number of cows can't be greater than number of available stalls.
  }

  // Sorting stalls distance.
  arr.sort((a, b) => a - b);

  // Keeping start value instead of zero, rather equal to the minimum distance between the stalls, as the distance can't get any less than it.
  let start = Math.min(...arr);
  let end = arr.reduce((acc, current) => acc + current, 0);
  let finalResult = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Calling the isPossible function to check whether the given mid value represents the maximum possible pages that can be allotted to a student without violating the condition that no student must get more than the maximum possible book pages.
    if (isPossible(arr, mid, cows)) {
      // If true, then store the recent possible answer given by the mid in a variable.
      finalResult = mid;

      // Now, further reduce the search space to the left, to check for another reduced possible mid value.
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // Returning the found answer for the maximum possible number of book pages that can be alloted to a student, which in contrast is a minimum possible book pages.
  return finalResult;
}

// 01b. isPossible, a helper function to validate the viability of the mid value for a possible answer.
function isPossible(arr, mid, cows) {
  let cowsCount = 1;
  let stallsDistance = 0;
  let i = 0;

  // Traversing the whole array.
  while (i < arr.length) {
   

    if (stallsDistance + arr[i] <= mid) {
      stallsDistance += arr[i];
    } else {
      // If the current student has reached its maximum possible pages, then bring up the next student and hand him over the next set of pages.
      cowsCount++;
      if (cowsCount > cows) return false;
      stallsDistance = arr[i];
    }
    // Bring up the next book and its pages.
    i++;
  }
  return true;
}

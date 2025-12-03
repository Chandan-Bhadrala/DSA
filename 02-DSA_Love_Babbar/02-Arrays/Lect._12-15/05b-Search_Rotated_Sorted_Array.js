// # Correct Solution.
// 1. The last approach had a major flaw; we were dividing the array based on the target value and applying the binary search without considering that the half where we are applying binary search might not be SORTED.
// 1.1. So, trying the solution again with a new mindset.
// 2. Now, divide the array with the mindset that we will only apply the binary search to a sorted half. Halve the array on every iteration and reject one of the two halves.

//-----------------

// # Search for an element in a rotated and sorted array.
// 1. Will be first checking for the sorted half of the array using comparison between the mid and start pointer.
// 2. If the target value lies in the sorted half then only will apply the binary search.

//-----------------

// 01. A function to search for a given element in the rotated sorted array.
function pivotElement(arr, searchN) {
  let start = 0;
  let end = arr.length - 1;
  let mid = null;

  // Used "equal to" sign, as we might "return earlier" before completing the while loop, avoiding the infinite while loop at "start = end" condition.
  // However, do ask ChatGPT, what if we never found our target value within the while loop, then wouldn't it cause while loop to run infinitely. Then how would we return -1, at target not found case.
  while (start <= end) {
    // Updating mid-pointer value.
    mid = Math.floor((start + end) / 2);

    //00. Early return, if the element is found at mid.
    if (arr[mid] === searchN) return mid;

    // Below if condition tells us, our start and mid pointer is covering the first half of the sorted array.
    if (arr[start] < arr[mid]) {
      // Below if condition tell whether our target values lies in our first sorted half of the array.
      if (searchN < arr[mid]) end = mid - 1;
      // If our target lies in the unsorted region, shrink the search space of the array and prepare the array for the next iteration of the while loop.
      else if (searchN > arr[mid]) start = mid + 1;
    }
  }

  // Didn't found the target value within the array.
  return -1;
}

/**
# Book Allocation.

## Question:

## Solution Approach:
1. It needs a primary function which will continuously call the helper function.
    1.1. A helper function job is to return a boolean value indicating that passed number of pages by the primary function is a suitable answer or not.
2. If primary function gets true from the helper function, then primary function will store that mid as the answer and will call the helper function again with the smaller value to test whether we can further minimize the maximum book pages allocation/student.
    2.1. If the helper function returns false, then primary function will pass an higher value to test whether it's a suitable answer for the book allocation or not.
*/

// -----------------------------

// Primary function.
function bookAllocation(arr, students) {
  // Early return: An edge case.
  if (students > arr.length) return -1; // Can't allocate at least one book to each student.

  let start = Math.max(...arr);
  let end = arr.reduce((acc, currVal) => acc + currVal, 0);
  let answer = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isPossible(arr, students, mid)) {
      answer = mid;
      // Reduce the book pages and check its validity in the next iteration of the while loop.
      end = mid - 1;
    } else {
      // Need to increase the book pages/student
      start = mid + 1;
    }
  }

  // After the exhaustion of the while-loop, return the final book-pages allocation answer.
  return answer;
}

// Helper function.
function isPossible(arr, students, mid) {
  let pagesAllocate = 0;
  let studentCount = 1;

  for (let i = 0; i < arr.length; i++) {
    if (pagesAllocate + arr[i] <= mid) {
      pagesAllocate += arr[i];
    } else {
      studentCount++;
      // Reset page allocation for the new student and allocate him the latest/current book pages.
      pagesAllocate = arr[i];
    }

    // Separate if-block to check whether studentCount <= students or not.
    // Separate condition/responsibility, separate code block.
    if (studentCount > students) return -1;
  }

  // If for-loop ran successfully, then we know all the book pages have been allocated neatly to the existing students.
  return 1;
}

// --- Output:
console.log(bookAllocation([12, 34, 67, 90], 2));

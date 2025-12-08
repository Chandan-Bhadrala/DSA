// # Book Allocation Problem.
// 1. We will be given an array of numbers representing the total number of pages in books.
// 1.1. Additionally, we will be given the number of students "k".
// 2. We have to find the maximum number of book pages that can be allotted to a single student.
// 2.1. That maximum number of book pages allotted to the student must be the minimum possible number that could have been allotted to a student.
// 3. Constraint: Students must be allocated book pages in a contiguous manner.
// 3.1. Thus, no student shall be given book pages randomly, but students shall be allotted book pages in a contiguous manner.

//-----------------
// ## Solution Approach:
// 1. Create a number range starting from 0 to the sum of all the book pages.
// 1.1. Use binary search to calculate the mid for the above range.
// 2. Pass this mid value to a helper function to check whether this mid value represents the maximum minimum average pages that can be allotted to a student or not.
// 3. If yes, store this mid value as an answer.
// 3.1. Then recalculate the mid again by shrinking the boundaries by changing "end = mid - 1".
// 3.2. Further check if there is another possible reduced value of mid which can represent the value of maximum minimum average pages that can be allotted to a student or not.
// 3.3. If found, repeat the search again for a further reduced value, as in step 2.
// 4. If the current "mid" value doesn't represent a value that can be allotted to students, then shift the "start = mid + 1" and repeat step 2.
// 5. Steps 3 and 4 will repeat until the binary search space is exhausted with the help of the while loop condition "start <= end".

//-----------------

// 01a. A function to search for a mid value that can represent the maximum possible book pages that can be allotted to a student, which in contrast is the minimum possible book pages that have to be allotted to a student.
function allocateBooksPages(arr, students) {
  // Early return.
  if (students > arr.length || students <= 0) {
    return -1; // As number of students are greater than number of books, then one book can't be assigned to each student. or if the given number of students are equal to or less than zero.
  }

  // Keeping start value instead of zero, rather equal to the book with maximum page size, as the book allocation can't be smaller than the book size of the one book which has maximum number of pages.
  let start = Math.max(...arr);
  let end = arr.reduce((acc, current) => acc + current, 0);
  let finalResult = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Calling the isPossible function to check whether the given mid value represents the maximum possible pages that can be allotted to a student without violating the condition that no student must get more than the maximum possible book pages.
    if (isPossible(arr, mid, students)) {
      // If true, then store the recent possible answer given by the mid in a variable.
      finalResult = mid;

      // Now, further reduce the search space to the left, to check for another reduced possible mid value.
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // Returning the found answer for the maximum possible number of book pages that can be alloted to a student, which in contrast is a minimum possible book pages.
  return finalResult;
}

// 01b. isPossible, a helper function to validate the viability of the mid value for a possible answer.
function isPossible(arr, mid, students) {
  let studentCount = 1;
  let pageSum = 0;
  let i = 0;

  // Traversing the whole array.
  while (i < arr.length) {
    // Early return upon finding the book pages to be greater than mid.
    if (arr[i] > mid) {
      return false;
    }

    if (pageSum + arr[i] <= mid) {
      pageSum += arr[i];
    } else {
      // If the current student has reached its maximum possible pages, then bring up the next student and hand him over the next set of pages.
      studentCount++;
      if (studentCount > students) return false;
      pageSum = arr[i];
    }
    // Bring up the next book and its pages.
    i++;
  }
  return true;
}

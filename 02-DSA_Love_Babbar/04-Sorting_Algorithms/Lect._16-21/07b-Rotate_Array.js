/**
# Rotate Sorted Array.
## Question:
  1. We will be given an array and a number "n".
  2. We have to rotate that array elements from the rear towards the front.
    2.1. We have to rotate the arrays elements from the rear towards the front, n number of given times.
## Solution Approach:
  1. To improve the space complexity to O(1) from O(n) from the last approach.
    1.1. Use in-place rotation.
  2. Rotate array thrice:
    2.1. 1st: Rotate whole array.
    2.2. 2nd: Rotate whole array element ranging from "0 to k - 1"  index.
    2.3. 3rd: Rotate whole array element ranging from "k to n - 1"  index.
  3. Doing these three rotations, you'll get the in-place rotated sorted array.
  4. In-place means, using the same original array for the modification to get the desired result.
## Time Complexity: O(n)
## Space Complexity: O(1), as rotation has happened in place of the original array.
 */
function rotateArray(nums, k) {
  // Reducing the size of the k to a reasonable number.
  // Keeping "k" within the array length range.
  k = k % nums.length;

  // 1. Rotate whole array.
  reverseArray(nums);
  // 2. Rotate "0 to k - 1" section of the array.
  reverseArray(nums, 0, k - 1);
  // 3. Rotate "k to n - 1" section of the array.
  reverseArray(nums, k, nums.length - 1);

  // Now, in-place rotation of nums has already been occurred with the space-complexity of O(1).
}

// A generic function to rotate an array elements.
function reverseArray(nums, startIndex = 0, endIndex = nums.length - 1) {
  // Didn't used "<=" operator as the mid-most (point of startIndex and endIndex convergence) element doesn't need to be rotated.
  while (startIndex < endIndex) {
    [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]];

    startIndex++;
    endIndex--;
  }
  return nums;
}

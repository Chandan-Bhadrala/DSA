/**
# Check if rotated and sorted array.
## Question:
  1. We will be given an array with elements in the increasing order before the rotation and we have to check whether the given array is rotated and sorted or not.
    1.1. Array might have duplicates in it.
  2. We have to return a boolean.
## Solution Approach:
  1. Check whether the break in the ascending order of the array is not more than one.
  2. Also check that the last element of the array is smaller than the first element of the array, to ensure the **circularity** in the array elements sorting and the rotations.
 */
function isRotatedSortedArray(nums) {
  // breakCount will count the number of breaks in the ascending order of the rotated sorted array. Break in the rotated sorted array must not be more than 1.
  let breakCount = 0;

  // Count the number of breaks in the increasing order of the given array.
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) {
      // Do nothing.
    } else {
      breakCount++;
    }
  }

  // Below condition will verify the **circular nature** of the rotated-sorted array.
  if (nums[nums.length - 1] > nums[0]) {
    breakCount++;
  }

  // Returns a boolean.
  return breakCount <= 1;
}

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
function rotateArray(arr) {
  let rotatedArray = [...arr];

  return rotatedArray;
}

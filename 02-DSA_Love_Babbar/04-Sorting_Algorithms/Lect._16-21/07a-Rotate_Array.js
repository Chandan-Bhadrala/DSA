/**
# Rotate Sorted Array.
## Question:
  1. We will be given an array and a number "n".
  2. We have to rotate that array elements from the rear towards the front.
    2.1. We have to rotate the arrays elements from the rear towards the front, n number of given times.
## Solution Approach:
  1. Start shifting the numbers in the new array at "i + k" indices.
    1.1. To shift last elements in the beginning of the new array.
    1.2. Use (i + k) % k, to shift the last elements properly in the starting indices.
  2. So, instead of "i + k" and (i + k) % k, rather use one generic notation of "(i + k) % k", for describing the index where the new numbers need to be inserted.

## Time Complexity: O(n)
## Space Complexity: O(n), as rotation has happened in a duplicate/copy array.
 */
function rotateArray(arr) {
  let rotatedArray = [...arr];

  return rotatedArray;
}

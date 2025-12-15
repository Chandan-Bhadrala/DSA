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
function rotateArray(nums, k) {
  const rotatedArray = [];

  // Re-calculating the value of k, to ensure k is smaller than the size of the array.
  // If the given value of k is greater than the array-indices-length.
  // Then, below expression will reduce the size of k into a reasonable number, which will be smaller than the nums.length.
  // k: indicates the number of rotation or shifting needs to be done on the array elements.
  k = k % nums.length;

  for (let i = 0; i < nums.length; i++) {
    // Shifting ith element by k steps.
    // To keep shifting within the array index range, we are using mod operator to produce the correct starting index for the overflown (i + k) indices.
    let newIndex = (i + k) % nums.length;
    // Adding array elements to the new shifted location.
    rotateArray[newIndex] = nums[i];
  }

  // Changing the nums array values/elements in-place.
  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotatedArray[i];
  }
}

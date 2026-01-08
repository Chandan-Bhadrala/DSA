/**
# Move Zero's
## Question:
  1. We will be given an array filled with numbers along with the 0's.
  2. We will have to move all the 0's to the end.
  3. Keeping the rest of the numbers orders intact.
## Solution Approach:
  1. Use a fast pointer and a slow pointer to pull all the non-zero numbers to the front.
    1.1. In the last approach in 06a), I've tried to find the 0's and swapped the 0's with the non-zero's numbers.
  2. This time rather finding 0's and swapping them with non-zero's, I will rather be pulling non-zero's numbers ahead.
  3. Fast pointer will be looking or scanning for the non-zero's numbers through the array and will be swapping them with the slow pointer index.
## Time Complexity: O(n)
 */
function moveZeroes(nums) {
  let slow = 0;

  // Scan for the non-zero's numbers and do the swap.
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] != 0) {
      // swap with the slow pointer index.
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }

  return nums;
}

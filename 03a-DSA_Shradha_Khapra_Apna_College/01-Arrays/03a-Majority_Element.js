/**
# Find the majority element in the array.

## Question:
1. There is a one element in the array with presence more than 50 %. 
2. Find that element.

## Solution Approach:
### There are two approaches.
1. Frequency Count each element, return the element with the maximum frequency.
2. Second approach is Moore's Algorithm:
  2.1. Increment frequency if the maxFreqElement = arr[i] is found again.
  2.2. Decrement the counter if the arr[i] is not found again.
    2.2.1. However, if the frequency reached to 0, then update the maxFreqElement value with the newly found value which decremented the frequency to the zero.
  2.2. Moore's Algorithms thought is, that the element with the maximum presence will eventually resides in the maxFreqElement and it'll control the frequency counter as it is present in the majority.
*/
// -----------------------------

/**
## Frequency Counting approach in an Object.
Time: O(n)
Space: O(n) (extra object) That's an issue.
*/

function majorityElement(arr) {
  let obj = {};

  // Count frequency
  for (ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1;
  }

  let majorityEle = null;

  for (key in obj) {
    if (obj[key] > Math.floor(arr.length / 2)) return (majorityEle = key);
  }

  return -1;
}

// --- Output:
console.log(majorityElement([5, 5, 3, 5, 6, 5, 5, 12]));

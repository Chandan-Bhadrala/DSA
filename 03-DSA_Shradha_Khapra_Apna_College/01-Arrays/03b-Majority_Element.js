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
## Moore's Algorithms.
Time: O(n)
Space: O(1) That's a benefit.

## Error: In Approach.
1. The detail is saved in the following MD note.
2. I initialized res with the arr[0] or with arr[i] inside the for-loop.
  2.1. I was supposed to update the freq to 1 too.
  2.2. While updating the res value.
*/



function majorityElement(arr) {
  let res = arr[0];
  let freq = 0;

  for (let i = 0; i < arr.length; i++) {
    if (res == arr[i]) {
      freq++;
    } else {
      freq--;
    }

    if (freq == 0) res = arr[i];
  }

  return res;
}

// --- Output:
console.log(majorityElement([5, 5, 3, 5, 6, 5, 5, 12]));

/**
# Sort 0s, 1s, and 2s.

## Nice YT Tutorial:
https://youtu.be/Zr1h-YDrRHA?si=kDu7DlYiW2S2eutc

## Question:

## Solution Approach (Dutch National Flag - DNF):
1. We are going to use 3 pointers.
 1.1. low -> keep track of the 0s.
 1.2. high -> keep track of the 2s.
 1.3. mid -> To traverse the array and place the 0s and 2s in their respective places as indicated by the low and the high pointers.

### Time Complexity: O(n) - It sort three elements in a single pass.
*/

// -----------------------------

/**
## Improvement: In Approach.
1. Do not update/increment mid pointer upon swapping with the high pointer immediately.
  1.1. Only update the high pointer.
2. And in the next pass, inspect the value held by the mid pointer, which was given by the swap with the high pointer.
  2.1. Only after inspecting the mid value in the next pass update/increment the mid-pointer.
*/

function sort012(arr) {
  let low = 0; // To keep track of the 0s.
  let mid = 0; // To traverse the array and to re-position 1s and 2s.
  let high = arr.length - 1; // To keep track of the 2s.

  // mid has no need to traverse farther than the high pointer.
  // As after high, we already have placed the 2s.
  for (mid; mid <= high; ) {
    if (arr[mid] == 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      mid++; // Controlled increment of the mid pointer.
      low++;
    } else if (arr[mid] == 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      // mid++; mid is not supposed to be incremented while swapping the high pointer value, as we need to inspect the swapped value. Which will be done in the next pass.
      high--;
    } else {
      // If arr[i] = 1
      // Do nothing just increment the mid pointer, to move the pointer further.
      mid++;
    }
  }

  return arr;
}

// --- Output:
console.log(sort012([1, 1, 0, 2, 0, 2, 1, 2, 1, 0, 1]));

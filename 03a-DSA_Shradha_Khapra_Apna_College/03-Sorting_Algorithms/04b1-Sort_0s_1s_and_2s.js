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
## Error: In Approach.
1. I'm not supposed to update/increment the **mid pointer value** after the swap with the **high pointer value**.
  1.1. As, I've no Idea what value is being swapped by the high pointer.
  1.2. So, I must inspect that swapped value using **mid** in the next loop-cycle. Instead of incrementing **mid while swapping with high**.
*/

/**
## Error: In Approach (DNF clarification): (By Chat GPT - Improvisation on my comment)
1. Do NOT increment the mid pointer after swapping with high.
  1.1. The value brought from high to mid is unclassified (0, 1, or 2).
  1.2. Therefore, mid must re-evaluate this position in the next iteration to maintain the DNF invariants.

---

One golden mental rule (lock this in):

> “Only move a pointer when the current value is settled.”

Why this matters beyond this problem:

This exact reasoning appears in:

* 3-way partitioning
* QuickSort partition logic
* Two-pointer string problems
* Interval merging logic 
*/

function sort012(arr) {
  let low = 0; // To keep track of the 0s.
  let mid = 0; // To traverse the array and to re-position 1s and 2s.
  let high = arr.length - 1; // To keep track of the 2s.

  // mid has no need to traverse father than the high pointer.
  // As after high, we already have placed the 2s.
  for (mid; mid <= high; mid++) {
    if (arr[mid] == 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      // mid++; No need to update mid separately as it is taken care by the for-loop.
      low++;
    } else if (arr[mid] == 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      // mid++; No need to update mid separately as it is taken care by the for-loop.
      high--;
    }
  }

  return arr;
}

// --- Output:
console.log(sort012([1, 1, 0, 2, 0, 2, 1, 2, 1, 0, 1]));

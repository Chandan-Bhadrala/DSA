### Standard code with explanation by the Gemini.

When you're dealing with a **rotated sorted array**, the trick is realizing that at least one half of the array—either left or right of your midpoint—must still be sorted. We can exploit this using a modified **Binary Search** to achieve an efficient time complexity of **O(log n)**.

## The Logic

1. **Find the Middle:** Calculate the middle index as you would in a normal binary search.
2. **Identify the Sorted Side:** Compare the middle element with the leftmost element.
* If `nums[left] <= nums[mid]`, the **left side** is sorted.
* Otherwise, the **right side** must be sorted.


3. **Check the Range:** Once you know which side is sorted, check if your `target` falls within that sorted range.
* If it does, narrow your search to that side.
* If it doesn't, the target must be in the "messy" (rotated) half.



---

## JavaScript Implementation

Here is the standard solution using a `while` loop for optimal performance in JavaScript.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Identify which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (target >= nums[left] && target < nums[mid]) {
                // Target is within the sorted left half
                right = mid - 1;
            } else {
                // Target is in the right half
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (target > nums[mid] && target <= nums[right]) {
                // Target is within the sorted right half
                left = mid + 1;
            } else {
                // Target is in the left half
                right = mid - 1;
            }
        }
    }

    return -1;
};

```

---

### Why this works

In a rotated array, you can't immediately know if `target > nums[mid]` means you should go right. However, by identifying the **sorted half** first, you create a reliable anchor point. If the target isn't in the predictable, sorted portion, you simply discard it and move toward the pivot point.

* **Time Complexity:** **O(log n)** because we halve the search space every iteration.
* **Space Complexity:** **O(1)** as we only use a few pointers.

---

Would you like me to walk through a dry run of this code using a specific example array?

---

### Standard code with explanation by the ChatGPT.

Sure, here’s the **standard, interview-safe solution** for **searching a target in a rotated sorted array**, with a clean explanation. I’ll keep it crisp and logical, the way you prefer.

---

## Problem recap (one-liner)

A sorted array is rotated at some pivot; find a target in **O(log n)** time.

Example:
`[4,5,6,7,0,1,2]`, target = `0`

---

## Core idea (this is the key insight)

At **every mid**, **one half is always sorted**.

So at each step:

1. Check which half is sorted
2. Decide whether the target lies in that sorted half
3. Discard the other half

Binary search logic remains intact.

---

## Decision logic (mental model)

For indices `start`, `mid`, `end`:

### Step 1: Check mid

If `arr[mid] === target` → done.

### Step 2: Identify sorted half

* If `arr[start] <= arr[mid]`
  → **Left half is sorted**
* Else
  → **Right half is sorted**

### Step 3: Decide where target lies

* If left half is sorted:

  * Target in range `[arr[start], arr[mid])` → move left
  * Else → move right
* If right half is sorted:

  * Target in range `(arr[mid], arr[end]]` → move right
  * Else → move left

---

## Standard implementation (JavaScript)

```js
function searchTarget(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Case 1: found target
    if (arr[mid] === target) {
      return mid;
    }

    // Case 2: left half is sorted
    if (arr[start] <= arr[mid]) {
      if (target >= arr[start] && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    // Case 3: right half is sorted
    else {
      if (target > arr[mid] && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1; // target not found
}
```

---

## Why this works (important intuition)

* Rotation **breaks global order**, but
* It **never breaks local order completely**
* One side around `mid` **must be sorted**
* Binary search survives by **always trusting the sorted side**

---

## Time & space complexity

* Time: `O(log n)`
* Space: `O(1)`

---

## One-line interview summary (golden line)

> “At every step, one half of the rotated array is sorted; I check whether the target lies in that half and discard the other.”

If you want next:

* edge cases (`[1]`, `[3,1]`)
* dry run walkthrough
* handling duplicates
* or linking this to pivot-finding logic

Just say the word.

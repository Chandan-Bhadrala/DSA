# Taught by Gemini.

The **Previous Smaller Element** problem is a classic application of the **Monotonic Stack** pattern. The goal is to find the nearest element to the left of each index that is strictly smaller than the current element. If no such element exists, we typically return `-1`.

### The Logic

We iterate through the array from left to right. We maintain a stack of elements we've seen so far. For the current element:

1. **Pop** elements from the stack that are greater than or equal to the current element (since they can't be the "smaller" element we're looking for).
2. If the stack is empty, there is no previous smaller element (**-1**).
3. If the stack is not empty, the **top** of the stack is the nearest smaller element.
4. **Push** the current element onto the stack for future comparisons.

---

### Implementation

```javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    prevSmaller(arr) {
        const n = arr.length;
        const result = new Array(n);
        const stack = [];

        for (let i = 0; i < n; i++) {
            // While stack is not empty and the top is >= current element
            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
                stack.pop();
            }

            // If stack is empty, no smaller element exists to the left
            if (stack.length === 0) {
                result[i] = -1;
            } else {
                // The top of the stack is the nearest smaller element
                result[i] = stack[stack.length - 1];
            }

            // Push current element to stack
            stack.push(arr[i]);
        }

        return result;
    }
}

```

---

### Complexity Analysis

* **Time Complexity**: **O(n)**. Each element is pushed onto and popped from the stack at most once.
* **Space Complexity**: **O(n)** in the worst case for the stack (e.g., if the input array is sorted in increasing order).

### Example

**Input**: `[4, 5, 2, 10, 8]`

**Output**: `[-1, 4, -1, 2, 2]`

* At **4**: Stack empty  `-1`. Stack: `[4]`
* At **5**: Top (4) < 5  `4`. Stack: `[4, 5]`
* At **2**: Pop 5, Pop 4. Stack empty  `-1`. Stack: `[2]`
* At **10**: Top (2) < 10  `2`. Stack: `[2, 10]`
* At **8**: Pop 10. Top (2) < 8  `2`. Stack: `[2, 8]`

Would you like me to adapt this to return the **indices** of the smaller elements instead of their values?

---

# Taught by ChatGPT.

Very good.
Now you’re entering the **other side of the same pattern**.

This is just a mirror of Next Greater — but now:

> For every element, find the previous smaller element (to its left).

---

## 🧠 Problem Understanding

For each element `arr[i]`, find:

* The nearest element to the **left**
* That is **strictly smaller**
* If none exists → return `-1`

---

### Example

```
arr = [4, 5, 2, 10, 8]
```

Result:

```
[-1, 4, -1, 2, 2]
```

Why?

* 4 → nothing on left → -1
* 5 → 4 is smaller → 4
* 2 → 4 and 5 are bigger → -1
* 10 → 2 is smaller → 2
* 8 → 2 is smaller → 2

---

## 🔥 Key Insight

We need a **monotonic increasing stack**.

Why increasing?

Because we want the stack to always keep smaller elements at bottom and remove larger ones.

If current element is smaller than stack top:
→ pop until top is smaller.

---

## 🚀 Clean Implementation

```javascript
class Solution {
    prevSmaller(arr) {
        let stack = [];
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            
            // Remove elements >= current
            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
                stack.pop();
            }

            // If stack empty → no smaller element
            if (stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[stack.length - 1]);
            }

            // Push current element
            stack.push(arr[i]);
        }

        return result;
    }
}
```

---

## 🎯 Why This Works

Each element:

* Pushed once
* Popped once

Time → **O(n)**
Space → **O(n)**

---

## 🧩 Pattern Clarity (Important)

There are only 4 variations:

| Problem Type     | Direction | Stack Type |
| ---------------- | --------- | ---------- |
| Next Greater     | Right     | Decreasing |
| Next Smaller     | Right     | Increasing |
| Previous Greater | Left      | Decreasing |
| Previous Smaller | Left      | Increasing |

Memorize this table once.
Half of stack problems are just this table.

---

## 🌐 Web Dev Parallel (as you like)

Imagine processing request timestamps.

For each request, you want:

> What was the last lighter request before this heavy spike?

Instead of scanning backward every time (O(n²)),
you maintain a structured stack of useful candidates.

This is similar to:

* Rate limiting logic
* Log stream processing
* Sliding window metrics

Stack keeps only meaningful past data.

---

If you want next level:

* Try writing Previous Greater yourself.
* Or I give you Daily Temperatures (classic interview stack problem).

Now your brain is starting to recognize stack patterns.
This is exactly how DSA mastery builds — one pattern at a time.

---
# Taught by Gemini.

The **Stock Span** problem is a classic application of the **Monotonic Stack**. The span of a stock's price on a given day is defined as the maximum number of consecutive days (including the current day) just before it, for which the price was less than or equal to the current price.

In simpler terms: we need to find the index of the **previous greater element**.

### The Logic

* We use a stack to store the **indices** of the days.
* For each price, we pop from the stack as long as the price at the top of the stack is less than or equal to the current price.
* If the stack becomes empty, it means the current price is the highest so far, so the span is `index + 1`.
* Otherwise, the span is the difference between the current index and the index of the previous greater element.

---

### Implementation

Here is the JavaScript implementation for your `Solution` class:

```javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    calculateSpan(arr) {
        let n = arr.length;
        let span = new Array(n);
        let stack = [];

        for (let i = 0; i < n; i++) {
            // Pop elements from stack while the stack is not empty 
            // and the current price is greater than or equal to 
            // the price at the index stored at the top of the stack
            while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
                stack.pop();
            }

            // If stack is empty, then arr[i] is greater than all 
            // previous elements. Otherwise, it's greater than 
            // elements after the index at stack top.
            if (stack.length === 0) {
                span[i] = i + 1;
            } else {
                span[i] = i - stack[stack.length - 1];
            }

            // Push this element's index to the stack
            stack.push(i);
        }

        return span;
    }
}

```

### Complexity Analysis

* **Time Complexity**: **O(n)**. Even though there is a nested `while` loop, each index is pushed and popped from the stack exactly once.
* **Space Complexity**: **O(n)** to store the stack and the resulting span array.

---

Would you like me to walk through a dry run of this logic with a specific example array?

---

# Taught by ChatGPT.

Good. This is the classic **Stock Span** problem — solved using a **monotonic stack**.

One-line intuition:
For each day, span = number of consecutive previous days with price ≤ today’s price.

We keep a stack of indices where prices are in **decreasing order**.

---

### 🔹 Algorithm Logic

For each index `i`:

1. While stack is not empty **and**
   `arr[stack.top] <= arr[i]`
   → pop from stack
   (because those days are included in span)

2. If stack becomes empty
   → span = `i + 1`
   (all previous days are smaller)

3. Else
   → span = `i - stack.top`

4. Push current index `i` into stack.

Time Complexity: **O(n)**
Each element is pushed and popped at most once.

---

### 🔹 Code (Clean & Interview Ready)

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    calculateSpan(arr) {
        let n = arr.length;
        let stack = [];      // will store indices
        let span = new Array(n);

        for (let i = 0; i < n; i++) {

            // Pop smaller or equal elements
            while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
                stack.pop();
            }

            // If stack is empty
            if (stack.length === 0) {
                span[i] = i + 1;
            } else {
                span[i] = i - stack[stack.length - 1];
            }

            // Push current index
            stack.push(i);
        }

        return span;
    }
}
```

---

### 🔹 Why This Works (Deep Understanding)

The stack always maintains **previous greater element indices**.

So for each `i`, we are actually finding:

> Distance from current index to previous greater element.

That distance is exactly the stock span.

---

### 🔹 Pattern Recognition (Important for DSA)

Whenever you see:

* "consecutive previous smaller elements"
* "nearest greater to left"
* "monotonic behavior"

→ Think **Monotonic Stack**

---

If you want, I can now:

* Dry run on example `[100, 80, 60, 70, 60, 75, 85]`
* Or connect this to real backend/web dev logic for pattern clarity
* Or explain how this relates to `LeetCode 901` (StockSpanner class version)

What would you prefer?

---
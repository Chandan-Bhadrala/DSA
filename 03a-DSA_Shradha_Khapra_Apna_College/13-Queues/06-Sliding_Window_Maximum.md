# Taught by Gemini.

The **Sliding Window Maximum** is a classic "hard" problem that tests your ability to optimize an algorithm from $O(n \times k)$ down to $O(n)$.

The goal is to find the maximum value in every sliding window of size `k` as it moves from left to right across an array.

### The Logic: Why a Deque?

To solve this efficiently, we use a **Deque** (Double-Ended Queue) to store **indices**. The key is to maintain the deque such that it only contains elements that could potentially be the maximum for the current or future windows.

1. **Monotonicity:** We keep the values in the deque in **descending order**. If the current element is larger than the elements at the back of the deque, those smaller elements are no longer useful and can be removed.
2. **Expiry:** As the window slides, we remove the index from the front of the deque if it falls outside the window range.
3. **Result:** The element at the front of the deque is always the maximum for the current window.

---

### Implementation in JavaScript

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = []; // Stores indices

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are out of the current window range
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // 2. Maintain monotonic property: 
        // Remove indices of all elements smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // 3. Add current element's index
        deque.push(i);

        // 4. If window has reached size k, the front of deque is the max
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};

```

---

### Complexity Analysis

| Metric | Complexity | Explanation |
| --- | --- | --- |
| **Time Complexity** | **O(n)** | Each element is pushed and popped from the deque at most once. |
| **Space Complexity** | **O(k)** | The deque stores at most `k` indices at any given time. |

### Why this beats the naive approach

The naive approach (checking every window) takes $O(n \cdot k)$. In a worst-case scenario where $n = 10^5$ and $k = 5 \cdot 10^4$, the naive approach would perform billions of operations, likely causing a timeout. The Deque approach ensures we only pass through the array once.

**Would you like me to explain how to adapt this logic for a "Sliding Window Minimum" or perhaps a different sliding window problem?**

---

# Taught by ChatGPT.

**239. Sliding Window Maximum** (from LeetCode)

Problem in one line:
Given an array `nums` and a window size `k`, return the maximum element in every contiguous window of size `k`.

Example:
`nums = [1,3,-1,-3,5,3,6,7], k = 3`
Output: `[3,3,5,5,6,7]`

---

## Brute Force (Why it’s bad)

For every window:

* Scan k elements
* Take max
  Time complexity → **O(n × k)**

Not acceptable for large `n`.

---

## Optimal Approach — Monotonic Deque (O(n))

Core idea:

We maintain a **deque of indices**, not values.

Rules:

1. Remove indices that are out of the current window.
2. Remove indices whose values are smaller than the current element.
3. The front of deque always holds the index of the maximum element.

Why this works:

* Deque stays in **decreasing order of values**.
* Largest element always at the front.
* Each element is added and removed at most once → **O(n)**.

---

## Step-by-step Intuition

For every index `i`:

### 1️⃣ Remove out-of-window elements

If `deque[0] <= i - k`, pop from front.

### 2️⃣ Maintain decreasing order

While `nums[deque[last]] < nums[i]`, pop from back.

### 3️⃣ Push current index

### 4️⃣ If window formed (`i >= k - 1`)

Add `nums[deque[0]]` to result.

---

## Clean JavaScript Implementation

```javascript
function maxSlidingWindow(nums, k) {
  const deque = []; // will store indices
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // 1. Remove elements out of this window
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // 2. Remove smaller elements from back
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // 3. Add current index
    deque.push(i);

    // 4. Record result when window is valid
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
```

Time Complexity: **O(n)**
Space Complexity: **O(k)**

---

## Deep DSA Insight (Important for you)

This is a **Monotonic Queue pattern**.

Recognition pattern:

* “Maximum/minimum in sliding window”
* “Next greater element”
* “Continuous range with dominance condition”

This pattern is extremely common in:

* Rate limiting systems
* Log processing systems
* Real-time analytics dashboards
* Stock price window calculations

---

## Web Dev Practical Relation (as you prefer)

Imagine:

* You are tracking **last 5 minutes peak server load**
* Or **max API response time in last 100 requests**
* Or **highest stock price in last 30 days**

You don’t recompute max from scratch.
You maintain a monotonic structure → O(1) amortized per update.

That’s exactly what this problem trains your brain for.

---

If you want, next we can:

* Dry run it visually
* Implement using a custom Deque class
* Compare with heap solution
* Or connect it to Queue implementation you recently built

---
# Taught by Gemini.

To solve the **Next Greater Element II** problem, we use a **Monotonic Decreasing Stack**. Since this is a **circular array**, we can simulate the circular behavior by iterating through the array **twice** () and using the modulo operator (`i % n`) to access the indices.

---

### Implementation

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stack = []; // Stores indices

    // Loop twice to handle circular property
    for (let i = 0; i < n * 2; i++) {
        const currentIndex = i % n;
        const currentVal = nums[currentIndex];

        // While stack is not empty and current element is greater 
        // than the element at the stack's top index
        while (stack.length > 0 && nums[stack[stack.length - 1]] < currentVal) {
            const lastIndex = stack.pop();
            res[lastIndex] = currentVal;
        }

        // Only push indices during the first pass or if they need a result
        if (i < n) {
            stack.push(currentIndex);
        }
    }

    return res;
};

```

---

### How it Works:

1. **The Stack Strategy:** We store the **indices** of elements for which we haven't found a "next greater element" yet. The stack stays "monotonic" because we only keep elements in decreasing order.
2. **The Circular Loop:** By running the loop from `0` to `2n - 1`, we allow elements at the end of the array to "look back" at the beginning of the array to find their next greater element.
3. **The Result Array:** We initialize `res` with `-1`. If an element never finds a greater neighbor even after two passes, it correctly remains `-1`.

### Complexity:

* **Time Complexity:** **O(n)**. Even though we loop  times, each index is pushed and popped from the stack at most once.
* **Space Complexity:** **O(n)** for the stack and the result array.

Would you like me to explain how this differs from the logic used in **Next Greater Element I**?

---

# Taught by ChatGPT.

Good.
This is **Next Greater Element – Circular Array**.

You already did Histogram (84).
This is the same monotonic stack pattern — just with a circular twist.

Let’s build it cleanly.

---

Problem in one line

For each element, find the next element greater than it.
Array is circular → after last index, continue from index 0.

---

Normal Next Greater Element (non-circular)

We use a **monotonic decreasing stack of indices**.

Why decreasing?

Because:
When we see a bigger element,
we resolve all smaller elements waiting in the stack.

---

Circular Twist

Example:

nums = [1, 2, 1]

For last 1:
Its next greater is 2 (but 2 is before it).

So we simulate circular behavior.

How?

Loop from 0 → 2n - 1
Use modulo: i % n

That’s the trick.

---

Algorithm

1. Create result array filled with -1.
2. Maintain stack of indices.
3. Loop from 0 to 2n - 1:

   * currentIndex = i % n
   * While stack not empty AND
     nums[currentIndex] > nums[stackTop]:
     → resolve stackTop
   * Only push index during first pass (i < n)

Why only first pass push?
Because we don’t want duplicate indices in stack.

---

Clean Code

```js
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const index = i % n;

    while (
      stack.length > 0 &&
      nums[index] > nums[stack[stack.length - 1]]
    ) {
      const topIndex = stack.pop();
      result[topIndex] = nums[index];
    }

    if (i < n) {
      stack.push(index);
    }
  }

  return result;
};
```

---

Time Complexity
O(n)
Each element pushed once, popped once.

Space
O(n)

---

Very Important Pattern Recognition

We used:

Monotonic decreasing stack
Stack stores indices
Resolve when we find greater element

Compare this with:

* LeetCode 84 → resolve when smaller appears
* This → resolve when greater appears

Same pattern.
Only inequality direction changes.

---

Now deep understanding question for you:

Why do we initialize result with -1 at start?

And why is it safe to leave unresolved indices as -1?

Think carefully. That’s understanding the circular guarantee.

---
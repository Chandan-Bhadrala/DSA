# Taught by Gemini.

To solve the **Largest Rectangle in Histogram** problem efficiently, we use a **Monotonic Stack**. This approach allows us to find the largest rectangle in **O(n)** time.

The core idea is to maintain a stack of indices where the heights are in increasing order. When we encounter a height that is shorter than the one at the top of the stack, we know the "potential" of the taller bar has ended, and we calculate its area.

---

### Implementation

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = []; // Stores indices
    
    // We add a 0 at the end to ensure we process all remaining bars in the stack
    const h = [...heights, 0];

    for (let i = 0; i < h.length; i++) {
        // While the current bar is shorter than the bar at the stack's top
        while (stack.length > 0 && h[i] < h[stack[stack.length - 1]]) {
            const height = h[stack.pop()];
            
            // If stack is empty, the width is 'i'
            // Otherwise, width is current index - index of new top - 1
            const width = stack.length === 0 
                ? i 
                : i - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
};

```

---

### Why this works:

1. **Monotonic Increasing Stack:** By keeping the stack sorted by height, we always know that the bar to the left of our "current" popped bar is the first bar smaller than it.
2. **Determining Width:** * The **right boundary** is the current index `i` (because `h[i]` is smaller than the popped height).
* The **left boundary** is the index currently at the top of the stack (the next smaller bar to the left).


3. **The "Zero" Trick:** Adding a `0` to the end of the heights array forces the algorithm to pop everything remaining in the stack at the very end, calculating all possible rectangles.

### Complexity:

* **Time Complexity:** **O(n)** because each element is pushed and popped from the stack exactly once.
* **Space Complexity:** **O(n)** to store the stack.

Would you like me to walk through a dry run of this logic with a specific example array?

---

# Taught by ChatGPT.

Very good.
This is the **real stack problem** — not basic push/pop.

LeetCode 84 → Largest Rectangle in Histogram
This is where **monotonic stack** becomes powerful.

Let’s build it properly in your DSA-first-pass style.

---

Core Idea (one line)

For every bar, we want:

* first smaller element on left
* first smaller element on right

Because that defines how far this bar can expand.

---

Brute Force (to understand thinking)

For each index i:

* expand left while height >= heights[i]
* expand right while height >= heights[i]
* area = height * width

This is O(n²). Not acceptable.

---

Optimization Insight

Instead of expanding again and again,
we can compute the area **when we know the right boundary**.

This is where stack helps.

We maintain a stack of indices.
Stack will be **monotonically increasing by height**.

Why increasing?

Because when we see a smaller height,
we know the previous taller bar can’t extend further.

That is the key trigger.

---

Mental Model

When current height < height at stack top:

That means:
The bar at stack top has found its "right smaller element".

So we pop it and compute area.

Width calculation:

If stack is empty after popping:
width = currentIndex
Else:
width = currentIndex - stackTop - 1

Why?

Because stackTop becomes the previous smaller element.

---

Important Trick

We add a fake 0 height at the end.
So all remaining bars get processed.

---

Final Code

```js
var largestRectangleArea = function (heights) {
  const stack = [];
  let maxArea = 0;

  heights.push(0); // sentinel

  for (let i = 0; i < heights.length; i++) {
    while (
      stack.length > 0 &&
      heights[i] < heights[stack[stack.length - 1]]
    ) {
      const topIndex = stack.pop();
      const height = heights[topIndex];

      let width;
      if (stack.length === 0) {
        width = i;
      } else {
        width = i - stack[stack.length - 1] - 1;
      }

      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
};
```

Time Complexity:
O(n)
Each element pushed once and popped once.

Space:
O(n)

---

Now the most important understanding:

Why indices and not heights?

Because we need to calculate width.
Width = difference of indices.

---

Pattern Recognition (for your DSA pattern building)

Whenever you see:

* nearest smaller element
* previous smaller element
* next smaller element
* histogram area
* sliding window min/max

Think:
Monotonic Stack.

---

Web Dev connection (as you like)

This is similar to:

Processing events in order,
and when a constraint breaks,
you resolve all previous dependent states.

Like:

* resolving cascading updates
* unwinding middleware stack
* flushing buffered tasks when condition changes

---

Now think deeply:

Why do we use `<` and not `<=` in:

heights[i] < heights[stackTop]

What breaks if we change it?

That question is what separates surface understanding from real mastery.

---
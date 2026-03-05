# Taught by Gemini.

This is a classic design problem. To ensure that `getMin()` runs in **O(1)** time, we need to keep track of the minimum value at every step of the stack's growth.

The most efficient way to do this in JavaScript is to store an object or a small array at each level of the stack that contains both the value and the current minimum.

```javascript
var MinStack = function() {
    this.stack = [];
};

/** * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // If the stack is empty, the new value is the minimum.
    // Otherwise, compare the new value with the current minimum at the top.
    const currentMin = this.stack.length === 0 
        ? val 
        : this.stack[this.stack.length - 1].min;

    this.stack.push({
        value: val,
        min: Math.min(val, currentMin)
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min;
};

```

### Why this works:

* **Time Complexity:** Every operation (`push`, `pop`, `top`, `getMin`) is **O(1)** because we are just accessing the end of an array.
* **Space Complexity:** **O(n)**. We store one additional "minimum" value for every element pushed onto the stack.

### Alternative Approach (Two Stacks)

If you prefer not to store objects, you can maintain a second stack called `minStack` that only pushes a new value if it is less than or equal to the current minimum. However, the object approach above is usually cleaner in JavaScript.

Would you like me to explain how to implement this using the **Two-Stack** method instead?

---

# Taught by ChatGPT.

Good. This is a classic stack design question.

Let us think first — no code.

Goal:

* push
* pop
* top
* getMin
  All in **O(1)** time.

If you use a normal stack:

* push → O(1)
* pop → O(1)
* top → O(1)
* getMin → ❌ O(n) (you must scan entire stack)

So we need something smarter.

Core Idea (Most Important Line)
We maintain **two stacks**:

1. main stack → stores all values
2. min stack → stores the minimum at each stage

That’s it.

Now think step by step.

If you push 5:
main = [5]
min = [5]

If you push 3:
main = [5, 3]
min = [5, 3]  (because 3 <= current min 5)

If you push 7:
main = [5, 3, 7]
min = [5, 3] (7 is not smaller than 3)

So min stack only stores values that are new minimums.

When popping:
If popped value === top of min stack → also pop min stack.

This way:
getMin() → just return top of min stack → O(1)

Now implementation.

Clean version:

```js
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

MinStack.prototype.pop = function () {
  const removed = this.stack.pop();

  if (removed === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
```

Time Complexity:

* push → O(1)
* pop → O(1)
* top → O(1)
* getMin → O(1)

Space Complexity:

* O(n) (worst case if strictly decreasing)

Now very important DSA intuition:

Stack = LIFO
MinStack = augmenting a data structure with extra information

This pattern appears again in:

* Stock span
* Monotonic stack
* Histogram problems
* Sliding window min

Web Dev connection (as you prefer linking concepts):

Think of minStack like maintaining a cached derived state.
Instead of recalculating minimum from DB every time,
you maintain an optimized structure so reads are O(1).

Exactly like:

* maintaining precomputed counts
* caching expensive queries
* memoization in backend

Now question for you:

Why did we use `<=` and not just `<` while pushing to minStack?

Think carefully. That detail matters.

---
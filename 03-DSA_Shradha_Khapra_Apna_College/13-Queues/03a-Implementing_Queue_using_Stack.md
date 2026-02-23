# Taught by Gemini.

Implementing a **Queue using Stacks** is a classic interview problem. Since a **Stack** is **LIFO** (Last-In-First-Out) and a **Queue** is **FIFO** (First-In-First-Out), the challenge is to reverse the order of elements using a second stack.

---

## 1. The Strategy

To simulate a Queue, we use two stacks:

1. **Stack 1 (Input Stack):** Used for pushing new elements.
2. **Stack 2 (Output Stack):** Used for popping elements.

The "trick" is that when we move elements from Stack 1 to Stack 2, their order is reversed. If we pop from Stack 2, we get the oldest element—exactly what a Queue should do.

---

## 2. Approach: Making Dequeue Efficient

This is the most common implementation. We keep pushing to Stack 1, and only move elements to Stack 2 when a `dequeue` is requested and Stack 2 is empty.

### JavaScript Implementation

```javascript
class QueueUsingStack {
  constructor() {
    this.stack1 = []; // Input stack
    this.stack2 = []; // Output stack
  }

  // Push element to the back of the queue
  enqueue(element) {
    this.stack1.push(element);
    console.log(`Enqueued: ${element}`);
  }

  // Remove element from the front of the queue
  dequeue() {
    // If both stacks are empty, the queue is empty
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      console.log("Queue is empty!");
      return null;
    }

    // Move elements from stack1 to stack2 only if stack2 is empty
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    const removedItem = this.stack2.pop();
    console.log(`Dequeued: ${removedItem}`);
    return removedItem;
  }

  // Look at the front element
  peek() {
    if (this.stack1.length === 0 && this.stack2.length === 0) return null;

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// Usage
const myQueue = new QueueUsingStack();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue(); // Returns 1
myQueue.enqueue(4);
myQueue.dequeue(); // Returns 2

```

---

## 3. Complexity Analysis

| Operation | Time Complexity | Notes |
| --- | --- | --- |
| **Enqueue** | **O(1)** | Just a simple push to `stack1`. |
| **Dequeue** | **Amortized O(1)** | Usually O(1). Occasionally O(N) when `stack2` is empty and needs a refill. |
| **Space** | **O(N)** | We store N elements across two stacks. |

> **Note:** "Amortized" means that while a single operation might take longer, the average time over a series of operations remains constant.

---

## 4. Key Takeaway

In this implementation, the **Order Reversal** happens only when necessary. By the time an element reaches the top of `stack2`, it has been flipped twice (once by entering the first stack and once by moving to the second), restoring the original FIFO order.

Would you like me to show you the alternative version where the **Enqueue** operation is the expensive part instead?

---

# Taught by ChatGPT.

Implementing a **Queue using Stack** is a beautiful DSA exercise because it forces you to reverse order intentionally.

A queue is **FIFO**.
A stack is **LIFO**.

So the whole trick is:

> Use stack behavior to simulate FIFO order.

There are **two main approaches**.

---

## Approach 1 — Using Two Stacks (Efficient)

We use:

* `inStack` → for enqueue
* `outStack` → for dequeue

### Core Idea

* Push new elements into `inStack`.
* When you need to dequeue:

  * If `outStack` is empty → move everything from `inStack` to `outStack`.
  * Then pop from `outStack`.

That transfer reverses order → making FIFO possible.

---

### Why This Works

Example:

```
enqueue(1)
enqueue(2)
enqueue(3)
```

`inStack` becomes:

```
Top
3
2
1
```

Now when dequeuing:

Move all elements to `outStack`:

```
outStack:
Top
1
2
3
```

Now popping from `outStack` gives `1` first → correct FIFO.

---

### Implementation (JavaScript)

```javascript
class MyQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(x) {
    this.inStack.push(x);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}
```

---

### Time Complexity

* Enqueue → O(1)
* Dequeue → Amortized O(1)

Why amortized?

Because each element:

* Moves from `inStack` to `outStack` only once.
* So total operations remain linear over time.

This is the optimal solution.

---

## Approach 2 — Using One Stack (Costly)

Here, for every enqueue:

1. Pop everything into a temporary stack.
2. Push new element.
3. Push everything back.

This keeps queue order inside the stack.

But:

* Enqueue becomes O(n)
* Dequeue becomes O(1)

Not efficient. Rarely used in interviews.

---

## Pattern Recognition Insight (Important for You)

This problem is about:

> When do we reverse order?

Whenever you need:

* FIFO using LIFO
* Or backward traversal using forward-only tool

This is exactly like:

* Monotonic stack
* Reversing linked list
* Two pointer logic

It’s not about stack.
It’s about controlling order.

---

## Web Development Analogy

Think of:

* `inStack` = incoming API requests
* `outStack` = processed ready queue

Requests come in random order,
but when processing starts, we flip them to maintain arrival order.

Internally system may reverse,
but externally behavior remains FIFO.

---

If you want, I can now:

* Make you dry run this visually step-by-step
* Or give you the LeetCode-style full implementation
* Or connect this with stack vs queue internal memory behavior in OS

Your call.

---
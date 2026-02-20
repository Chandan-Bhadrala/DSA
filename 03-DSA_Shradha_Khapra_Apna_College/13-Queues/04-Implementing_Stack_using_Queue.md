# Taught by Gemini.

Implementing a **Stack using Queues** is the reverse of the previous problem. Since a **Queue** is **FIFO** (First-In-First-Out) and a **Stack** is **LIFO** (Last-In-First-Out), the goal is to make the last element added the first one to be removed.

There are two main ways to do this: making the **Push** operation expensive or making the **Pop** operation expensive. Below is the most common approach: **Making the Push Operation Expensive**.

---

## 1. The Strategy

We use two queues: `q1` and `q2`.

1. When pushing a new element, we add it to an empty `q2`.
2. We then move all elements from `q1` to `q2`.
3. Finally, we swap the names of `q1` and `q2`.

This ensures that the **newest element** is always at the front of `q1`, mimicking a stack's behavior.

---

## 2. JavaScript Implementation

Here is the implementation using JavaScript arrays to simulate the queue behavior (`push` for enqueue and `shift` for dequeue):

```javascript
class StackUsingQueues {
  constructor() {
    this.q1 = []; // Primary queue
    this.q2 = []; // Temporary queue
  }

  // Push element to the top of the stack
  push(element) {
    // 1. Add new element to q2
    this.q2.push(element);

    // 2. Move all elements from q1 to q2
    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }

    // 3. Swap the queues
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    console.log(`Pushed: ${element}`);
  }

  // Remove element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty!");
      return null;
    }
    const removedItem = this.q1.shift();
    console.log(`Popped: ${removedItem}`);
    return removedItem;
  }

  // Get the top element
  top() {
    if (this.isEmpty()) return null;
    return this.q1[0];
  }

  isEmpty() {
    return this.q1.length === 0;
  }
}

// Usage
const myStack = new StackUsingQueues();
myStack.push(10);
myStack.push(20);
myStack.push(30);

myStack.pop(); // Returns 30
console.log(`Current Top: ${myStack.top()}`); // Returns 20

```

---

## 3. Optimization: Using Only One Queue

You can actually achieve this with **just one queue** by rotating the elements. When you push an element, you find the size of the queue, add the new element, and then dequeue/enqueue the previous elements one by one to move them behind the new one.

```javascript
class StackWithOneQueue {
  constructor() {
    this.queue = [];
  }

  push(element) {
    let size = this.queue.length;
    this.queue.push(element);

    // Rotate the queue so the new element is at the front
    for (let i = 0; i < size; i++) {
      this.queue.push(this.queue.shift());
    }
    console.log(`Pushed (One Queue): ${element}`);
  }

  pop() {
    return this.queue.shift();
  }
}

```

---

## 4. Complexity Analysis

| Operation | Time Complexity | Notes |
| --- | --- | --- |
| **Push** | **O(N)** | We move all existing elements every time we push. |
| **Pop** | **O(1)** | The top element is always at the front of the queue. |
| **Space** | **O(N)** | Storing N elements in the queue(s). |

---

## 5. Summary

* **Queue using Stacks:** Focuses on reversing the order during dequeue or using an amortized approach.
* **Stack using Queues:** Focuses on repositioning the newest element to the front of the queue during the push operation.

Would you like to try solving a specific challenge with these, such as checking for **balanced parentheses** using a stack?

---

# Taught by ChatGPT.

Good. Now we reverse the brain.

Earlier:
Queue (FIFO) using Stack (LIFO)

Now:
Stack (LIFO) using Queue (FIFO)

This one is slightly more tricky conceptually.

A stack requires:

* push(x)
* pop()
* top()
* empty()

And stack must return the **last inserted element first**.

Queue naturally removes from the front.
So we must **force the last inserted element to come to the front**.

There are two approaches again.

━━━━━━━━━━━━━━━━━━━━
Approach 1 — Costly Push (Most Common)
Use One Queue
━━━━━━━━━━━━━━━━━━━━

Idea:

Whenever we push a new element, we rotate the queue so that the new element comes to the front.

Example:

Push 1
Queue: [1]

Push 2
Queue: [1, 2]

Now rotate size-1 times:

Take front and move to back:
→ remove 1 → add to back

Queue becomes:
[2, 1]

Now front is 2 → correct stack behavior.

Push 3:

Queue: [2, 1, 3]

Rotate twice:

remove 2 → push back → [1, 3, 2]
remove 1 → push back → [3, 2, 1]

Now front is 3 → correct stack order.

So pop() just removes from front.

━━━━━━━━━━━━━━━━━━━━
Implementation (JavaScript)
━━━━━━━━━━━━━━━━━━━━

```javascript
class MyStack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this.queue.push(x);

    // rotate previous elements
    let size = this.queue.length;
    for (let i = 0; i < size - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    return this.queue.shift();
  }

  top() {
    return this.queue[0];
  }

  empty() {
    return this.queue.length === 0;
  }
}
```

Time Complexity:

* push → O(n)
* pop → O(1)
* top → O(1)

We made push expensive so pop becomes simple.

━━━━━━━━━━━━━━━━━━━━
Approach 2 — Costly Pop
Use Two Queues
━━━━━━━━━━━━━━━━━━━━

Here:

* push is O(1)
* pop is O(n)

Idea:

Push normally into q1.

When popping:

1. Move all elements except last from q1 to q2.
2. Remove last element (this is stack top).
3. Swap q1 and q2.

This works but is less elegant.

In interviews, they prefer Approach 1 (single queue).

━━━━━━━━━━━━━━━━━━━━
Why This Works (Core Concept)
━━━━━━━━━━━━━━━━━━━━

Stack wants:
Last in → First out

Queue gives:
First in → First out

So we artificially rotate the queue so that:
The newest element always sits at the front.

We are not changing queue rules.
We are manipulating ordering.

━━━━━━━━━━━━━━━━━━━━
Pattern Insight (Important for You)
━━━━━━━━━━━━━━━━━━━━

Both problems teach same deeper idea:

When required order ≠ natural order of data structure
→ simulate by reversing flow at correct time.

Queue using stack → reverse during dequeue
Stack using queue → reverse during push

You are not memorizing.
You are controlling direction.

━━━━━━━━━━━━━━━━━━━━
Web Dev Analogy

Imagine:

* Queue = request pipeline
* Stack = undo history

Undo history needs:
Last action undone first.

So whenever new action happens,
you bring it to the top priority position.

That’s exactly what rotation is doing.

━━━━━━━━━━━━━━━━━━━━

If you want, next I can:

• Connect this to recursion call stack
• Or ask you to implement it without using shift() (true queue simulation)
• Or give you a trick question variation

Your move.

---
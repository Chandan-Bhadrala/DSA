# Taught by Gemini.

A **Circular Queue** is an extended version of a regular queue that connects the last position back to the first position, forming a circle. In a standard array-based queue, once the "rear" reaches the end of the array, you can't insert more elements even if there is empty space at the front. A circular queue fixes this "wastage" of memory.

---

## 1. How it Works

Think of the array as a ring. We use two pointers:

* **Front:** Points to the first element of the queue.
* **Rear:** Points to the last element of the queue.

The magic happens using the **Modulo Operator (%)**. Instead of simply doing `rear++`, we use:
`rear = (rear + 1) % capacity`

---

## 2. Key Operations

| Operation | Logic |
| --- | --- |
| **isFull** | `(rear + 1) % capacity === front` |
| **isEmpty** | `front === -1` |
| **Enqueue** | Move `rear` forward circularly and add the element. |
| **Dequeue** | Move `front` forward circularly to "remove" the element. |

---

## 3. JavaScript Implementation

As per your preference for **JS code** and **Hashnode-compatible markdown**, here is a clean implementation:

```javascript
class CircularQueue {
  constructor(size) {
    this.capacity = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  // Check if the queue is full
  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // Add an element
  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is Full!");
      return false;
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    
    // Move rear in a circle
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = element;
    console.log(`Enqueued: ${element}`);
  }

  // Remove an element
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty!");
      return null;
    }

    const item = this.queue[this.front];
    
    // If there was only one element, reset pointers
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      // Move front in a circle
      this.front = (this.front + 1) % this.capacity;
    }
    
    console.log(`Dequeued: ${item}`);
    return item;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let i = this.front;
    let result = "Queue: ";
    while (true) {
      result += this.queue[i] + " ";
      if (i === this.rear) break;
      i = (i + 1) % this.capacity;
    }
    console.log(result);
  }
}

// Usage
const myQueue = new CircularQueue(5);
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.dequeue();
myQueue.display();

```

---

## 4. Why Use It?

1. **Memory Efficiency:** It reuses the empty slots created by dequeuing.
2. **Fixed Buffer:** Great for scenarios like traffic light systems or CPU scheduling where you have a set amount of memory.

Would you like me to explain how to implement a Circular Queue using a **Linked List** instead?

---

# Taught by ChatGPT.

Good. Now we move to **Circular Queue** — this is where queue becomes interesting.

---

## 1️⃣ Why Do We Need Circular Queue?

Normal array queue problem:

If we do:

* enqueue 1,2,3,4
* dequeue twice

Array looks like:

```
[ x, x, 3, 4 ]
```

Front moved forward.

Now if rear reaches end of array → we cannot insert more
even though empty spaces exist at beginning.

👉 Waste of space.

Circular Queue solves this by **wrapping around**.

---

## 2️⃣ Core Idea

Instead of moving in straight line:

```
0 → 1 → 2 → 3 → end
```

We treat array like a circle:

```
0 → 1 → 2 → 3
↑             ↓
← ← ← ← ← ← ←
```

We use modulo operator `%` to wrap.

---

## 3️⃣ Important Conditions

Let:

* `front`
* `rear`
* `capacity`

Wrap rule:

```
index = (index + 1) % capacity
```

---

### How do we detect:

Empty:

```
size === 0
```

Full:

```
size === capacity
```

OR (if not using size):

```
(rear + 1) % capacity === front
```

Both approaches exist.

---

## 4️⃣ Clean Implementation (Using Size — Easier)

```js id="qaz7lp"
class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) return false;

    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;

    return true;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const value = this.queue[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;

    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  getFront() {
    if (this.isEmpty()) return null;
    return this.queue[this.front];
  }
}
```

---

## 5️⃣ Visual Example

Capacity = 4

### Enqueue 10,20,30,40

```
[10,20,30,40]
front=0
rear=0 (wrapped)
size=4
```

Now it's full.

---

### Dequeue twice

Remove 10,20

```
[10,20,30,40]
       ↑
     front=2
rear=0
size=2
```

Now enqueue 50

```
[50,20,30,40]
front=2
rear=1
size=3
```

See?

We reused index 0.

That is circular power.

---

## 6️⃣ Why Circular Queue Is Important

Appears in:

* Fixed-size buffers
* Producer-consumer problems
* CPU scheduling
* Rate limiting
* Sliding window problems

In real systems:
Network buffers use circular queues.

---

## 7️⃣ Very Important Conceptual Difference

Normal queue (array naive):

* Space wasted after dequeue

Circular queue:

* No space wasted
* Efficient memory reuse

---

## 8️⃣ Web Dev Connection (For You)

In backend systems:

* Task buffers
* Request throttling
* Logging buffers
* Streaming data

All use circular buffer concepts.

Even high-performance systems (like networking stacks) rely on this idea.

---

Now thinking question:

Why do we use
`rear = (rear + 1) % capacity`
instead of just `rear++`?

Answer in one logical line.

---
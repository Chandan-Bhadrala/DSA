# Taught by Gemini.

Implementing a **Queue** using a **Linked List** is often more efficient than using an array. In an array, removing the first element (the head) requires shifting every other element's index, which is a slow process for large datasets.

With a Linked List, we simply move a pointer. This gives us **O(1)** (constant time) performance for both adding and removing items.

---

### The Logic

To make this work, we need two pointers:

1. **Head:** Points to the beginning of the queue (where we **dequeue**).
2. **Tail:** Points to the end of the queue (where we **enqueue**).

Each "Node" in our list will contain the data and a reference (`next`) to the person behind them in line.

---

### Linked List Queue Implementation

```javascript
// 1. Create a Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 2. Create the Queue class
class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add to the back (Tail)
  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Connect the current tail to the new node
      this.tail.next = newNode;
      // Move the tail pointer to the new node
      this.tail = newNode;
    }

    this.length++;
  }

  // Remove from the front (Head)
  dequeue() {
    if (this.isEmpty()) return null;

    const removedNode = this.head;
    
    // Move the head pointer to the next node in line
    this.head = this.head.next;
    this.length--;

    // If the queue is now empty, reset the tail to null
    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode.value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// Usage:
const printerQueue = new LinkedQueue();
printerQueue.enqueue("Document_A.pdf");
printerQueue.enqueue("Photo_B.jpg");

console.log(printerQueue.dequeue()); // "Document_A.pdf"
console.log(printerQueue.peek());    // "Photo_B.jpg"

```

---

### Why this is better than an Array

* **No Re-indexing:** When you remove the `head`, you just update the pointer. You don't have to touch any other nodes in the list.
* **Dynamic Size:** Unlike arrays in some low-level languages, a Linked List queue doesn't need a pre-defined size; it grows as long as you have memory.
* **Performance:** * **Enqueue:** **O(1)**
* **Dequeue:** **O(1)**



---

### Key Takeaway

In a Linked List implementation, think of **enqueueing** as "attaching to the tail" and **dequeueing** as "moving the head forward."

Would you like to see how this is applied in a **Priority Queue**, where some items can "jump" to the front based on importance?

---

# Taught by ChatGPT.

Good. Now we do it properly.

Queue using **Singly Linked List**.

Clean. Minimal. O(1) everywhere.

---

## 1️⃣ Structure Design

We need:

* `head` → front of queue
* `tail` → rear of queue
* `size` (optional but useful)

Each node:

* `value`
* `next`

---

## 2️⃣ Why Linked List is Perfect for Queue?

Because:

* Enqueue → insert at tail → O(1)
* Dequeue → remove from head → O(1)

No shifting.
No resizing.
No wasted memory movement.

---

## 3️⃣ Implementation (JavaScript)

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // front
    this.tail = null; // rear
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const removedValue = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return removedValue;
  }

  front() {
    if (this.isEmpty()) return null;
    return this.head.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}
```

---

## 4️⃣ Step-by-Step Mental Execution

### Enqueue 10

Queue empty:

```
head → 10 → null
tail → 10
```

---

### Enqueue 20

```
head → 10 → 20 → null
                 ↑
                tail
```

We:

* Attach new node at tail.next
* Move tail forward

---

### Dequeue

Remove from head:

```
head → 20 → null
tail → 20
```

If queue becomes empty:
Both head and tail must become `null`.

That condition is critical.

---

## 5️⃣ Why This Is O(1)

* We never traverse.
* We never shift.
* We only move pointers.

Constant time always.

---

## 6️⃣ Common Mistake (Important)

Forgetting this:

```js
if (this.head === null) {
  this.tail = null;
}
```

If you don't reset tail,
you’ll keep a dangling pointer.

This causes subtle bugs later.

---

## 7️⃣ Where This Matters in DSA

This exact implementation is used when:

* BFS in trees
* BFS in graphs
* Kahn’s Topological Sort
* Level-order traversal

Because we need:

* Insert many items
* Remove many items
* All in O(1)

---

## 8️⃣ Very Important Conceptual Difference

Stack LL implementation:

* Insert/remove from head

Queue LL implementation:

* Insert at tail
* Remove from head

That’s the only conceptual shift.

---

Now small thinking exercise for you:

If I remove `tail` pointer and only keep `head`,
what becomes the time complexity of enqueue?

Think carefully.

---
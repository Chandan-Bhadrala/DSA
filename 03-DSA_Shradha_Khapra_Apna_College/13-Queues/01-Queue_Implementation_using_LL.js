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
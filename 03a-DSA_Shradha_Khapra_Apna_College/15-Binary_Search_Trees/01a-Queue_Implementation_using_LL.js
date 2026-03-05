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
    let newNode = new Node(value);

    // Below if-block code is for the very first node insertion
    if (this.head == this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Remove from the front (Head)
  dequeue() {
    if (!this.head) return null;

    let removedNode = this.head;
    this.head = this.head.next;
    this.length--;

    removedNode.next = null;
    return removedNode;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.length == 0;
  }
}

// Usage:
const printerQueue = new LinkedQueue();
printerQueue.enqueue("Document_A.pdf");
printerQueue.enqueue("Photo_B.jpg");

console.log(printerQueue.dequeue()); // "Document_A.pdf"
console.log(printerQueue.peek()); // "Photo_B.jpg"

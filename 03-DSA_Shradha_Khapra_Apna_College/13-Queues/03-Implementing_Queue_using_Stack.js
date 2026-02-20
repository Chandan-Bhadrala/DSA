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
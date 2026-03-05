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
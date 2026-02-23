class ArrayQueue {
  constructor(capacity) {
    // Noting down the desired capacity of the queue.
    this.capacity = capacity;

    // Creating an array of the desired capacity/size.
    this.queue = new Array(capacity);

    // Initializing head and tail pointer to just left to the 0th index.
    // So, that pointers updates themselves properly upon the first value insertion.
    this.head = -1;
    this.tail = -1;

    // Maintain a length pointer to know how much queue space is used.
    this.length = 0;
  }

  // Add to the back (Tail)
  enqueue(value) {
    // Return false to indicate queue is fulled and the value couldn't be inserted/queued.
    if (this.length == this.capacity) return false;

    // Need to handle first insertion separately.
    if (this.head == this.tail) {
      this.head = 0;
      this.tail = 0;
      this.queue[this.head] = value;
    } else {
      this.queue[(this.tail + 1) % this.capacity] = value;

      // Move tail ahead.
      // Using modulo operator to keep the tail pointing within the queue size.
      this.tail = (this.tail + 1) % this.capacity;
    }

    this.length++;
    return true;
  }

  // Remove from the front (Head)
  dequeue() {
    // Return false to indicate, operation failed as there was nothing to dequeue.
    if (this.isEmpty()) return false;

    let removedValue = null;

    // Handle single value case separately to adjust head and tail pointer value properly.
    // If both pointers is holding the same indices.
    if (this.head == this.tail) {
      removedValue = this.queue[this.head];

      // Re-initializing head and tail indices to the starting point.
      this.head = -1;
      this.tail = -1;
    } else {
      removedValue = this.queue[this.head];

      // Update head pointer to hold the index of the next subsequent value.
      this.head = (this.head + 1) % this.capacity; // It could have been simply "this.head + 1" but using this.capacity with modulo operator to keep the head value within the queueArray capacity.
    }

    this.length--;
    return removedValue;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.queue[this.head];
  }

  isEmpty() {
    return this.length == 0;
  }
}

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
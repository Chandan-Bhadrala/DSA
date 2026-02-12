/**
# Reverse a Linked List.

## Question:
## Solution:
*/
// -----------------------------

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // Create a node for the given value.
    let newNode = new Node(val);

    // If the list is empty.
    if (!this.head) {
      // Mark the newly created node as a head and the tail node.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // LL is not empty.

      // Find the last node with null pointer;
      let current = this.head;

      // Rather than looping, I can use tail to simply append the new node at the last.
      // this.tail.next = newNode; // Append new Node at current last node.
      // this.tail = newNode; // Update tail to point to the new last node.
      while (current.next != null) {
        current = current.next;
      }

      // Found the last node after the exhaustion of the while-loop.
      // Place it after the former last node.
      current.next = newNode;

      // Update the tail node.
      this.tail = newNode;
    }
    this.length++;

    // Return back the list.
    return this;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.val + " -> ";
      current = current.next;
    }

    console.log(result + "null");
  }

  reverse() {
    if (!this.head) return undefined;

    let current = this.head;
    let prev = null; // Last node after the reversal must be null.
    // A variable to keep the next node info protected
    let next = current;

    for (let i = 0; i < this.length; i++) {
      next = current.next; // Saving the location of the next node.

      current.next = prev; // Switching the link.

      prev = current; // Updating prev
      current = next; // Updating the current node for the next iteration.
    }

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}

// ---
// How to use it.

const myList = new LinkedList();
myList.push(1);
myList.push(2);
myList.push(3);

console.log("Original:");
myList.print(); // 1 -> 2 -> 3 -> null

myList.reverse();

console.log("Reversed:");
myList.print(); // 3 -> 2 -> 1 -> null

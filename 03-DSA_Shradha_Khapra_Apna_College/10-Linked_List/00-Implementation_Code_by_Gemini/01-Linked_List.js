/**
# Implementation of the Linked List.

## Question:
## Solution:
*/
// -----------------------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Initially, it points to nothing
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Method 1: Add to the end (Append)
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      // Traverse to the very last node
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Method 2: Remove a node by value
  remove(value) {
    if (this.head === null) return null;

    // If the head is the one to be removed
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }

    // If we found the value, bypass the current node
    if (current !== null) {
      previous.next = current.next;
      this.size--;
    }
  }

  // Method 3: Print the list (for debugging)
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// --- 
// How to use it.
const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);

myList.printList(); // Output: 10 -> 20 -> 30 -> null

myList.remove(20);
myList.printList(); // Output: 10 -> 30 -> null
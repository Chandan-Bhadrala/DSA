/**
# ChatGPT Implementation of the Linked List without tail variable.

## Question:
## Solution:
*/
// -----------------------------

// A singly linked list has a node which contains:
// Data and a reference to the next node.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  insertAtEnd(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  deleteByValue(value) {
    if (this.head === null) return;

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

    if (current === null) return;

    previous.next = current.next;
    this.size--;
  }

  search(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.value + " -> ";
      current = current.next;
    }

    console.log(result + "null");
  }
}

// ---
// How to use it.

const list = new SinglyLinkedList();

list.insertAtBeginning(10);
list.insertAtBeginning(5);
list.insertAtEnd(20);
list.insertAtEnd(30);

list.print(); // 5 -> 10 -> 20 -> 30 -> null

list.deleteByValue(10);
list.print(); // 5 -> 20 -> 30 -> null

console.log(list.search(20)); // true

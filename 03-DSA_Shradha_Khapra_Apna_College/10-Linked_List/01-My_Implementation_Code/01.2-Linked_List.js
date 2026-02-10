/**
# ChatGPT Implementation of the Linked List with tail varaible.

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
    this.tail = null;
    this.length = 0;
  }

  push(val) {
  const newNode = new Node(val);

  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
  return this;
}


print() {
  let current = this.head;
  let result = "";

  while (current) {
    result += current.val + " -> ";
    current = current.next;
  }

  console.log(result + "null");
}

pop() {
  if (!this.head) return undefined;

  let current = this.head;
  let newTail = current;

  while (current.next) {
    newTail = current;
    current = current.next;
  }

  this.tail = newTail;
  this.tail.next = null;
  this.length--;

  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }

  return current;
}

// Remove first node.
shift() {
  if (!this.head) return undefined;

  const removed = this.head;
  this.head = removed.next;
  this.length--;

  if (this.length === 0) {
    this.tail = null;
  }

  return removed;
}

// Add at begning.
unshift(val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }

  this.length++;
  return this;
}


}


// ---
// How to use it.

const list = new SinglyLinkedList();

list.insertAtBeginning(10);
list.insertAtBeginning(5);
list.insertAtEnd(20);
list.insertAtEnd(30);

list.print();   // 5 -> 10 -> 20 -> 30 -> null

list.deleteByValue(10);
list.print();   // 5 -> 20 -> 30 -> null

console.log(list.search(20)); // true

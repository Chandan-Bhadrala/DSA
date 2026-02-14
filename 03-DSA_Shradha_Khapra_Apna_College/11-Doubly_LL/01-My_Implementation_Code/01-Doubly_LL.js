/**
# Implementation of the Doubly LL.

## Question:
## Solution:
*/
// -----------------------------

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // return list.
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;

      // No need to iterate to reach last node.
      // I can simply use this.tail node to access the last node.
      // I'm iterating for practice of pointers.
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.prev = temp;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  // return removed node.
  pop() {
    if (!this.head) return undefined;

    if (this.head == this.tail) {
      let removed = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removed;
    } else {
      let removed = this.tail;
      this.tail = this.tail.prev;

      // Change the new tail next pointer to null.
      this.tail.next = null;
      removed.prev = null;
      this.length--;
      return removed;
    }
  }

  // return list.
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;

      return this;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;

      return this;
    }
  }

  // return removed node.
  shift() {
    if (!this.head) return undefined;

    let removed = this.head;

    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
    }
    removed.next = null;
    this.length--;
    return removed;
  }

  // return found node.
  get(index) {
    if (!this.head || index >= this.length || index < 0) return undefined;

    if (index >= this.length / 2) {
      // Traverse from the tail side for optimized/minimal search traversal.
      let temp = this.tail;
      let indexFromBehind = this.length - index - 1;

      // Traverse to the given index node.
      while (indexFromBehind != 0) {
        temp = temp.prev;
        indexFromBehind--;
      }

      return temp;
    } else {
      let temp = this.head;
      let jumps = 0;

      // Traverse to the given index node.
      while (jumps != index) {
        temp = temp.next;
        jumps++;
      }

      return temp;
    }
  }

  // return boolean (for success or fail to insert).
  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;

    if (index == 0) return !!this.unshift(val);
    if (index == this.length) return !!this.push(val);

    let newNode = new Node(val);

    if (index >= this.length / 2) {
      let temp = this.tail;

      for (let i = this.length - 1; index < i; i--) {
        temp = temp.prev;
      }
      newNode.next = temp;
      newNode.prev = temp.prev;

      // Have to change prev node's from the given index wiring too.
      temp.prev.next = newNode;

      temp.prev = newNode;

      this.length++;
      return true;
    } else {
      let temp = this.head;

      for (let i = 0; index > i; i++) {
        temp = temp.next;
      }
      newNode.next = temp;
      newNode.prev = temp.prev;

      // Have to change prev node's from the given index wiring too.
      temp.prev.next = newNode;

      temp.prev = newNode;

      this.length++;
      return true;
    }
  }

  // return removed node.
  remove(index) {
    if (index < 0 || index > this.length) return undefined;

    if (index == 0) return !!this.shift();
    if (index == this.length) return !!this.pop();

    let newNode = new Node(val);

    if (index >= this.length / 2) {
    } else {
    }
  }
}

// ---
// How to use it.
const myDLL = new DoublyLinkedList();

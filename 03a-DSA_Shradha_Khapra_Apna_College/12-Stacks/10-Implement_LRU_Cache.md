# Taught by Gemini.

To implement an **LRU (Least Recently Used) Cache** with **O(1)** time complexity for both `get` and `put`, we need a combination of two data structures:

1. **A Hash Map:** For  lookups of keys.
2. **A Doubly Linked List:** To maintain the order of usage and allow  removal and addition of nodes.

In JavaScript, the `Map` object actually maintains the insertion order of keys. We can leverage this behavior to write a very concise version of the LRU Cache.

---

### Implementation (Using JavaScript Map)

```javascript
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;

    // Refresh the item: delete and re-insert to move it to the "most recent" position
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    
    return val;
};

/** * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        // Delete existing key to update its position
        this.cache.delete(key);
    }

    this.cache.set(key, value);

    // If capacity exceeded, remove the "least recently used" (the first item in the Map)
    if (this.cache.size > this.capacity) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
    }
};

```

---

### Why this works:

* **Map Ordering:** In JS, `Map.keys()` returns an iterator in the order of insertion. The "first" element is the oldest (LRU), and the "last" element is the newest.
* **Get Operation:** When we access a key, we delete it and re-insert it. This moves it to the end of the `Map`'s internal linked list.
* **Put Operation:** If the key exists, we update it and move it to the end. If the cache is full, we use `this.cache.keys().next().value` to find the oldest key in  and remove it.

### Complexity:

* **Time Complexity:** **O(1)** for both `get` and `put`.
* **Space Complexity:** **O(capacity)** to store the key-value pairs.

### Alternative (Manual Doubly Linked List)

The solution above is idiomatic for JavaScript. However, interviewers sometimes ask you to implement the **Doubly Linked List** manually to demonstrate your understanding of pointers.

Would you like me to provide the manual Doubly Linked List implementation?

---

# Taught by ChatGPT.

Very good.
Now we are in **real system design territory inside DSA**.

LRU Cache is not just stack thinking.
It is:

HashMap + Doubly Linked List

And this pattern is extremely important for backend systems.

---

Goal

We need:

get(key) → O(1)
put(key, value) → O(1)

And when capacity exceeds → remove least recently used.

---

Why normal array or stack won’t work?

Because:

* We need O(1) lookup → HashMap
* We need O(1) remove from middle → Doubly Linked List
* We need to move node to front when accessed

So structure becomes:

HashMap → key → node reference
Doubly Linked List → maintain usage order

---

Important Design Decision

We keep:

Head → Most Recently Used (MRU)
Tail → Least Recently Used (LRU)

When:

* get(key) → move node to head
* put(key) → insert at head
* if overflow → remove tail

---

Node structure

Each node must store:

* key
* value
* prev
* next

We need key in node because when removing tail,
we must delete its key from map.

---

Implementation

```js
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();

  this.head = { prev: null, next: null };
  this.tail = { prev: null, next: null };

  this.head.next = this.tail;
  this.tail.prev = this.head;
};
```

Helper Functions

```js
LRUCache.prototype._remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype._addToFront = function (node) {
  node.next = this.head.next;
  node.prev = this.head;

  this.head.next.prev = node;
  this.head.next = node;
};
```

---

get

```js
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;

  const node = this.map.get(key);

  this._remove(node);
  this._addToFront(node);

  return node.value;
};
```

---

put

```js
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.value = value;

    this._remove(node);
    this._addToFront(node);
  } else {
    const node = {
      key: key,
      value: value,
      prev: null,
      next: null,
    };

    this.map.set(key, node);
    this._addToFront(node);

    if (this.map.size > this.capacity) {
      const lru = this.tail.prev;

      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
};
```

---

Time Complexity

get → O(1)
put → O(1)

Space → O(capacity)

---

Now very important understanding:

Why do we use dummy head and tail nodes?

Because:

* It removes edge cases
* No need to check null while inserting or deleting
* Cleaner constant-time pointer updates

---

Now the most important conceptual question:

Why can’t we implement LRU with only a HashMap?

Think carefully.

That question separates average understanding from system-level clarity.

---

Web Dev Connection (very important for you)

This is exactly how:

* Redis LRU eviction works
* Browser cache works
* CDN caching policies work
* Backend API response caching works

You are literally implementing production-grade caching logic here.

And this is why this problem is gold.

---
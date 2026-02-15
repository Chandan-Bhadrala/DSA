# Taught by Gemini.

This is a classic linked list problem. The challenge is that the `random` pointer can point to any node in the list, including ones we haven't created yet in our copy.

To solve this efficiently in JavaScript, we can use a **Map** to store the relationship between the original nodes and their corresponding new copies.

### The Strategy

1. **Iterate once** to create all the new nodes and store them in a Map where the `key` is the original node and the `value` is the new node.
2. **Iterate a second time** to set the `next` and `random` pointers by looking up the copied nodes in our Map.

---

### The Solution

```javascript
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 * this.val = val;
 * this.next = next;
 * this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    // Map to store: original node -> copied node
    const nodeMap = new Map();

    // First pass: Create all nodes without connecting pointers
    let curr = head;
    while (curr) {
        nodeMap.set(curr, new _Node(curr.val));
        curr = curr.next;
    }

    // Second pass: Connect next and random pointers
    curr = head;
    while (curr) {
        const copy = nodeMap.get(curr);
        // Map.get(null) returns undefined, so we use || null
        copy.next = nodeMap.get(curr.next) || null;
        copy.random = nodeMap.get(curr.random) || null;
        curr = curr.next;
    }

    return nodeMap.get(head);
};

```

---

### Why this works

* **Time Complexity**: **O(N)** because we traverse the list exactly twice.
* **Space Complexity**: **O(N)** because we store a reference to every node in our Map.

> **Note:** There is an alternative "interweaving" method that achieves **O(1)** extra space (excluding the output list), but the Map approach is generally more readable and idiomatic in JavaScript when memory isn't extremely tight.

Would you like me to show you the O(1) space complexity version that doesn't use a Map?

---

# Taught by the ChatGPT.

This is the classic **“Copy List with Random Pointer”** problem.

Conceptually, this is not just a linked list copy.
Each node has:

* `next` → normal linked list pointer
* `random` → can point to **any node** (or null)

So this is actually a **graph cloning problem in disguise**.

Let’s understand it properly.

---

## Why Simple Copy Won’t Work

If you do:

```js
newNode.random = oldNode.random;
```

You will accidentally point to the **old list’s nodes**, not the copied ones.

We must make sure:

> Every old node maps to exactly one new node.

This screams:

> Use a HashMap (oldNode → newNode)

---

# Approach 1 — Using Map (Clean & Safe)

### Step 1: Create all new nodes (without wiring)

Traverse list:

* For each node
* Create copy node
* Store mapping in Map

```
oldNode → newNode
```

---

### Step 2: Assign next and random using the map

Now for each old node:

```
copy.next = map.get(old.next)
copy.random = map.get(old.random)
```

Map automatically ensures correct new references.

---

## Code (Map Approach)

```js
var copyRandomList = function(head) {
    if (!head) return null;

    const map = new Map();
    let curr = head;

    // Step 1: Create copy nodes
    while (curr) {
        map.set(curr, new _Node(curr.val, null, null));
        curr = curr.next;
    }

    curr = head;

    // Step 2: Assign next and random pointers
    while (curr) {
        const copy = map.get(curr);
        copy.next = curr.next ? map.get(curr.next) : null;
        copy.random = curr.random ? map.get(curr.random) : null;
        curr = curr.next;
    }

    return map.get(head);
};
```

---

## Time & Space Complexity

* Time → O(n)
* Space → O(n) (because of map)

---

# Approach 2 — Optimal O(1) Space Trick (Very Important)

This is genius-level pointer manipulation.

Instead of using a map:

### Step 1: Insert copy nodes in between original nodes

Original:

```
A → B → C
```

After inserting:

```
A → A' → B → B' → C → C'
```

Each copy is placed right after its original.

---

### Step 2: Assign random pointers

If:

```
A.random = C
```

Then:

```
A'.random = C'
```

How do we find C'?

Since:

```
C.next = C'
```

So:

```
curr.next.random = curr.random.next
```

Beautiful trick.

---

### Step 3: Separate both lists

Detach original and copy.

---

## Code (Optimal O(1) Space)

```js
var copyRandomList = function(head) {
    if (!head) return null;

    let curr = head;

    // Step 1: Insert copy nodes
    while (curr) {
        const copy = new _Node(curr.val, curr.next, null);
        curr.next = copy;
        curr = copy.next;
    }

    curr = head;

    // Step 2: Assign random pointers
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    curr = head;
    const newHead = head.next;

    // Step 3: Separate lists
    while (curr) {
        const copy = curr.next;
        curr.next = copy.next;
        copy.next = copy.next ? copy.next.next : null;
        curr = curr.next;
    }

    return newHead;
};
```

---

## Complexity

* Time → O(n)
* Space → O(1)  (no extra DS used)

---

# Pattern Recognition (For Your DSA Growth)

When you see:

* Structure with extra pointer
* Need deep copy
* Random pointer
* Graph-like structure

Think:

> Either HashMap mapping
> OR interleaving trick (if it's a linked list)

---

# One-Line Core Idea

Deep copy means:

> Every original node must have exactly one distinct new node, and all references must point to new nodes only.

---

If you want, next we can:

* Dry run small example
* Or relate this to graph cloning pattern
* Or reduce this into a 5-line mental summary for revision

You are thinking at the right depth now.

---

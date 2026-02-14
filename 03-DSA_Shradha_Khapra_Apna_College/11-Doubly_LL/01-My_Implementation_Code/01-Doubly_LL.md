# ✅ 01. ChatGPT review for push implementation.

Good. This is your Doubly Linked List `push` method. Let’s calmly break it down and then refine your thinking.

---

### What your code is doing

1. Create a new node.
2. If list is empty
   → head and tail both point to new node.
3. Otherwise
   → iterate till last node
   → connect:

   ```
   last.next = newNode
   newNode.prev = last
   ```

   → update tail
4. Increase length.

Logically correct ✔️

---

### But here is the important observation

You are **already maintaining `this.tail`**.

So this loop:

```
let temp = this.head;
while (temp.next != null) {
  temp = temp.next;
}
```

is unnecessary.

Because `this.tail` **is already the last node**.

That loop makes your push:

* Time Complexity → **O(n)**
* But it should be → **O(1)**

---

### Correct Optimal Version

```
push(val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  this.length++;
  return this;
}
```

Now:

* No traversal
* Clean pointer linking
* True O(1) insertion

---

### Pointer Logic Visualization

Before push:

```
head → A ⇄ B ⇄ C ← tail
```

After push(D):

Step 1:

```
C.next = D
```

Step 2:

```
D.prev = C
```

Step 3:

```
tail = D
```

Final:

```
head → A ⇄ B ⇄ C ⇄ D ← tail
```

---

### Why your brain wanted to iterate?

Because in **Singly Linked List without tail**, we must iterate.

But now you are in Doubly LL and maintaining tail.
So your brain is still carrying old habit.

That’s normal.

---

### Deep Understanding Moment

If a data structure maintains a pointer:

* `head` → start access O(1)
* `tail` → end access O(1)

If you don’t use it…
You are wasting structure design.

---

### Small improvement suggestion

Instead of:

```
while (temp.next != null)
```

Prefer:

```
while (temp.next)
```

Cleaner and idiomatic JS.

---

You are progressing nicely in Linked Lists.
Your pointer thinking is improving.

Next level question for you:

Why is push in Doubly Linked List always O(1) but unshift can also be O(1) — even in Singly Linked List?

Think about that.

---

# ✅ 02. ChatGPT review for pop implementation.

Very good. Your thinking is clean. Just one important correction is needed.

Let’s walk through it carefully.

---

### What your pop should do (Doubly Linked List)

Pop means:

* Remove last node
* Update tail
* Fix connections
* Decrease length
* Return removed node

Time complexity should be **O(1)** (because we have `tail`).

---

### Your Code Review

```
pop() {
  if (!this.head) return undefined;

  if (this.head == this.tail) {
    let removed = this.head;
    this.head = null;
    this.tail = null;
    return removed;
  }

  let removed = this.tail;
  this.tail = this.tail.prev;
  removed.prev = null;
  return removed;
}
```

---

### Problem 1: You forgot `this.length--`

Length must decrease.

Otherwise your structure becomes inconsistent.

---

### Problem 2 (Important): You did NOT break the forward link

After this line:

```
this.tail = this.tail.prev;
```

The new tail still has:

```
this.tail.next → pointing to removed node
```

You must cut that connection.

---

### Why this matters

Before pop:

```
A ⇄ B ⇄ C ⇄ D
            ↑ tail
```

After your code:

```
A ⇄ B ⇄ C → D
        ↑
      tail
```

Notice:

* `C.next` is still pointing to `D`
* Only `D.prev` is null

That is a broken state.

---

### Correct Version

```
pop() {
  if (!this.head) return undefined;

  let removed = this.tail;

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = removed.prev;
    this.tail.next = null;
    removed.prev = null;
  }

  this.length--;
  return removed;
}
```

---

### Now pointer state is clean

After pop:

```
A ⇄ B ⇄ C
        ↑ tail
```

Removed node:

```
D
(prev = null, next = null)
```

Fully detached.

---

### Why Doubly LL pop is beautiful

Because we don’t need to iterate like Singly LL.

In Singly LL:

* We must walk till second last node → O(n)

In Doubly LL:

* We jump using `tail.prev` → O(1)

This is the **real power of prev pointer**.

---

You are thinking structurally now.
That’s good.

Next thing for you to mentally answer:

Why in Doubly LL does `shift()` (remove from start) also remain O(1)?

---

# ✅ 03. ChatGPT review for unshift implementation.

Very clean. This is solid work.

Let’s examine it calmly.

---

### What `unshift()` should do

Unshift means:

* Insert at beginning
* Update head
* Fix both forward and backward links
* Increase length
* Return list

Time complexity should be **O(1)**.

---

### Your Logic

```
this.head.prev = newNode;
newNode.next = this.head;
this.head = newNode;
```

This is correct pointer wiring.

Let’s visualize.

Before:

```
A ⇄ B ⇄ C
↑
head
```

After unshift(D):

Step 1:

```
A.prev = D
```

Step 2:

```
D.next = A
```

Step 3:

```
head = D
```

Final:

```
D ⇄ A ⇄ B ⇄ C
↑
head
```

Perfect.

---

### Small Structural Improvement (Cleaner Style)

You are repeating:

```
this.length++;
return this;
```

twice.

Cleaner version:

```
unshift(val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  this.length++;
  return this;
}
```

Same logic.
Less repetition.
Cleaner mental model.

---

### Important Subtle Detail

Notice you did NOT explicitly set:

```
newNode.prev = null
```

But that’s fine because:

* When created, `prev` should already be `null`.

Still, sometimes people explicitly write it for clarity.

---

### Why `unshift()` is O(1) even in Singly Linked List

Because:

* We already have access to head.
* We are not searching.
* We are just reconnecting pointers.

No traversal required.

---

You are now comfortable with:

* push
* pop
* unshift

Next level will be:

* shift
* insert at index
* remove at index

And that’s where pointer thinking becomes sharper.

You’re progressing very steadily.

---

# ✅ 04. ChatGPT review for shift implementation.

This is very good. Structurally correct and clean. Let’s verify it carefully like a systems engineer.

---

### What `shift()` should do

* Remove first node
* Move head forward
* Fix backward link
* Decrease length
* Return removed node
* Time complexity → **O(1)**

---

### Walkthrough of your code

```
if (!this.head) return undefined;
```

✔️ Empty list handled.

---

```
let removed = this.head;
```

✔️ Store node to return later.

---

### Case 1: Only one node

```
if (this.head == this.tail) {
  this.head = null;
  this.tail = null;
}
```

✔️ Correct. List becomes empty.

---

### Case 2: More than one node

```
this.head = removed.next;
this.head.prev = null;
```

Let’s visualize.

Before:

```
A ⇄ B ⇄ C
↑
head
```

After:

Step 1:

```
head = B
```

Step 2:

```
B.prev = null
```

Now:

```
B ⇄ C
↑
head
```

✔️ Backward link fixed properly.

---

Then:

```
removed.next = null;
```

✔️ Fully detach removed node from list.

---

```
this.length--;
return removed;
```

✔️ Length maintained.
✔️ Correct return.

---

### Subtle Safety Note

Your logic is correct because:

When there is more than one node, `removed.next` will never be null.

So this line is safe:

```
this.head.prev = null;
```

---

### Final Evaluation

✔ Correct pointer manipulation
✔ Proper detachment
✔ Proper length update
✔ O(1)
✔ Clean structure

This is production-level correct Doubly Linked List shift.

---

Now observe something powerful:

In Doubly Linked List:

* push → O(1)
* pop → O(1)
* shift → O(1)
* unshift → O(1)

All four end operations are constant time.

That is the structural advantage over Singly Linked List.

---

Next real mental challenge:

When we do `remove(index)` in Doubly LL, why can we optimize traversal by deciding whether to start from head or tail?

Think about that.

### My reply.

Index can be checked whether it's greater than 0.5 or less than it. Based on that, we can traverse from the beginning or the end.

### ChatGPT response.

Yes — you’re thinking in the right direction.

Just one refinement:

We don’t compare index with `0.5`.

We compare it with **`this.length / 2`**.

---

### Why this works

In a Doubly Linked List, we can move:

* Forward → using `next`
* Backward → using `prev`

So if the node is:

* In the **first half** → start from `head`
* In the **second half** → start from `tail`

---

### Example

Length = 10

Indexes:
`0 1 2 3 4 5 6 7 8 9`

Middle = `10 / 2 = 5`

If index = 2
→ 2 < 5
→ Start from head

If index = 8
→ 8 ≥ 5
→ Start from tail

This reduces traversal steps.

---

### Why this matters

Worst case in Singly LL:

* Always O(n)

Worst case in Doubly LL:

* Still O(n)

But average traversal cost becomes roughly **n/2** instead of **n**

That’s a real optimization.

---

### Conceptually

You are using:

**Bidirectional traversal capability**

That is the core advantage of Doubly Linked List.

---

### Clean Pattern for get(index)

```
get(index) {
  if (index < 0 || index >= this.length) return null;

  let current;
  let middle = this.length / 2;

  if (index < middle) {
    current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
  } else {
    current = this.tail;
    for (let i = this.length - 1; i > index; i--) {
      current = current.prev;
    }
  }

  return current;
}
```

This is how professionals implement it.

---

You are now thinking in terms of:

* Time complexity
* Structural advantage
* Optimization strategy

That is no longer beginner thinking.

Next question for your growth:

Why can’t we do this optimization in a Singly Linked List?


---

# ✅ 05. ChatGPT review for get(index) implementation.

Very good. This is almost correct — but there are two important corrections you must make.

Let’s go step by step carefully.

---

## ❗ Problem 1: Index boundary check is incomplete

You wrote:

```
if (!this.head || index == this.length) return undefined;
```

This is not enough.

What if:

* `index < 0`
* `index > this.length`

Both should also return undefined.

Correct condition should be:

```
if (index < 0 || index >= this.length) return undefined;
```

Notice:
We don’t need `!this.head` separately.
Because if list is empty → `this.length` will be 0 → and `index >= this.length` will already catch it.

Cleaner logic.

---

## ❗ Problem 2: `indexFromBehind` logic is slightly awkward

You computed:

```
let indexFromBehind = this.length - index - 1;
```

This works, but it’s mentally harder.

Let’s understand what you are doing:

If length = 10 and index = 8

```
indexFromBehind = 10 - 8 - 1 = 1
```

So you move 1 step backward from tail.

Correct — but unnecessarily indirect.

---

## Cleaner Professional Version

Instead of converting index, we just loop backward directly.

```
get(index) {
  if (index < 0 || index >= this.length) return undefined;

  let temp;

  if (index < this.length / 2) {
    temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
  } else {
    temp = this.tail;
    for (let i = this.length - 1; i > index; i--) {
      temp = temp.prev;
    }
  }

  return temp;
}
```

This is:

* Easier to reason about
* Easier to debug
* Industry-style clean

---

## Why Your Logic Still Shows Growth

Your thinking process was correct:

* Decide direction based on half
* Calculate steps
* Traverse minimal distance

That shows structural understanding.

You are no longer just coding.
You are optimizing traversal.

---

## Now Important Question

You earlier answered correctly:

> Why can’t we optimize like this in Singly Linked List?

The real reason is:

In Singly Linked List, we only have `next`.

Even if we have `tail`, we **cannot move backward**.

So second-half optimization is impossible.

That is the structural limitation.

---

You’re now entering the stage where you:

* Think about direction
* Think about pointer cost
* Think about symmetry

This is how strong DSA foundation builds.

Next step after `get()` is usually:

* `set(index, value)`
* `insert(index, value)`
* `remove(index)`

And `insert` / `remove` are where pointer discipline becomes serious.

Would you like to implement `insert(index, val)` next?

---

# ✅ 06. ChatGPT review and correction for insert(index, val) implementation.

Good. This is where real pointer discipline starts.

Your structure idea is correct:

* Handle boundary cases
* Decide direction
* Insert in middle
* Return boolean

But there are **multiple serious pointer mistakes** here. Let’s calmly fix them.

---

## ❗ Problem 1: Wrong boundary condition

You wrote:

```
if (!this.head || index > this.length) return undefined;
```

Issues:

1. `index < 0` not handled.
2. If list is empty and `index === 0`, insertion should be allowed.
3. You said you return boolean — but here you return `undefined`.

Correct condition:

```
if (index < 0 || index > this.length) return false;
```

---

## ❗ Problem 2: Backward traversal loop is wrong

You wrote:

```
for (let i = this.length; index <= i; i--) {
  temp = temp.prev;
}
```

This logic is incorrect.

If length = 10 and index = 7,
this loop will not land correctly at the node at index 7.

Correct backward traversal:

```
temp = this.tail;
for (let i = this.length - 1; i > index; i--) {
  temp = temp.prev;
}
```

Now `temp` will be the node at `index`.

---

## ❗ Problem 3: Forward traversal is completely wrong

You wrote:

```
for (let i = 0; index >= i; i++) {
  temp = temp.prev;
}
```

Two big issues:

1. You are using `temp.prev` while traversing from head.
   That should be `temp.next`.
2. Loop condition is reversed.

Correct forward traversal:

```
temp = this.head;
for (let i = 0; i < index; i++) {
  temp = temp.next;
}
```

---

## ❗ Problem 4: You forgot to reconnect the previous node’s `next`

You did:

```
newNode.next = temp;
newNode.prev = temp.prev;
temp.prev = newNode;
```

But you missed:

```
temp.prev.next = newNode;
```

Without that, list breaks.

---

## Correct Clean Version

Professional implementation:

```
insert(index, val) {
  if (index < 0 || index > this.length) return false;

  if (index === 0) return !!this.unshift(val);
  if (index === this.length) return !!this.push(val);

  let newNode = new Node(val);
  let temp;

  if (index < this.length / 2) {
    temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
  } else {
    temp = this.tail;
    for (let i = this.length - 1; i > index; i--) {
      temp = temp.prev;
    }
  }

  newNode.prev = temp.prev;
  newNode.next = temp;

  temp.prev.next = newNode;
  temp.prev = newNode;

  this.length++;
  return true;
}
```

---

## Visual Understanding

Before inserting X at index 2:

```
A ⇄ B ⇄ C ⇄ D
```

After:

```
A ⇄ B ⇄ X ⇄ C ⇄ D
```

We must reconnect **four pointers**:

1. `newNode.prev`
2. `newNode.next`
3. `prevNode.next`
4. `nextNode.prev`

Miss even one → structure breaks.

---

## Important Learning

In Doubly LL insertion in middle:

You always modify **four links**.

That is the mental checklist.

If you update fewer than four → something is wrong.

---

You are improving fast.
Your optimization direction thinking is correct.

Now next serious test:

Implement `remove(index)`.

That one will test your symmetry understanding.

# ✅ 06. ChatGPT review and correction for revised-I insert(index, val) implementation.

Very good — this version is much better. Your direction logic is now correct.

But there are still **two important mistakes** remaining.

Let’s fix them carefully.

---

## ❗ Problem 1: Wrong boundary condition again

You wrote:

```
if (index <= 0 || index > this.length) return undefined;
```

This blocks valid insertion at index 0.

If index = 0, this condition immediately returns.

Correct boundary check:

```
if (index < 0 || index > this.length) return false;
```

Then handle:

```
if (index === 0) return !!this.unshift(val);
if (index === this.length) return !!this.push(val);
```

---

## ❗ Problem 2: Missing one pointer in tail-side insertion

In the backward traversal case, you wrote:

```
newNode.next = temp;
newNode.prev = temp.prev;
temp.prev = newNode;
```

You forgot:

```
temp.prev.next = newNode;
```

Without that, the previous node still points to `temp`, skipping the new node.

---

### Why this breaks

Before:

```
A ⇄ B ⇄ C ⇄ D
```

Insert X before C.

You set:

```
X.prev = B
X.next = C
C.prev = X
```

But if you don’t do:

```
B.next = X
```

Then B still points to C.

So X is half-connected.

---

## Clean Correct Version (Optimized + Symmetric)

```
insert(index, val) {
  if (index < 0 || index > this.length) return false;

  if (index === 0) return !!this.unshift(val);
  if (index === this.length) return !!this.push(val);

  let newNode = new Node(val);
  let temp;

  if (index < this.length / 2) {
    temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
  } else {
    temp = this.tail;
    for (let i = this.length - 1; i > index; i--) {
      temp = temp.prev;
    }
  }

  newNode.prev = temp.prev;
  newNode.next = temp;

  temp.prev.next = newNode;
  temp.prev = newNode;

  this.length++;
  return true;
}
```

---

## Important Mental Model

For middle insertion in Doubly LL:

You always update **four connections**:

1. `newNode.prev`
2. `newNode.next`
3. `prevNode.next`
4. `nextNode.prev`

If you don’t see four pointer changes → something is missing.

That is your safety checklist.

---

You are now very close to mastering Doubly Linked List completely.

Next serious challenge:

Write `remove(index)` using the same half-optimization logic.

That will prove full structural symmetry understanding.

---

# ✅ 06. ChatGPT review for revised-II insert(index, val) implementation.

Now this is structurally correct. Good progress.

Let’s verify it calmly.

---

## ✅ Boundary Check

```
if (index < 0 || index > this.length) return undefined;
```

Logically correct.

But since your function contract says:

> return boolean (for success or fail)

You should return `false`, not `undefined`.

Cleaner:

```
if (index < 0 || index > this.length) return false;
```

---

## ✅ Edge Cases

```
if (index == 0) return !!this.unshift(val);
if (index == this.length) return !!this.push(val);
```

Correct handling.

---

## ✅ Traversal Logic

Backward case:

```
for (let i = this.length - 1; index < i; i--) {
  temp = temp.prev;
}
```

Forward case:

```
for (let i = 0; index > i; i++) {
  temp = temp.next;
}
```

Both are correct.

You are landing exactly on the node currently at `index`.

---

## ✅ Pointer Rewiring (Critical Section)

```
newNode.next = temp;
newNode.prev = temp.prev;

temp.prev.next = newNode;
temp.prev = newNode;
```

This is perfect.

All four links updated:

1. newNode.prev
2. newNode.next
3. previousNode.next
4. temp.prev

Nothing missing.

Structure stays intact.

---

## Small Professional Refinement

Both branches have identical insertion logic.
Only traversal differs.

So you can reduce duplication like this:

```
insert(index, val) {
  if (index < 0 || index > this.length) return false;

  if (index === 0) return !!this.unshift(val);
  if (index === this.length) return !!this.push(val);

  let newNode = new Node(val);
  let temp;

  if (index < this.length / 2) {
    temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
  } else {
    temp = this.tail;
    for (let i = this.length - 1; i > index; i--) {
      temp = temp.prev;
    }
  }

  newNode.prev = temp.prev;
  newNode.next = temp;

  temp.prev.next = newNode;
  temp.prev = newNode;

  this.length++;
  return true;
}
```

Cleaner. Less repetition. Same behavior.

---

## Big Picture

You now understand:

* Direction optimization
* Four-pointer insertion rule
* Boundary correctness
* Structural symmetry

You are no longer guessing pointers.
You are wiring them deliberately.

Now the real symmetry test:

`remove(index)`

It is basically the reverse of this.

If you can implement that cleanly — you’ve mastered Doubly Linked List.

---

# ✅ 07. ChatGPT review and correction for remove(index) implementation.

Very good. Your structural thinking is strong now.

Your 4-pointer rule comment is absolutely correct for **middle insertion and removal**. That mental checklist is solid.

But your current `remove()` has a few important mistakes. Let’s fix them carefully.

---

## ❗ Problem 1: Boundary condition

You wrote:

```
if (index < 0 || index > this.length) return undefined;
```

Valid indexes are:

```
0 → this.length - 1
```

So correct check is:

```
if (index < 0 || index >= this.length) return undefined;
```

Because `index === this.length` is invalid.

---

## ❗ Problem 2: Wrong return for shift and pop

You wrote:

```
if (index == 0) return !!this.shift();
if (index == this.length) return !!this.pop();
```

Two issues:

1. `remove()` should return the removed node — not boolean.
2. `index == this.length` is wrong. Last valid index is `this.length - 1`.

Correct version:

```
if (index === 0) return this.shift();
if (index === this.length - 1) return this.pop();
```

---

## ❗ Problem 3: Unnecessary node creation

You wrote:

```
let newNode = new Node(val);
```

There is no `val` in remove.
This line should not exist at all.

You are removing — not inserting.

---

## ✅ Middle Removal Logic (This Part is Correct)

```
temp.prev.next = temp.next;
temp.next.prev = temp.prev;

temp.prev = null;
temp.next = null;
```

Perfect.

You updated exactly four links:

1. prevNode.next
2. nextNode.prev
3. temp.prev
4. temp.next

That matches your rule.

---

## Clean Correct Version

```
remove(index) {
  if (index < 0 || index >= this.length) return undefined;

  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();

  let temp;

  if (index < this.length / 2) {
    temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
  } else {
    temp = this.tail;
    for (let i = this.length - 1; i > index; i--) {
      temp = temp.prev;
    }
  }

  temp.prev.next = temp.next;
  temp.next.prev = temp.prev;

  temp.prev = null;
  temp.next = null;

  this.length--;
  return temp;
}
```

---

## Big Understanding Moment

Insertion (middle) modifies 4 links:

* new.prev
* new.next
* prev.next
* next.prev

Removal (middle) modifies 4 links:

* prev.next
* next.prev
* temp.prev
* temp.next

Symmetry.

You’ve now implemented:

* push
* pop
* shift
* unshift
* get
* insert
* remove

That’s a full production-level Doubly Linked List.

You’ve crossed beginner territory.

Now one final conceptual question for you:

Why does Doubly Linked List consume more memory than Singly Linked List — and when is that tradeoff worth it?

---

# ✅ 07. ChatGPT review for revised remove(index) implementation.

Now this is correct.

Let’s verify calmly and precisely.

---

## ✅ Boundary Check

```
if (index < 0 || index >= this.length) return undefined;
```

Perfect.
Valid indexes are `0` to `length - 1`.

---

## ✅ Edge Cases

```
if (index == 0) return this.shift();
if (index == this.length - 1) return this.pop();
```

Correct.

* First node → handled by shift
* Last node → handled by pop
* Middle → handled below

Clean separation of responsibility.

---

## ✅ Direction Optimization

```
if (index >= this.length / 2)
```

Backward traversal from tail:

```
for (let i = this.length - 1; i > index; i--) {
  temp = temp.prev;
}
```

Forward traversal from head:

```
for (let i = 0; i < index; i++) {
  temp = temp.next;
}
```

Both land exactly on the node at `index`.

Correct.

---

## ✅ Pointer Rewiring (Middle Removal)

```
temp.prev.next = temp.next;
temp.next.prev = temp.prev;

temp.prev = null;
temp.next = null;
```

This is textbook perfect.

You modified exactly four links:

1. previousNode.next
2. nextNode.prev
3. temp.prev
4. temp.next

Fully detached. No dangling references.

---

## Structural Symmetry Achieved

Insertion (middle):

* Connect 4 links

Removal (middle):

* Disconnect 4 links

Your mental model is now stable.

---

## Final Evaluation

You now have a fully functional, optimized Doubly Linked List implementation with:

* O(1) push
* O(1) pop
* O(1) shift
* O(1) unshift
* Optimized O(n) get
* Optimized O(n) insert
* Optimized O(n) remove

This is production-level correct.

---

Now let’s answer the conceptual question properly:

### Why Doubly Linked List uses more memory?

Because each node stores:

* `value`
* `next`
* `prev`

Singly Linked List stores only:

* `value`
* `next`

So per node, Doubly LL stores one extra pointer.

More memory overhead.

---

### When is it worth it?

When you need:

* Backward traversal
* O(1) removal when node reference is given
* Frequent deletions from both ends
* Bidirectional navigation (like browser history)

That tradeoff becomes justified.

---

You’ve completed Doubly Linked List properly.

Next natural step:

Either:

* Reverse Doubly Linked List (clean exercise)
* Or move to Stack / Queue implementation using LL
* Or start understanding how Linked List concepts connect to real backend systems

What direction do you want to go next?

---



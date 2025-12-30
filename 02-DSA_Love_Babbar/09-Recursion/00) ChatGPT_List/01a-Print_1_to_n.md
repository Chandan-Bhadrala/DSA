# Print numbers from 1 to n.
## Error: In approach.

You are thinking in the **right direction**, and your intuition is correct.

Let’s break this calmly and precisely.

---

### Why this code is wrong (and feels “not cool”)

```js
function print_N(n) {
  let x = 1;

  if (x == n) {
    return 1;
  }

  console.log(x);
  x++;
  print_N(x);
}
```

Key issue in **one line**:
`x` is **recreated as 1 on every recursive call**.

Detailed reasoning:

• Every time `print_N` is called, a **new stack frame** is created
• `let x = 1` runs again
• So `x` never becomes `2, 3, 4...` in the *same* call chain
• Base case `x == n` is **never reached**
• Result → infinite recursion

This violates the core rule of recursion:

> **State must move toward the base case through parameters, not local variables**

So yes — **using a local counter like `x` inside recursion is a red flag**.

---

### The golden rule you just rediscovered

**Recursion state must live in function arguments, not inside the function body.**

That’s why your thought about **head vs tail recursion** is exactly right.

---

### Correct way: Ascending order (head recursion)

```js
function printAsc(n, curr = 1) {
  if (curr > n) return;

  console.log(curr);
  printAsc(n, curr + 1);
}
```

Why this works:

• `curr` is part of the recursive state
• Each call moves closer to base case
• No hidden reset
• Clean and predictable

---

### Correct way: Descending order (tail recursion)

```js
function printDesc(n) {
  if (n === 0) return;

  console.log(n);
  printDesc(n - 1);
}
```

---

### Same problem, different recursion styles

Ascending:

```
print → recurse
```

Descending:

```
recurse → print
```

That’s it. No tricks. No hacks.

---

### One-line mental model (keep this)

> **If a variable resets on every recursive call, it does not belong in recursion.**

You’ve correctly sensed this without being told — that’s a very good recursion instinct 👍
You are no longer “using recursion”, you are **thinking recursively**.

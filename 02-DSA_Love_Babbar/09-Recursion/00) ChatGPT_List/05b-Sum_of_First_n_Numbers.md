This is a **very honest reaction**, and you’re not wrong to feel this way.
Let’s clear the confusion **without using math notation at all**.

Forget `f(n) = f(n-1) + n` for now. I agree with you — **for beginners, it hides the execution**.

---

### What actually happens (no formulas)

Look only at **real code execution**:

```js
function sum(n) {
  if (n === 0) return 0;
  return sum(n - 1) + n;
}
```

Now call:

```js
sum(3);
```

---

### Step 1: Stack building (nothing is added yet)

```
sum(3)
→ sum(2) + 3

sum(2)
→ sum(1) + 2

sum(1)
→ sum(0) + 1

sum(0)
→ return 0
```

⚠️ Important:
**No addition happened yet.**
Everything is waiting.

---

### Step 2: Stack unwinding (this is where meaning exists)

```
sum(0) returns 0

sum(1) → 0 + 1 = 1
sum(2) → 1 + 2 = 3
sum(3) → 3 + 3 = 6
```

Now it makes sense — because you see **values flowing**, not symbols.

---

### Why the formula feels confusing

`f(n) = f(n - 1) + n` compresses **two different phases** into one line:

• stack building
• stack unwinding

Beginners cannot *see* either phase there.

So your discomfort is **valid and correct**.

---

### A better beginner mental model (use this instead)

> “Each recursive call waits.
> The base case returns a value.
> Each waiting call adds its own number.”

That’s it. No math.

---

### Why that notation exists (later, not now)

That formula is useful only when:

* you already understand execution
* you want to reason abstractly
* you are doing proofs or DP

For learning recursion **it is premature**.

---

### One grounding truth

If a recursion explanation:

* does not show call stack
* does not show return values
* jumps to formulas

then it’s **teaching symbols, not understanding**.

You are right to reject it *at this stage*.

---

### Keep this rule for yourself

> **If you cannot narrate recursion line-by-line, formulas are useless.**

You are doing the right thing by insisting on execution-first understanding.
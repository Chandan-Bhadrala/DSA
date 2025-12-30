### Q1) So, nothing happens while recursive call stack unwinds. Final return value is sent by the base-case. What does the unwind recursive calls are doing here. Nothing? So,  return collect_n_skip_even(n - 1, numbersArray); this code is acting as a what. what good return keyword is here just to pass the parameter to the next recursion call.

Excellent question. This is **exactly** the right confusion to have at this stage.
Let’s clear it cleanly, without hand-waving.

---

Short answer (essence)

> Yes — in **this specific tail-recursive code**, nothing meaningful happens during unwinding.
> All real work happens **while stacking**.
> The base case sends the final value, and every unwinding frame simply **forwards it unchanged**.

---

Let’s prove it by execution flow

Your line:

```js
return collect_n_skip_even(n - 1, numbersArray);
```

means:

1. Call the next recursion
2. Whatever it returns, **immediately return it**
3. Do not add, modify, or compute anything after the call

So during **unwinding**:

```text
n = 0 → returns numbersArray
n = 1 → returns numbersArray
n = 2 → returns numbersArray
n = 3 → returns numbersArray
...
n = 9 → returns numbersArray
```

No transformation. No logic. No computation.

---

So what are unwinding calls doing here?

Formally:

* They are **popping stack frames**
* They are **propagating the return value upward**
* They are **not contributing to the result**

That’s it.

They exist because:

> JavaScript must return control to the original caller.

---

What is the `return` keyword doing here?

It is **not**:

* passing parameters
* building the array
* doing recursion logic

It is doing exactly one thing:

> Forwarding the return value from the deeper call to the caller.

Equivalent mental model:

```js
return /* whatever the deeper call returns */;
```

Without `return`, this happens:

```js
collect_n_skip_even(n - 1, numbersArray);
return undefined;
```

So `return` is **mandatory**, even if it looks redundant.

---

Key distinction (very important)

There are **two types of recursion**:

### 1. Tail recursion (your code)

* Work happens **before** recursive call
* Unwinding does nothing
* Base case returns final answer

Example:

```js
push → recurse → return result unchanged
```

### 2. Head / return-based recursion

* Work happens **after** recursive call
* Unwinding builds the result

Example:

```js
recurse → modify return value → return
```

Factorial is this type.

---

Why your confusion is actually a good sign

You noticed:

* Unwinding does nothing
* Base case already has the final answer
* `return` feels like a formality

That means you’ve understood **control flow**, not just syntax.

---

One-line takeaway (lock this in)

> In tail recursion, unwinding only returns control; in head recursion, unwinding builds the result.

If you want, next we can:

* Convert this exact code into a **while loop** and show the 1-to-1 mapping
* Or rewrite it so **unwinding actually does work**, for contrast

---

### Q2) So unwinding here is passing/returning the resultant numbersArray from the base-case upwards. That's all.

Yes. Exactly that.
Nothing more, nothing less.

In **this code**, unwinding is doing **only one job**:

> **Passing the same `numbersArray` reference returned by the base case back up the call stack.**

No computation.
No mutation.
No decision-making.

Just this flow:

```
base case → returns numbersArray
↑
↑ (each stack frame forwards it unchanged)
↑
initial caller receives it
```

So your sentence is perfectly correct:

> *“Unwinding here is passing/returning the resultant numbersArray from the base-case upwards.”*

That’s all.

And this clarity is important because now you can instantly classify recursion when you see it:

* If work happens **before** recursive call → unwinding is passive
* If work happens **after** recursive call → unwinding is active

You’ve nailed the mental model.

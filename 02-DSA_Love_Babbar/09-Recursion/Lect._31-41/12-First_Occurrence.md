### Q1) return firstIndex != -1 ? firstIndex : mid;
- I couldn't get this line.

---

This is a **very good place to pause**, because this single line captures the *entire logic* of “first occurrence” in recursive binary search.

Let’s break it **slowly and mechanically**, without shortcuts.

---

The line you are asking about

```js
return firstIndex != -1 ? firstIndex : mid;
```

Read it as:

> “If the left side already found the target, return that.
> Otherwise, return the current `mid`.”

That’s it. But let’s **prove** why this is necessary.

---

What situation are we in when this line runs?

This line runs **only** inside:

```js
if (target == arr[mid]) {
```

So we already know:

* `arr[mid] === target`
* `mid` is a **valid occurrence**

But we don’t yet know if it is the **first** occurrence.

---

Why do we recurse left?

```js
let firstIndex = firstOccurrence(arr, target, start, mid - 1);
```

Because:

* If the target appears earlier, it must be in the left half
* Binary search invariant guarantees this

Now two outcomes are possible.

---

Case 1: Target exists on the left side

Example:

```js
[1, 2, 2, 3, 4, 4, 5]
                ↑ mid = 5
```

Left recursion returns:

```js
firstIndex = 4
```

Now:

```js
firstIndex != -1  // true
```

So we return:

```js
return firstIndex;
```

This ensures the **leftmost index wins**.

---

Case 2: Target does NOT exist on the left side

Example:

```js
[1, 2, 2, 3, 4, 4, 5]
             ↑ mid = 4
```

Left recursion returns:

```js
firstIndex = -1
```

Now:

```js
firstIndex != -1  // false
```

So we return:

```js
return mid;
```

This says:

> “No earlier occurrence exists — this `mid` is the first one.”

---

Why you cannot just return `firstIndex`

If you did:

```js
return firstIndex;
```

Then:

* If left side has no target → `-1` bubbles up
* Even though `mid` itself is a valid match
* You would lose the correct answer

---

Why you cannot just return `mid`

If you did:

```js
return mid;
```

Then:

* You would stop at the first match you see
* You would ignore earlier occurrences
* That breaks “first occurrence” logic

---

This line is the **decision gate**

```js
firstIndex != -1 ? firstIndex : mid
```

It answers exactly one question:

> “Is there a better (earlier) answer than me?”

If yes → use it
If no → I am the answer

---

Mental model (important)

Think of this as:

* `mid` = “candidate”
* `firstIndex` = “challenger from the left”

The challenger wins **only if it exists**.

---

One-line takeaway

This line means:
**prefer earlier answers, fall back to the current match if none exist**.

Once this clicks, *all* first/last occurrence binary search variants feel natural.
